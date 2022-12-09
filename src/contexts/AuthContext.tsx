import React, { createContext, ReactNode, useEffect, useState } from "react";
import * as AuthSession from 'expo-auth-session';

interface IAuthContextData {
  user: User;
  signInWithGoogle(): Promise<AuthorizationResponse>;
}

interface User {
  id: string,
  name: string,
  email: string,
  photo?: string
}

interface AuthorizationResponse {
  params: {
    access_token: string,
  }
  type: string,
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: ChildrenContextProps) {

  const [user, setUser] = useState<User>({} as User);

  async function signInWithGoogle() {
    try {
      const client_id = '679666670724-qdebklfja2ur0m8tauivecl1i2p7ggcj.apps.googleusercontent.com';
      const redirect_uri = 'https://auth.expo.io/brunoaiolfi/goFinances';
      const response_type = 'token';
      const scope = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;

      const { type, params } = await AuthSession.startAsync({ authUrl: authUrl }) as AuthorizationResponse

      if (type === 'success') {
        const response = await fetch(`https://googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const userInfo = await response.json();

        console.log(userInfo)
        setUser(userInfo)

        return userInfo;
      }

    } catch (error: any) {
      throw new Error(error)
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      signInWithGoogle
    }}>
      {children}
    </AuthContext.Provider>
  )
}