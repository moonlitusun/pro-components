import { BusinessProviderContext } from "../provider";
import { useContextSelector } from 'use-context-selector';

interface PermissionProps extends React.PropsWithChildren{
  permissionKey: string | string[]; // 权限值  permissionKey
  fallback?: null | React.ReactNode; // 无权限时的展示内容 fallback
  isFull?: boolean; // 是否全部匹配
}

const toArray = (value: string | string[]): string[] => [].concat(value);

const Permission: React.FC<PermissionProps> = ({ children, permissionKey, fallback = null, isFull}) => {

  const permissionList = useContextSelector(BusinessProviderContext, (v) => v.permissionList); 

  if (!permissionList) return fallback;

  const key = toArray(permissionKey);

  const result =  key.filter(item => permissionList.includes(item))

  let isShow = !!result.length
  
  if (isFull) {
     isShow =  result.length === key.length
  }
    
  return isShow? children : fallback;

};

export default Permission;
