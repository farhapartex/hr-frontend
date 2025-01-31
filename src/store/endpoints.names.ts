import { API_HOST } from "@/global";
const API_URL: string = `${API_HOST}/api/v1`;
export const LOGIN_ENDPOINT: string = `${API_URL}/rest-auth/login/`;
export const LOGOUT_ENDPOINT: string = `${API_URL}/rest-auth/logout/`;
export const PERMISSION_ENDPOINT: string = `${API_URL}/permissions/`;
export const LOGGED_IN_USER: string = `${API_URL}/logged-in-user/`;
export const GROUP_ENDPOINT: string = `${API_URL}/groups/`;