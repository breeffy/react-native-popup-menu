import React from 'react';
import { View, StyleSheet } from 'react-native';

export interface MenuDividerProps {
  color: string;
}

const MenuDivider = ({ color = 'rgba(0,0,0,0.12)' }: MenuDividerProps) => {
  return <View style={[styles.divider, { borderBottomColor: color }]} />;
};

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default MenuDivider;
