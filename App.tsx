import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login'; 
import SignUpScreen from './screens/SignUpScreen'; 
import ForgetPassword from './screens/ForgetPassword'; 
import VerificationCodeScreen from './screens/VerificationCodeScreen';
import CreateNewPasswordScreen from './screens/CreateNewPasswordScreen';
import ProductScreen from './screens/ProductScreen'; 
import CartScreen from './screens/CartScreen'; // Import CartScreen
import ProductListScreen from './screens/ProductListScreen'; // Đảm bảo đường dẫn đúng


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{ headerTitle: 'Forget Password', headerBackTitleVisible: false }}
        />
        <Stack.Screen 
          name="VerificationCode" 
          component={VerificationCodeScreen} 
          options={{ headerTitle: 'Verification Code', headerBackTitleVisible: false }} 
        />
        <Stack.Screen 
          name="CreateNewPassword" 
          component={CreateNewPasswordScreen} 
          options={{ headerTitle: 'Create New Password', headerBackTitleVisible: false }} 
        />
        <Stack.Screen 
          name="Product" 
          component={ProductScreen} 
          options={{ headerTitle: 'Product Details' }} 
        />
        <Stack.Screen 
          name="CartScreen" 
          component={CartScreen} 
          options={{ headerTitle: 'Giỏ hàng' }} // Thêm tiêu đề cho màn hình giỏ hàng
        />
        <Stack.Screen 
  name="ProductList" 
  component={ProductListScreen} 
  options={{ title: 'Danh sách sản phẩm' }} 
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
