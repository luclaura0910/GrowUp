import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
};

export default function ReportCard({ title, subtitle, imageUrl }: Props) {
  return (
    <View style={styles.card}>
      {imageUrl ? <Image source={{ uri: imageUrl }} style={styles.image} /> : null}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 12, borderRadius: 8, marginVertical: 8 },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  content: { flex: 1 },
  title: { fontWeight: '700' },
  subtitle: { color: '#666', marginTop: 4 }
});
