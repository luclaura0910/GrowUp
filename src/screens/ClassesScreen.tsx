import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { classes as DUMMY_CLASSES } from '../services/dummyData';
import StudentList from '../components/StudentList';

export default function ClassesScreen({ navigation }: any) {
  const [selected, setSelected] = useState<any>(null);
  const classItem = DUMMY_CLASSES[0];

  return (
    <View style={styles.container}>
      <Image source={require('../../Image/QuanLyLo.png')} style={styles.banner} />
      <Text style={styles.title}>Quản lý lớp học</Text>
      <Text style={styles.subtitle}>Danh sách lớp học của bạn</Text>

      <View style={styles.classInfo}>
        <Text style={styles.className}>{classItem.name}</Text>
        <Text style={styles.classDetails}>{classItem.students_count} học sinh</Text>
      </View>

      <Text style={styles.sectionTitle}>Danh sách học sinh</Text>
      <StudentList
        students={[
          { id: 's1', name: 'An', status: 'present' },
          { id: 's2', name: 'Bình', status: 'absent' },
        ]}
        onSelect={(s: any) => navigation.navigate('StudentDetail', { student: s })}
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
  classInfo: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  className: { fontSize: 18, fontWeight: '600', color: '#333' },
  classDetails: { fontSize: 14, color: '#666' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#333', marginBottom: 8 },
});
