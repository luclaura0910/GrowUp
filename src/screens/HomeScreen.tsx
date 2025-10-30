import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang chủ</Text>
      <Text>Quick actions: Check-in, Check-out, Quick report</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#F7FCFF'},
  title: {fontSize:22,color:'#6B7CF5',marginBottom:8}
});
