import employees from "@/data/employees";
import type { Employee } from "@/types/employee";
import { defineStore } from "pinia";

export const useEmployeeStore = defineStore('employee', {
  actions: {
    getEmployees() {
      return new Promise<Employee[]>((resolve) => {
        setTimeout(() => {
          resolve(employees);
        }, 2000);
      })
    },
  },
});
