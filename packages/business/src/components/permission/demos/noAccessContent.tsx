import {
  BusinessPermission,
  BusinessProvider,
} from '@dz-web/antd-pro-components';

export default () => {

  const permissionList = ['add','edit','delete',]

  return (
    <BusinessProvider permissionList={permissionList}>
      <p>权限列表 permissionList = {JSON.stringify(permissionList)}</p>
 
      <BusinessPermission value='jump' fallback='暂无jump权限'>
        <div>jump</div>
      </BusinessPermission>

    </BusinessProvider>
  );
};
