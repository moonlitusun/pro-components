import {
  BusinessPermission,
  BusinessProvider,
} from '@dz-web/antd-pro-components';

export default () => {

  const permissionList= ['add','edit','delete',]

  return (
    <BusinessProvider permissionList={permissionList}>
      <p>权限列表 permissionList = {JSON.stringify(permissionList)}</p>
      <BusinessPermission permissionKey='add'>
        <div>single 单个匹配： 检查权限列表中有add权限</div>
      </BusinessPermission>

      <BusinessPermission permissionKey={['add','jump']} match='partial'>
        <div>partial 部分匹配： permissionKey=['add','jump'] ， permissionKey中有add权限存在权限列表中，这个内容可展示</div>
      </BusinessPermission>

      <BusinessPermission permissionKey={['add','edit']} match='full'>
        <div>full 全部匹配： permissionKey=['add','edit']  满足permissionKey中所有权限key都在权限列表中存在，这个内容可展示</div>
      </BusinessPermission>


    </BusinessProvider>
  );
};
