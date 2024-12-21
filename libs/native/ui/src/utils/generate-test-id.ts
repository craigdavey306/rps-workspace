import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const appIdentifier = DeviceInfo.getBundleId();

export function generateTestId(id: string | undefined) {
  if (!id) {
    return undefined;
  }

  const prefix = `${appIdentifier}:id/`;
  const hasPrefix = id.startsWith(prefix);

  return Platform.select({
    android: hasPrefix ? id : `${prefix}${id}`,
    ios: hasPrefix ? id.slice(prefix.length) : id,
  });
}
