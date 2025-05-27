export interface User{
    id: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    
}

export type Role ="Admin";

export interface LoginResponse{
    message: string;
    success: boolean;
    data: User|null;
}