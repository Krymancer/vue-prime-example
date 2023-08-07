import getAll from "@/data/employees";
import type { Employee } from "@/types/employee";
import { defineStore } from "pinia";

export const useEmployeeStore = defineStore('employee', {
  actions: {
    async getEmployees() {    
      return await getAll();
    },
  },
});
