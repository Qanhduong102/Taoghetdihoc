// screens/CartScreen.js
import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CartScreen = ({ navigation }) => {
  // Dữ liệu giả lập cho giỏ hàng
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'PUFFER BROWN WASHED NYLON PANTS',
      price: 720000, 
      quantity: 1,
      size: 'L', 
      image: 'https://product.hstatic.net/200000455169/product/pant2_e0ff6f80c4354ccc810a2da72eee68cc_master.jpg', // Thay bằng URL hình ảnh thực
    },
    {
      id: '2',
      name: 'MULTI BUCKLE WASHED GREY DENIM PANTS',
      price: 1450000,
      quantity: 1,
      size: 'X', 
      image: 'https://product.hstatic.net/200000455169/product/front1_e0afdfda76f64869aeeb73726b0b33ab_master.jpg', // Thay bằng URL hình ảnh thực
    },
    {
      id: '3',
      name: 'EVA HOOD TSHIRT',
      price: 620000,
      quantity: 1,
      size: 'XXL', 
      image:'https://product.hstatic.net/200000455169/product/front__48__e02ec8b5505645859d0156a22434fe4b_master.jpg',
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Giỏ hàng trống', 'Bạn không có sản phẩm nào trong giỏ hàng!');
      return;
    }

    // Điều hướng đến màn hình thanh toán
    navigation.navigate('Checkout', { cartItems, totalPrice: getTotalPrice() });
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        {item.size && (
          <Text style={styles.productSize}>Size: {item.size}</Text> // Hiển thị kích thước nếu có
        )}
        <Text style={styles.productPrice}>{item.price.toLocaleString()} VND</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {cartItems.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Tổng cộng: {getTotalPrice().toLocaleString()} VND</Text>
          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.checkoutButtonText}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      )}
      {cartItems.length === 0 && (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Giỏ hàng của bạn đang trống.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  productSize: {
  fontSize: 14,
  color: '#666', // Màu nhẹ hơn để không làm lấn át các thông tin khác
  marginVertical: 5,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    fontSize: 18,
    color: 'red',
  },
  totalContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#888',
  },
});

export default CartScreen;
