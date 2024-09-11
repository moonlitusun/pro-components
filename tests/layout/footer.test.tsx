import { DefaultFooter } from '@dz-web/antd-pro-components';
import { cleanup, render } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

describe('DefaultFooter test', () => {
  it('🦶 set title', () => {
    const wrapper = render(<DefaultFooter links={false} />);
    expect(
      !!wrapper.baseElement.querySelector('.ant-pro-global-footer-links'),
    ).toBeFalsy();
  });

  it('🦶 copyright support false', () => {
    const wrapper = render(<DefaultFooter copyright={false} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('🦶 links support false', () => {
    const wrapper = render(<DefaultFooter links={false} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('🦶 if copyright and links falsy both, should not to render nothing', () => {
    const wrapper = render(<DefaultFooter copyright={false} links={false} />);
    expect(
      !!wrapper.baseElement.querySelector('.ant-pro-global-footer'),
    ).toBeFalsy();
  });
});
