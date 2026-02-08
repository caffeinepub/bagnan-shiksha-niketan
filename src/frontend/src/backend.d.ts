import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AdmissionSubmission {
    email?: string;
    message?: string;
    address?: string;
    timestamp: bigint;
    phone: string;
    childName: string;
    childClass: string;
    parentName: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createSubmission(parentName: string, childName: string, childClass: string, phone: string, email: string | null, address: string | null, message: string | null): Promise<void>;
    getCallerUserRole(): Promise<UserRole>;
    isCallerAdmin(): Promise<boolean>;
    listSubmissions(): Promise<Array<AdmissionSubmission>>;
}
