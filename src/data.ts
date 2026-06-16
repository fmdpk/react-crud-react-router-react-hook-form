// =============================================
// src/data.ts (mock data layer)
// =============================================
export type User = {
  id: string;
  name: string;
  email: string;
  age: number;
  role: "admin" | "user" | "guest";
};

let users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    age: 32,
    role: "user",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    age: 28,
    role: "admin",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    age: 45,
    role: "user",
  },
];

export const getUsers = () => users;

export const getUser = (id: string) => users.find((u) => u.id === id);

export const createUser = (userData: Omit<User, "id">) => {
  const newUser = { ...userData, id: Date.now().toString() };
  users.push(newUser);
  return newUser;
};

export const updateUser = (id: string, userData: Partial<User>) => {
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...userData };
    return users[index];
  }
  return null;
};

export const deleteUser = (id: string) => {
  users = users.filter((u) => u.id !== id);
};
