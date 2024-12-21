import { StyleProp, TextStyle } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { IconName } from './types';

const DEFAULT_ICON_SIZE = 24;

type IconStyleProp = StyleProp<TextStyle>;

type IconObjectType = MaterialIconType;

type MaterialIconType = {
  type: 'material';
  name: string;
  style?: IconStyleProp;
};

const applicationIcons: [IconName, IconObjectType][] = [
  ['chevron-left', { type: 'material', name: 'chevron-left' }],
  ['chevron-right', { type: 'material', name: 'chevron-right' }],
];

export const IconMap: Map<IconName, IconObjectType> = new Map(
  Array.from(applicationIcons)
);

export type IconProps = {
  name: IconName;
  size?: number;
  color: string;
  style?: IconStyleProp;
};

type VectorIconProps = IconObjectType & Omit<IconProps, 'name'>;

/**
 * Logic for determining the correct React Native Vector Icon component.
 * @param param0
 * @returns Returns a React Native Vector Icon or null
 */
function renderVectorIconComponent({
  type,
  name,
  style,
  size,
  color,
}: VectorIconProps): JSX.Element | null {
  switch (type) {
    case 'material':
      return (
        <MaterialIcon
          size={size}
          name={name}
          color={color}
          style={style}
          accessible={false}
        />
      );
    default:
      return null;
  }
}

export const Icon = ({
  name,
  size = DEFAULT_ICON_SIZE,
  color,
}: IconProps): JSX.Element | null => {
  const iconProp = IconMap.get(name);
  if (!iconProp) return null;

  return renderVectorIconComponent({ size, color, ...iconProp });
};
