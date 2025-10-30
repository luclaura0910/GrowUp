import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function StudentList({ students, onSelect }: any) {
  return (
    <FlatList
      data={students}
      keyExtractor={(s: any) => s.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item)} style={styles.row}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.meta}>{item.status}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: { padding: 12, backgroundColor: '#fff', borderRadius: 8, marginVertical: 6 },
  name: { fontWeight: '700' },
  meta: { color: '#666', marginTop: 4 }
});
