import http from "./http-common";
import { User } from "../types/User";

const login = (data: User) => {
  return http.post("/auth", data)
};

const register = (data: User) => {
  return http.post("/auth", data);
};

const logout = () => {
  localStorage.removeItem("user");
}

const AuthService = {
  login,
  register,
  logout,
};

export default AuthService;
