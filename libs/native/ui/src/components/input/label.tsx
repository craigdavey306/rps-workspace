import React from 'react';
import { Text, View, TextStyle, StyleProp, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks';
import { Typography } from '../../tokens';

export type LabelProps = {
  disabled?: boolean;
  label?: string;
  style?: StyleProp<TextStyle>;
  testID?: string;
};

export const Label = React.memo(
  ({ label, style, testID }: LabelProps): JSX.Element | null => {
    const { theme } = useTheme();

    return label ? (
      <View
        style={[
          styles.labelContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <Text
          style={[{ color: theme.colors.label }, style, styles.label]}
          testID={`${testID}-label`}
        >
          {label}
        </Text>
      </View>
    ) : null;
  }
);

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
  },
  label: {
    paddingRight: 5,
    ...Typography.labelLarge,
  },
});
