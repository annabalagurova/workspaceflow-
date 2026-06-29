import { createContext } from "react";

export interface User {
    name: string;
    role: 'Employee' | 'Admin';
    department: string;
    monthlyHoursLimit: number;
    usedHours: number;
}

interface UserContextType {
    user: User;
    deductHours: (hours: number) => boolean; //функция которая отвечает за списывание часов
    refundHours: (hours: number) => void; //функция для возврата часов
}

export const UserContext = createContext<UserContextType | undefined>(undefined);