import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

type Props = {
  title: string;
  onPress?: (e: GestureResponderEvent) => void;
  color?: string;
};

export default function ButtonLarge({ title, onPress, color = '#8EA7FF' }: Props) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { padding: 14, borderRadius: 12, alignItems: 'center', marginVertical: 8 },
  text: { color: '#fff', fontWeight: '700', fontSize: 16 }
});
