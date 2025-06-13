import { auth } from "@/lib/auth";
import { UserType } from "@/schemas/user.schema";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      setIsAuthenticated(true);

      const session = await auth.getSession();

      setUser(session);
      setLoading(false);
    };

    getUser();
  }, []);

  return { isAuthenticated, user, loading };
};
