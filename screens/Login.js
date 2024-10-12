import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Xử lý khi người dùng nhấn nút Sign In
  const handleSignIn = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    console.log('User is trying to sign in with:', email, password);
    Alert.alert('Success', `Logged in with email: ${email}`);
  };

  // Xử lý đăng nhập với tài khoản xã hội (Google/Apple)
  const handleSocialSignIn = (platform) => {
    Alert.alert('Social Login', `You clicked login with ${platform}`);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.welcomeText}>Welcome Back</Text>

      {/* Nhập Email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      {/* Nhập Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Quên mật khẩu */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={styles.forgotPassword}>Forget Password?</Text>
      </TouchableOpacity>

      {/* Nút Đăng nhập */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Đăng ký */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
{/* Đường dẫn tới danh sách sản phẩm */}
<TouchableOpacity
  onPress={() => navigation.navigate('ProductList')}
>
  <Text>Đi đến danh sách sản phẩm</Text>
</TouchableOpacity>
      {/* Đường dẫn tới giỏ hàng */}
      <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={styles.cartButton}>
        <Text style={styles.cartButtonText}>Đi đến giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: '100%',
    paddingHorizontal: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#000000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
  },
  registerText: {
    marginTop: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  cartButton: {
    marginTop: 20,
  },
  cartButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default LoginScreen;
