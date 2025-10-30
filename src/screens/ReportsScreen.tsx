import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { reports as DUMMY_REPORTS } from '../services/dummyData';
import ReportCard from '../components/ReportCard';

export default function ReportsScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../Image/BaoCao.png')} style={styles.banner} />
      <Text style={styles.title}>Báo cáo</Text>
      <Text style={styles.subtitle}>Xem nhanh và lịch sử báo cáo</Text>

      <FlatList
        data={DUMMY_REPORTS}
        keyExtractor={(r) => r.id}
        renderItem={({ item }) => (
          <ReportCard
            title={item.content}
            subtitle={new Date(item.date).toLocaleString()}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F9F9FB' },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  title: { fontSize: 24, fontWeight: '700', color: '#333', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 16 },
});
