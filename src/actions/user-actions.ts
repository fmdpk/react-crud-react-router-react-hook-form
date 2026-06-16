import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { createUser, deleteUser, updateUser } from "../data";

// Add delete action (you can add this route in router)
export async function deleteUserAction({ params }: ActionFunctionArgs) {
  deleteUser(params.id);
  return redirect("/");
}

export async function createUserAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const userData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    age: Number(formData.get("age")),
    role: formData.get("role") as "admin" | "user" | "guest",
  };

  createUser(userData);
  return { success: true };
}

export async function updateUserAction({
  params,
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();

  const userData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    age: Number(formData.get("age")),
    role: formData.get("role") as "admin" | "user" | "guest",
  };

  updateUser(params.id!, userData);
  return { success: true };
}
