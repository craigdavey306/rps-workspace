import type { Theme } from '../../theme';
import type { ButtonMode, ButtonType } from './types';

type ComputedButtonStyles = {
  color: string;
  backgroundColor?: string;
  borderColor: string;
};

/**
 * Generates button styles based on the button mode and type.
 * @param mode
 * @param type
 * @param theme
 * @returns
 */
export function computeButtonStyles(
  mode: ButtonMode,
  type: ButtonType,
  theme: Theme
): ComputedButtonStyles {
  const isContained = mode === 'contained';

  const buttonColor =
    type === 'action'
      ? theme.colors.action
      : type === 'critical'
      ? theme.colors.critical
      : type === 'success'
      ? theme.colors.success
      : theme.colors.warning;

  const textColor = !isContained
    ? undefined
    : type === 'action'
    ? theme.colors.onAction
    : type === 'critical'
    ? theme.colors.onCritical
    : type === 'success'
    ? theme.colors.onSuccess
    : theme.colors.onWarning;

  return {
    color: textColor ?? buttonColor,
    backgroundColor: isContained ? buttonColor : undefined,
    borderColor: buttonColor,
  };
}
