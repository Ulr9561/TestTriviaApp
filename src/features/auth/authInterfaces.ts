import User, { Profile } from "../../utils/User";

export interface LoginResponse {
    status: string;
    user: User;
    jwt: string;
    expiresIn: number;
    profile: Profile;
}

export interface AuthState {
    user: User | null;
    jwt: string | null;
    expiresIn: number | null;
    profile: Profile | null;
}

export type AuthError = {
    status: string | number;
    data: ErrorData;
}

type ErrorData = {
    error: string;
}
