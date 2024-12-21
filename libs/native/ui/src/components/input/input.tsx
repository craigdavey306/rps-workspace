import React from 'react';
import {
  View,
  TextInput as NativeInput,
  TextStyle,
  StyleSheet,
} from 'react-native';
import { Label, LabelProps } from './label';
import { KeyboardOption } from './types';
import { getNativeKeyboardType } from './utils';
import { useTheme } from '../../hooks';
import { generateTestId } from '../../utils';

export type InputProps = Omit<LabelProps, 'disabled'> & {
  autoFocus?: boolean;
  disabled?: boolean;
  keyboard?: KeyboardOption;
  maxLength?: number;
  value?: string;
  viewOnly?: boolean;
  testID?: string;
  style?: TextStyle;
  onChange: (value: string) => void;
};

function InputComponent(
  props: InputProps,
  ref?: React.Ref<React.ComponentRef<typeof NativeInput>>
): React.JSX.Element {
  const { theme } = useTheme();
  const {
    disabled,
    keyboard = 'default',
    maxLength,
    onChange,
    value,
    testID,
    style,
    ...rest
  } = props;
  const color = theme.colors.text;
  const nativeKeyboard = getNativeKeyboardType(keyboard);
  const generatedTestID = generateTestId(testID);

  return (
    <View
      style={[
        styles.rootContainer,
        { backgroundColor: theme.colors.background },
      ]}
      testID={!generatedTestID ? undefined : `${generatedTestID}-container`}
    >
      <Label disabled={disabled} label={props.label} testID={testID} />
      <NativeInput
        autoFocus={props.autoFocus}
        disableFullscreenUI
        ref={ref}
        editable={!disabled}
        keyboardType={nativeKeyboard}
        maxLength={maxLength}
        onChangeText={onChange}
        value={value}
        testID={generatedTestID}
        style={[
          style,
          { color: disabled ? theme.colors.disabled : color },
          styles.input,
          {
            borderColor: theme.colors.border,
            backgroundColor: disabled
              ? theme.colors.disabled
              : theme.colors.background,
            borderWidth: 1,
            borderRadius: 5,
            color,
          },
        ]}
        {...rest}
      />
    </View>
  );
}

export const Input = React.memo(React.forwardRef(InputComponent));

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  input: {
    flex: 1,
  },
});
