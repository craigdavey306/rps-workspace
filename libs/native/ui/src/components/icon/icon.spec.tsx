import React from 'react';
import { render } from '@testing-library/react-native';

import { Icon } from './icon';

describe('Icon', () => {
  it('should render successfully', () => {
    const { root } = render(<Icon name="chevron-right" color="blue" />);
    expect(root).toBeTruthy();
  });
});
