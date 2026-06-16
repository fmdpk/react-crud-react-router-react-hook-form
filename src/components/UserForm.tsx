// src/components/UserForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  useLoaderData,
  useNavigate,
  useActionData,
  useNavigation,
  Form as RouterForm,
} from "react-router-dom";
import { useEffect } from "react";
import Label from "./Label";
import type { User } from "../data";

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18").max(100, "Age too high"),
  role: z.enum(["admin", "user", "guest"]),
});

type UserFormData = z.infer<typeof userSchema>;

export function UserForm() {
  const user = useLoaderData<User | null>(); // null when creating
  const navigate = useNavigate();
  const actionData = useActionData<{ success?: boolean }>();
  const navigation = useNavigation(); // helps show loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: user
      ? {
          name: user.name,
          email: user.email,
          age: user.age,
          role: user.role,
        }
      : undefined,
  });

  // ✅ Redirect after successful action
  useEffect(() => {
    if (actionData?.success) {
      navigate("/", { replace: true });
    }
  }, [actionData, navigate]);

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-6">
          {user ? "Edit User" : "Create New User"}
        </h2>

        <RouterForm method="post" className="space-y-6">
          <div>
            <Label label="Name" />
            <input
              {...register("name")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john@example.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label label="Age" />
            <input
              type="number"
              {...register("age", { valueAsNumber: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
            )}
          </div>

          <div>
            <Label label="Role" />
            <select
              {...register("role")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="guest">Guest</option>
            </select>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 text-white py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? "Saving..."
                : user
                  ? "Update User"
                  : "Create User"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              disabled={isSubmitting}
              className="flex-1 border border-gray-300 py-3.5 rounded-lg font-semibold hover:bg-gray-50 disabled:opacity-70"
            >
              Cancel
            </button>
          </div>
        </RouterForm>
      </div>
    </div>
  );
}
