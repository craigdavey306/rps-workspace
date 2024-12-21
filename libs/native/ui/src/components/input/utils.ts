import { KeyboardTypeOptions } from 'react-native';
import { KeyboardOption } from './types';

export function getNativeKeyboardType(option: KeyboardOption) {
  const keyboardMapping: Record<KeyboardOption, KeyboardTypeOptions> = {
    numeric: 'number-pad',
    phone: 'phone-pad',
    default: 'default',
  };

  return keyboardMapping[option];
}
