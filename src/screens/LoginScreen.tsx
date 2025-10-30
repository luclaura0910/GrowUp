import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import ButtonLarge from '../components/ButtonLarge';
import Toast from 'react-native-toast-message';
import { useAuth } from '../hooks/useAuth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const onSubmit = async () => {
    try {
      await signIn(email, password);
      Toast.show({ type: 'success', text1: 'Đăng nhập thành công' });
    } catch (e) {
      Toast.show({ type: 'error', text1: 'Đăng nhập thất bại' });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../Image/DangNhap.png')} style={styles.logo} />
      <Text style={styles.title}>Chào mừng bạn</Text>
      <Text style={styles.subtitle}>Đăng nhập để tiếp tục</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Mật khẩu"
        placeholderTextColor="#A9A9A9"
        secureTextEntry
      />
      <ButtonLarge onPress={onSubmit} title="Đăng nhập" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
