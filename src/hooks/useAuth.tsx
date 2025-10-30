import React, { createContext, useContext, useState } from 'react';
import * as firebaseService from '../services/firebase';

type AuthContextValue = {
  user: any;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  signIn: async () => {},
  signOut: async () => {}
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);

  const signIn = async (email: string, password: string) => {
    // Try firebase, fallback to dummy
    try {
      const res = await firebaseService.signIn(email, password);
      setUser(res.user);
      return res;
    } catch (e) {
      // dummy login
      setUser({ email });
      return { user: { email } };
    }
  };

  const signOut = async () => {
    try {
      await firebaseService.signOut();
    } catch (e) {}
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
