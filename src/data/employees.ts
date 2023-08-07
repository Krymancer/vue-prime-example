import type { Employee } from "@/types/employee";

export default async function getAll() : Promise<Employee[]> {
  const response = await fetch('https://localhost:7007/Employee');
  return await response.json() as Employee[];
}