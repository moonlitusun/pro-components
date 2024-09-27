import React, { createContext } from 'react';
export const BusinessProviderContext = createContext<Record<string, any>>({});

interface ProviderProps extends React.PropsWithChildren { 
  permissionList?: string[];
  baseServer: string;
}

const Provider = ({
  children,
  ...rest
}: ProviderProps) => {
  return <BusinessProviderContext.Provider value={{  ...rest }}>{children}</BusinessProviderContext.Provider>
};

export default Provider;