import { getApiClient } from "./api";

class Auth {
  async login(email: string, password: string) {
    const api = getApiClient();
    const res = await api.post("/auth/login", { email, password });

    return res.data;
  }

  async register(name: string, email: string, password: string) {
    const api = getApiClient();
    const res = await api.post("/auth/register", { name, email, password });

    return res.data;
  }

  async logout() {
    const api = getApiClient();
    return await api.post("/logout", null, { withCredentials: true });
  }

  async getSession() {
    const api = getApiClient();
    const res = await api.get("/me");

    if (res.status === 200) {
      return res.data;
    }

    return null;
  }
}

export const auth = new Auth();
