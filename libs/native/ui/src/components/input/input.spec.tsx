import React from 'react';
import { render } from '@testing-library/react-native';

import { Input } from './input';

describe('Button', () => {
  it('should render successfully', () => {
    const { root } = render(
      <Input
        value="Custom"
        onChange={(value) => console.log(`New value: ${value}`)}
      />
    );
    expect(root).toBeTruthy();
  });
});
