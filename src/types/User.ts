export interface User {
    id: string,
    username: string,
    password: string,
}

export interface AuthState {
    isLogin: boolean, 
    user: User,
}

export interface AuthModuleState {
    auth: AuthState
}