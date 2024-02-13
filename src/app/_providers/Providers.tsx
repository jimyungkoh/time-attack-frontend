"use client"

import { logOut, refresh } from "@/api/auth.api";
import AuthContext from "@/contexts/auth.context";
import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <ReduxProvider>{children}</ReduxProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
}

function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}


function AuthProvider({ children } : {children: React.ReactNode}) {
  const [signedIn, setSignedIn] = useState(false);

  const signIn = () => {
    setSignedIn(true);
  };
  
  const signOut = () => {
    logOut();
    setSignedIn(false);
  }

  useEffect(() => {
    refresh().then((result) => {
      setSignedIn(result);
    });    
  },[]);


  const value = useMemo(
    () => ({
      signedIn,
      signIn,
      signOut,
    }),
    [signedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
