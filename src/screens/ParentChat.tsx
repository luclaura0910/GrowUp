import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function ParentChat({ route }: any) {
  const parent = route.params?.parent;
  const [messages, setMessages] = useState<any[]>([{id:'m1',from:'teacher',text:'Hello, today was fun!'}]);
  const [text, setText] = useState('');

  const send = () => {
    if (!text) return;
    setMessages(prev=>[...prev,{id:Date.now().toString(),from:'teacher',text}]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{parent?.name || 'Parent'}</Text>
      <FlatList data={messages} keyExtractor={m=>m.id} renderItem={({item})=> (
        <View style={{padding:8,backgroundColor:item.from==='teacher'?'#E8F0FF':'#FFF',borderRadius:8,marginVertical:6}}>
          <Text>{item.text}</Text>
        </View>
      )} />
      <View style={{flexDirection:'row',marginTop:8}}>
        <TextInput value={text} onChangeText={setText} style={styles.input} placeholder="Message to parent" />
        <TouchableOpacity onPress={send} style={styles.send}><Text style={{color:'#fff'}}>Send</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1,padding:16,backgroundColor:'#FFF'},
  title: {fontSize:18,fontWeight:'700',marginBottom:12},
  input: {flex:1,backgroundColor:'#fff',padding:10,borderRadius:8,borderWidth:1,borderColor:'#eee'},
  send: {backgroundColor:'#6B7CF5',padding:12,marginLeft:8,borderRadius:8}
});
