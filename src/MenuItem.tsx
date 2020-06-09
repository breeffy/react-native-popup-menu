import * as React from 'react';
import { PropsWithChildren } from 'react';

import {
  StyleSheet,
  Text,
  TextProps,
  TouchableHighlight,
  TouchableHighlightProps,
  Platform
} from 'react-native';

interface MenuItemProps {
  disabled?: boolean;
  disabledTextColor?: string;
  underlayColor?: TouchableHighlightProps['underlayColor'];
  style?: TouchableHighlightProps['style'];
  textStyle?: TextProps['style'];
  onPress: TouchableHighlightProps['onPress'];
}

export const MenuItem = ({
  disabled = false,
  disabledTextColor = '#BDBDBD',
  underlayColor = '#E0E0E0',
  style,
  textStyle,
  children,
  onPress,
  ...props
}: PropsWithChildren<MenuItemProps>) => {
  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, style]}
      underlayColor={underlayColor}
      {...props}
    >
      <Text
        ellipsizeMode={Platform.OS === 'ios' ? 'clip' : 'tail'}
        numberOfLines={1}
        style={[
          styles.title,
          disabled && { color: disabledTextColor },
          textStyle
        ]}
      >
        {children}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    maxWidth: 248,
    minWidth: 124
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16
  }
});
