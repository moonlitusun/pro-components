import { useContext, useMemo } from 'react';
import { BusinessProviderContext } from '../provider';

enum MatchType {
  SOME = 'some',
  EVERY = 'every',
}

interface PermissionProps extends React.PropsWithChildren {
  permissionKey: string | string[];
  fallback?: React.ReactNode;
  matchType?: MatchType;
}

const Permission = (props: PermissionProps) => {
  const {
    children,
    permissionKey,
    fallback = null,
    matchType = MatchType.SOME,
  } = props;
  const { permissionList } = useContext(BusinessProviderContext);
  // FIXME: 提到 provider 中
  const permissionSet = new Set(permissionList);
  const matchKeys = [].concat(permissionKey);

  const hasPermission = useMemo(() => {
    if (!permissionSet.size || !matchKeys.length) return false;
    switch (matchType) {
      case MatchType.SOME:
        return matchKeys.some((item) => permissionSet.has(item));
      case MatchType.EVERY:
        return matchKeys.every((item) => permissionSet.has(item));
      default:
        return false;
    }
  }, [permissionKey, matchType, permissionSet]);

  return hasPermission ? children : fallback;
};

export default Permission;
