import type { GenerateStyle, ProAliasToken } from '@dz-web/antd-pro-provider';
import { useStyle as useAntdStyle } from '@dz-web/antd-pro-provider';

export interface stylishToken extends ProAliasToken {
  componentCls: string;
}

export function useStylish(
  prefixCls: string,
  {
    stylish,
  }: {
    stylish?: GenerateStyle<stylishToken>;
  },
) {
  return useAntdStyle('ProLayoutPageContainerStylish', (token) => {
    const stylishToken: stylishToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    if (!stylish) return [];

    return [
      {
        [`div${stylishToken.componentCls}`]: stylish?.(stylishToken),
      },
    ];
  });
}
