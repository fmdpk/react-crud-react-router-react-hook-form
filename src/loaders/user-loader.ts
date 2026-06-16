import type { LoaderFunctionArgs } from "react-router-dom";
import { getUser, getUsers } from "../data";

export async function userLoader() {
  return getUsers();
}

export async function userDetailLoader({ params }: LoaderFunctionArgs) {
  return getUser(params.id);
}
