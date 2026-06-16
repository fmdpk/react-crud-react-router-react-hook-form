import { redirect } from "react-router-dom";
import { createUser, deleteUser, updateUser } from "../data";

// Add delete action (you can add this route in router)
export async function deleteUserAction({ params }: { params: { id: string } }) {
  deleteUser(params.id);
  return redirect("/");
  // return null; // will trigger revalidation
}

export async function createUserAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const userData = {
    name: data.name as string,
    email: data.email as string,
    age: Number(data.age),
    role: data.role as "admin" | "user" | "guest",
  };

  createUser(userData); // Make sure createUser is imported
  return { success: true };
}

export async function updateUserAction({
  params,
  request,
}: {
  params: { id: string };
  request: Request;
}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const userData = {
    name: data.name as string,
    email: data.email as string,
    age: Number(data.age),
    role: data.role as "admin" | "user" | "guest",
  };

  updateUser(params.id, userData); // Make sure updateUser is imported
  return { success: true };
}
