import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonLarge from '../components/ButtonLarge';

export default function StudentDetail({ route }: any) {
  const student = route.params?.student;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{student?.name || 'Student'}</Text>
      <Text style={{color:'#666',marginVertical:8}}>Status: {student?.status || 'unknown'}</Text>

      <ButtonLarge title="Add note" onPress={() => {}} />
      <ButtonLarge title="Send to parent" color="#7AD39A" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1,padding:16,backgroundColor:'#FFF'},
  title: {fontSize:20,fontWeight:'700'}
});
