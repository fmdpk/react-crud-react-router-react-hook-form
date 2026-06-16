import { getUser, getUsers } from "../data";

export async function userLoader() {
  return getUsers();
}

export async function userDetailLoader({ params }: { params: { id: string } }) {
  return getUser(params.id);
}
