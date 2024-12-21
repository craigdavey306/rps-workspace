import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  View,
  Pressable,
  Text,
} from 'react-native';
import { useTheme } from '../../hooks';
import { computeButtonStyles } from './utils';
import { ButtonMode, ButtonType } from './types';
import { MINIMUM_TOUCH_POINT_SIZE } from '../../constants';
import { Typography } from '../../tokens';

interface ButtonProps {
  accessibilityLabel?: string;
  disabled?: boolean;
  maxFontSizeMultiplier?: number;
  mode?: ButtonMode;
  onPress?: (e: GestureResponderEvent) => void;
  testID?: string;
  title: string;
  type?: ButtonType;
  uppercase?: boolean;
}

export const Button = ({
  accessibilityLabel,
  disabled,
  maxFontSizeMultiplier = 2,
  mode = 'contained',
  onPress,
  testID,
  title,
  type = 'action',
  uppercase,
}: ButtonProps): React.JSX.Element => {
  const { theme } = useTheme();
  const computedStyles = computeButtonStyles(mode, type, theme);

  return (
    <View
      accessible={true}
      accessibilityRole="button"
      style={styles.root}
      testID={!testID ? undefined : `${testID}-container`}
    >
      <Pressable
        accessibilityLabel={accessibilityLabel}
        disabled={disabled}
        onPress={onPress}
        style={[
          styles.button,
          { ...computedStyles },
          disabled && styles.disabled,
        ]}
        testID={!testID ? undefined : `${testID}`}
      >
        <Text
          maxFontSizeMultiplier={maxFontSizeMultiplier}
          style={[
            { color: computedStyles.color },
            styles.label,
            uppercase && styles.uppercaseLabel,
          ]}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
  },
  button: {
    minWidth: MINIMUM_TOUCH_POINT_SIZE,
    minHeight: MINIMUM_TOUCH_POINT_SIZE,
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 0.5,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    textAlign: 'center',
    ...Typography.labelLarge,
  },
  uppercaseLabel: {
    textTransform: 'uppercase',
  },
});
