import { useContext } from "react";
import { BusinessProviderContext } from "../provider";

interface PermissionProps {
  value: string | string[]; // 权限值
  children: React.ReactNode;
  match?: 'single' | 'partial' | 'full' // 匹配模式，single 单个匹配，partial 部分匹配，full 全部匹配
  noAccessContent?: null | React.ReactNode; // 无权限时的展示内容
}

const Permission: React.FC<PermissionProps> = ({ children, value, match = 'single' , noAccessContent = null}) => {
  const { permissionList } = useContext(BusinessProviderContext);
  
  const isKeyArray = Array.isArray(value);
  
  if (!isKeyArray && match ==='single' && permissionList?.includes(value)) return children;

  if (match ==='partial' && isKeyArray) {
    const isShow = value.some(item => permissionList?.includes(item));
    return isShow? children : noAccessContent;
  }

  if (match === 'full' && isKeyArray) {
    const isShow =  value.every(item => permissionList?.includes(item));
    return isShow? children : noAccessContent;
   }

  return noAccessContent
};

export default Permission;
