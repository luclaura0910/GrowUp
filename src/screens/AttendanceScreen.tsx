import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ButtonLarge from '../components/ButtonLarge';
import { useCheckin } from '../hooks/useCheckin';

export default function AttendanceScreen() {
  const { checkIn, checkOut, history, lastStatus } = useCheckin();

  return (
    <View style={styles.container}>
      <Image source={require('../../Image/DiemDanh.png')} style={styles.banner} />
      <Text style={styles.title}>Điểm danh</Text>
      <Text style={styles.subtitle}>Trạng thái: {lastStatus}</Text>

      <View style={styles.actions}>
        <ButtonLarge title="Check in" onPress={() => checkIn()} />
        <ButtonLarge title="Check out" color="#F5A3C7" onPress={() => checkOut()} />
      </View>

      <Text style={styles.historyTitle}>Lịch sử điểm danh</Text>
      <FlatList
        data={history}
        keyExtractor={(i, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{new Date(item.time).toLocaleString()}</Text>
            <Text style={styles.itemType}>{item.type}</Text>
          </View>
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
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  historyTitle: { fontSize: 18, fontWeight: '700', color: '#333', marginBottom: 8 },
  item: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemType: { color: '#666' },
});
