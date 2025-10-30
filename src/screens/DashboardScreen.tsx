import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonLarge from '../components/ButtonLarge';

export default function DashboardScreen() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../../Image/TrangChu.png')} style={styles.banner} />
      <Text style={styles.title}>Chào mừng đến với GrowUp</Text>
      <Text style={styles.subtitle}>Chọn một hành động bên dưới</Text>

      <View style={styles.actions}>
        <ButtonLarge title="Điểm danh" onPress={() => nav.navigate('Attendance')} />
        <ButtonLarge title="Báo cáo" color="#F5A3C7" onPress={() => nav.navigate('Reports')} />
      </View>

      <View style={styles.cards}>
        <TouchableOpacity style={styles.card} onPress={() => nav.navigate('Classes')}>
          <Text style={styles.cardTitle}>Quản lý lớp</Text>
          <Text style={styles.cardSubtitle}>Học sinh & lịch học</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => nav.navigate('Parents')}>
          <Text style={styles.cardTitle}>Phụ huynh</Text>
          <Text style={styles.cardSubtitle}>Tin nhắn & xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F0F4F8' },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  title: { fontSize: 24, fontWeight: '700', color: '#333', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 16 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  cards: { flex: 1 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#333' },
  cardSubtitle: { fontSize: 14, color: '#666' },
});
