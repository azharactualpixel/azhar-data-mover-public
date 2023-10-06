import axiosClient from "src/api/axiosClient";
import { ENDPOINTS } from "src/api/endpoints";
import { ILoginResponseRoot } from "src/types/services/response/loginResponse";

export async function login(): Promise<ILoginResponseRoot> {
  const url = `${ENDPOINTS.login}`;
  return axiosClient.get(url);
}
