import {
  BusinessPermission,
  BusinessProvider,
} from '@dz-web/antd-pro-components';

export default () => {

  const permissionList = ['add','edit','delete',]

  return (
    <BusinessProvider permissionList={permissionList}>
     <BusinessPermission value='add'>
        <div>我是 add </div>
      </BusinessPermission>
      <BusinessPermission value='jump' noAccessContent='暂无jump权限'>
        <div>我是 jump </div>
      </BusinessPermission>

    </BusinessProvider>
  );
};
