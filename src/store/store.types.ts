export interface RootState {
    version: string;
    [key: string]: any;
}

export interface Params {
    [key: string]: any;
    [key: number]: any;
}

export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    full_name: string;
    image: string;
    last_login: string;
}

export interface Group {
    name: string;
    permissions: [];
}

export interface AuthState {
    token: string | null;
    user: User | null;
    accessLevel: number | null;
    permissions: [],
    group: Group | null,
    error: boolean;
}

export interface AuthCredential {
    username: string;
    password: string;
}

