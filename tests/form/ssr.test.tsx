// @vitest-environment node

import ProForm, { DrawerForm, ModalForm } from '@dz-web/antd-pro-form';
import { renderToString } from 'react-dom/server';

test('ssr', () => {
  expect(renderToString(<ProForm />)).toBeDefined();
  expect(renderToString(<ModalForm />)).toBeDefined();
  expect(renderToString(<DrawerForm />)).toBeDefined();
});
