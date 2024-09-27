import React, { createContext } from 'react';
export const BusinessProviderContext = createContext<Record<string, any>>({});

interface ProviderProps { 
  permissionList?: string[];
  children: React.ReactNode;
}

const Provider = ({
  children,
  ...rest
}: ProviderProps) => {
  return <BusinessProviderContext.Provider value={{  ...rest }}>{children}</BusinessProviderContext.Provider>
};

export default Provider;