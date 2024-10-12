import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';

const ProductScreen = ({ route }) => {
  const { product } = route.params || {}; // Đảm bảo không bị lỗi khi không có tham số

  // Kiểm tra xem product có tồn tại hay không
  if (!product) {
    return <Text>Không có thông tin sản phẩm.</Text>; // Thông báo khi không có sản phẩm
  }

  return (
    <ScrollView style={styles.container}>
      {/* Hiển thị nhiều hình ảnh */}
      <FlatList
        data={product.images} // Lấy danh sách hình ảnh từ sản phẩm
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }} // Hiển thị hình ảnh
            style={styles.image} // Thêm kiểu dáng cho hình ảnh
            resizeMode="cover" // Tùy chọn: điều chỉnh theo nhu cầu
          />
        )}
        keyExtractor={(item, index) => index.toString()} // Sử dụng chỉ số làm khóa
        horizontal // Hiển thị hình ảnh theo chiều ngang
        showsHorizontalScrollIndicator={false} // Ẩn chỉ báo cuộn ngang
      />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price} VND</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 200, // Chiều rộng hình ảnh
    height: 200, // Chiều cao của hình ảnh
    borderRadius: 10,
    marginRight: 10, // Khoảng cách giữa các hình ảnh
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#007BFF',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default ProductScreen;
