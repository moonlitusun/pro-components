interface PermissionProps {
  key: string;
  children: React.ReactNode;
}

const Permission: React.FC<PermissionProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Permission;
