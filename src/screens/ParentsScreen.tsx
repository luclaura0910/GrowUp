import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const mockParents = [
  { id: 'p1', name: 'Parent of An' },
  { id: 'p2', name: 'Parent of Bình' }
];

export default function ParentsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parents & Messages</Text>
      <FlatList data={mockParents} keyExtractor={(p)=>p.id} renderItem={({item})=> (
        <TouchableOpacity style={styles.row} onPress={()=>navigation.navigate('ParentChat',{parent:item})}>
          <Text style={{fontWeight:'700'}}>{item.name}</Text>
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1,padding:16,backgroundColor:'#FFF'},
  title: {fontSize:20,fontWeight:'700',marginBottom:10},
  row: {padding:12,backgroundColor:'#fff',borderRadius:8,marginVertical:6}
});
