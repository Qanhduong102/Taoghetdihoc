import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Danh sách sản phẩm
const products = [
  {
    id: '1',
    name: 'PUFFER BROWN WASHED NYLON PANTS',
    price: '720,000',
    description: 'FEATURES:\n\n100% polyester\nGiặt nhuôm\nLớp chần bông nhẹ bên trong\n03 túi có khoá ẩn\nChun ống quần\n\nSIZE CHART:\n\nSize M: bụng 62cm – dài 95cm – đáy 40cm – đùi 34cm – ống 15cm\nSize L: bụng 65cm – dài 98cm – đáy 41cm – đùi 35cm – ống 16cm\nSize XL: bụng 68cm – dài 101cm – đáy 42cm – đùi 36cm – ống 17cm\n\nFITTING: 1m80 - 65kg mặc size XL\n\nCLOTHING PRESERVATION:\n\n- Giặt tay trước 1 lần để giữ sản phẩm lâu bền, lộn trái áo, tránh trà bàn chải trực tiếp lên hình in quá mạnh. Sử dụng xà phòng trung tính thông thường.\n- Giặt máy để ở chế độ giặt ngâm, vòng quay tối thiểu, bằng nước thường, không quá nóng, không quá lạnh. Khuyến khích để trong túi giặt thông dụng.\n- Giặt khô đối với các sản phẩm xử lý washed acid. Không nên sử dụng máy sấy (điều này có thể làm co sản phẩm).\n- Phân loại sản phẩm màu sắc, tránh giặt chung.\n- Tránh sử dụng nước tẩy quá nhiều.\n- Phơi đồ ở nơi thoáng mát tránh ánh nắng mặt trời trực tiếp.\n- Nút áo/quần thiết kế khi sử dụng cần phải cầm sát khuy nếu cần tháo/bỏ, tránh cầm xa khuy để giật ra.',
    images: [
      'https://product.hstatic.net/200000455169/product/pant2_e0ff6f80c4354ccc810a2da72eee68cc_master.jpg',
      'https://product.hstatic.net/200000455169/product/1__65__6585c8a9a9df441ca2b8c34b38f561cd_master.jpg',
      'https://product.hstatic.net/200000455169/product/2__65__28925034b6284a93bb5954ee2b727589_master.jpg',
      'https://product.hstatic.net/200000455169/product/3__60__65354c71057344548b77b809972ff46e_master.jpg',
      'https://product.hstatic.net/200000455169/product/4__53__3a0d267df1d7475b9504ceda2a1aac6c_master.jpg',
    ],
  },
  {
    id: '2',
    name: 'MULTI BUCKLE WASHED GREY DENIM PANTS',
    price: '1,450,000',
description: 'FEATURES:\n\nChất liệu 100% cotton denim 13oz \nForm straight với ống quần loe mạnh \nCắt xẻ tạo hình\n06 khoá móc ống quần\n04 túi quần\n\nSIZE CHART:\n\nSize M: bụng 74cm - dài 100cm - đũng 29cm - ống 58cm\nSize L: bụng 77cm - dài 104cm - đũng 30cm - ống 60cm\nSize XL: bụng 80cm - dài 109cm - đũng 31cm - ống 62cm\n\nFITTING:\n 1m80 - 65kg mặc size XL\n\nCLOTHING PRESERVATION:\n\n- Giặt tay trước 1 lần để giữ sản phẩm lâu bền, lộn trái áo, tránh trà bàn chải trực tiếp lên hình in quá mạnh. Sử dụng xà phòng trung tính thông thường.\n- Giặt máy để ở chế độ giặt ngâm, vòng quay tối thiểu, bằng nước thường, không quá nóng, không quá lạnh. Khuyến khích để trong túi giặt thông dụng.\n- Giặt khô đối với các sản phẩm xử lý washed acid. Không nên sử dụng máy sấy (điều này có thể làm co sản phẩm).\n- Phân loại sản phẩm màu sắc, tránh giặt chung.\n- Tránh sử dụng nước tẩy quá nhiều.\n- Phơi đồ ở nơi thoáng mát tránh ánh nắng mặt trời trực tiếp.\n- Nút áo/quần thiết kế khi sử dụng cần phải cầm sát khuy nếu cần tháo/bỏ, tránh cầm xa khuy để giật ra.',
    images: [
      'https://product.hstatic.net/200000455169/product/front1_e0afdfda76f64869aeeb73726b0b33ab_master.jpg',
      'https://product.hstatic.net/200000455169/product/1_7700c35193d8419c967f3d578a71c569_master.jpg',
      'https://product.hstatic.net/200000455169/product/3_b8d750b295074c2c9044ca70fdf4b910_master.jpg',
      'https://product.hstatic.net/200000455169/product/4_04c47810cbaa4c25b8d62a3824e3407c_master.jpg',
      'https://product.hstatic.net/200000455169/product/6_854868adae0c4be59efe366f30069d30_master.jpg',
      'https://product.hstatic.net/200000455169/product/8_29b95464ba1c41059c47351b35df7450_master.jpg',
    ],
  },
  {
    id: '3',
    name: 'TMPRARY CUPRO TANK SHIRT',
    price: '1,190,000',
    description: 'FEATURES:\n\n100% Cupro\nIn lụa trước và sau\nForm tankshirt\n\nSIZE CHART:\n\nSize M: dài 69cm - ngang 59cm - vai 49cm\nSize L: dài 71cm - ngang 61cm - vai 51cm\nSize XL: dài 74cm - ngang 64cm - vai 53cm\n\nFITTING:\n 1m80 - 65kg mặc size XL\n\nCLOTHING PRESERVATION:\n\n- Giặt tay trước 1 lần để giữ sản phẩm lâu bền, lộn trái áo, tránh trà bàn chải trực tiếp lên hình in quá mạnh. Sử dụng xà phòng trung tính thông thường.\n- Giặt máy để ở chế độ giặt ngâm, vòng quay tối thiểu, bằng nước thường, không quá nóng, không quá lạnh. Khuyến khích để trong túi giặt thông dụng.\n- Giặt khô đối với các sản phẩm xử lý washed acid. Không nên sử dụng máy sấy (điều này có thể làm co sản phẩm).\n- Phân loại sản phẩm màu sắc, tránh giặt chung.\n- Tránh sử dụng nước tẩy quá nhiều.\n- Phơi đồ ở nơi thoáng mát tránh ánh nắng mặt trời trực tiếp.\n- Nút áo/quần thiết kế khi sử dụng cần phải cầm sát khuy nếu cần tháo/bỏ, tránh cầm xa khuy để giật ra.',
    images: [
      'https://product.hstatic.net/200000455169/product/front_609c95001e904966b9eada526286e5a7_master.jpg',
      'https://product.hstatic.net/200000455169/product/back_3715bf8e8d1c46d6b6bf3d29d6d1946c_master.jpg',
      'https://product.hstatic.net/200000455169/product/1_552b472eb823412cb78791c222879710_master.jpg',
      'https://product.hstatic.net/200000455169/product/2_e3d0ef89ec1c40fb87c8f4d0631064d5_master.jpg',
      'https://product.hstatic.net/200000455169/product/3_507db51eb66a4c76b93aad0b0b5dc5f8_master.jpg',
      'https://product.hstatic.net/200000455169/product/3_507db51eb66a4c76b93aad0b0b5dc5f8_master.jpg',
      'https://product.hstatic.net/200000455169/product/5_48346595ead1460099bb9eacbda12e0f_master.jpg',
    ],
  },
  {
    id: '4',
    name: 'WIDE LEG WASHED MOTOR SWEATPANTS',
    price: '1,290,000',
    description: 'FEATURES:\n\nChất liệu 100% nỉ cotton\nGiặt mài tạo hiệu ứng\nForm wide leg\nCắt xẻ tạo hình\n04 túi quần\nDây điều chỉnh độ rộng đai quần\n\nSIZE CHART:\n\nSize M: bụng 74cm - dài 100cm - đũng 29cm - ống 58cm\nSize L: bụng 77cm - dài 104cm - đũng 30cm - ống 60cm\nSize XL: bụng 80cm - dài 109cm - đũng 31cm - ống 62cm\n\nFITTING:\n 1m80 - 65kg mặc size XL\n\nCLOTHING PRESERVATION:\n\n- Giặt tay trước 1 lần để giữ sản phẩm lâu bền, lộn trái áo, tránh trà bàn chải trực tiếp lên hình in quá mạnh. Sử dụng xà phòng trung tính thông thường.\n- Giặt máy để ở chế độ giặt ngâm, vòng quay tối thiểu, bằng nước thường, không quá nóng, không quá lạnh. Khuyến khích để trong túi giặt thông dụng.\n- Giặt khô đối với các sản phẩm xử lý washed acid. Không nên sử dụng máy sấy (điều này có thể làm co sản phẩm).\n- Phân loại sản phẩm màu sắc, tránh giặt chung.\n- Tránh sử dụng nước tẩy quá nhiều.\n- Phơi đồ ở nơi thoáng mát tránh ánh nắng mặt trời trực tiếp.\n- Nút áo/quần thiết kế khi sử dụng cần phải cầm sát khuy nếu cần tháo/bỏ, tránh cầm xa khuy để giật ra.',
    images: [
      'https://product.hstatic.net/200000455169/product/back_33faa422a3b547d2bce01aa7ad6b2957_master.jpg',
      'https://product.hstatic.net/200000455169/product/4_183823253f7d42028825983a2cdb86e5_master.jpg',
      'https://product.hstatic.net/200000455169/product/1_db406f13cd724ef39b95ad4f22a658ba_master.jpg',
      'https://product.hstatic.net/200000455169/product/2_1b7ed55da9dd4768a3fa49bb8ba8db4d_master.jpg',
      'https://product.hstatic.net/200000455169/product/3_85a20f96b94b47f7a055bff9d38a4157_master.jpg',
      'https://product.hstatic.net/200000455169/product/5_6c2f4ed468cd42a4ba4c76451afe857b_master.jpg',
    ],
  },
  {
    id: '5',
    name: 'SFTD GREY WASHED RAGLAN SHIRT',
    price: '520,000',
    description: 'FEATURES:\n\n100% cotton\nForm boxy\nGiặt nhuộm tạo hiệu ứng\nĐánh rách thủ công\n\nSIZE CHART:\n\nSize M: dài 59cm - ngang 60cm - vai 49cm – dài tay 21cm \nSize L: dài 61cm - ngang 62cm - vai 51cm – dài tay 23cm \nSize XL: dài 63cm - ngang 64cm - vai 53cm – dài tay 24cm\nSize XXL: dài 66cm - ngang 66cm - vai 54cm - dài tay 25cm\n\nFITTING:\n 1m80 - 65kg mặc size XL\n\nCLOTHING PRESERVATION:\n\n- Giặt tay trước 1 lần để giữ sản phẩm lâu bền, lộn trái áo, tránh trà bàn chải trực tiếp lên hình in quá mạnh. Sử dụng xà phòng trung tính thông thường.\n- Giặt máy để ở chế độ giặt ngâm, vòng quay tối thiểu, bằng nước thường, không quá nóng, không quá lạnh. Khuyến khích để trong túi giặt thông dụng.\n- Giặt khô đối với các sản phẩm xử lý washed acid. Không nên sử dụng máy sấy (điều này có thể làm co sản phẩm).\n- Phân loại sản phẩm màu sắc, tránh giặt chung.\n- Tránh sử dụng nước tẩy quá nhiều.\n- Phơi đồ ở nơi thoáng mát tránh ánh nắng mặt trời trực tiếp.\n- Nút áo/quần thiết kế khi sử dụng cần phải cầm sát khuy nếu cần tháo/bỏ, tránh cầm xa khuy để giật ra.',
    images: [
      'https://product.hstatic.net/200000455169/product/front__1__82612511545a48b593e1731573cec4d0_master.jpg',
      'https://product.hstatic.net/200000455169/product/back_171e44c52e56434a808d4a6c46b59f30_master.jpg',
      'https://product.hstatic.net/200000455169/product/11_73fb1971182f4ccaa8350d4d73b42491_master.jpg',
    ],
  },
  {
    id: '6',
    name: 'EVA HOOD TSHIRT',
    price: '620,000',
    description: 'FEATURES:\n\n100% cotton\nIn lụa trước ngực\nCắt xẻ thân áo\nTag thương hiệu gắn dưới gấu\nDây rút cao su trên mũ\n\nSIZE CHART:\n\nSize M: dài 70cm - ngang 57cm - vai 52cm - dài tay 65cm\nSize L: dài 73cm- ngang 61cm - vai 53cm - dài tay 66cm\nSize XL: dài 76cm - ngang 64cm - vai 54cm - dài tay 68cm\n\nFITTING:\n 1m80 - 65kg mặc size XL\n\nCLOTHING PRESERVATION:\n\n- Giặt tay trước 1 lần để giữ sản phẩm lâu bền, lộn trái áo, tránh trà bàn chải trực tiếp lên hình in quá mạnh. Sử dụng xà phòng trung tính thông thường.\n- Giặt máy để ở chế độ giặt ngâm, vòng quay tối thiểu, bằng nước thường, không quá nóng, không quá lạnh. Khuyến khích để trong túi giặt thông dụng.\n- Giặt khô đối với các sản phẩm xử lý washed acid. Không nên sử dụng máy sấy (điều này có thể làm co sản phẩm).\n- Phân loại sản phẩm màu sắc, tránh giặt chung.\n- Tránh sử dụng nước tẩy quá nhiều.\n- Phơi đồ ở nơi thoáng mát tránh ánh nắng mặt trời trực tiếp.\n- Nút áo/quần thiết kế khi sử dụng cần phải cầm sát khuy nếu cần tháo/bỏ, tránh cầm xa khuy để giật ra.',
    images: [
      'https://product.hstatic.net/200000455169/product/front__48__e02ec8b5505645859d0156a22434fe4b_master.jpg',
      'https://product.hstatic.net/200000455169/product/back__46__45a35ceb7ec04cf6a817f443fe647ff3_master.jpg',
      'https://product.hstatic.net/200000455169/product/1__67__7dc29c9d964c45dea7f3e78c5282536c_master.jpg',
      'https://product.hstatic.net/200000455169/product/5__39__c5360bd9083046d3b05d82bd1eee24f8_master.jpg',
      'https://product.hstatic.net/200000455169/product/3__63__705156b356d54564b35668f6b56f1a51_master.jpg',
      'https://product.hstatic.net/200000455169/product/4__56__b48e1a27cfb940af8b4e4a08eded95fd_master.jpg',
      'https://product.hstatic.net/200000455169/product/2__67__6f8ec27bf47442d0b8e6f4d26ce072cd_master.jpg',
    ],
  },
  {
    id: '7',
    name: 'TMPRARY CRINKLE JACKET',
    price: '1,390,000',
    description: 'FEATURES:\n\n20% cotton, 80% polyester\nDây rút điều chỉnh độ dài gấu áo\n02 túi áo ngoài\n01 túi áo trong\n\nSIZE CHART:\n\nSize M: dài 72cm - ngang 52cm - vai 48cm - dài tay 66cm\nSize L: dài 74cm - ngang 54cm - vai 52cm - dài tay 67cm\nSize XL: dài 78cm - ngang 56cm - vai 54cm - dài tay 68cm\n\nFITTING:\n 1m80 - 65kg mặc size XL\n\nCLOTHING PRESERVATION:\n\n- Giặt tay trước 1 lần để giữ sản phẩm lâu bền, lộn trái áo, tránh trà bàn chải trực tiếp lên hình in quá mạnh. Sử dụng xà phòng trung tính thông thường.\n- Giặt máy để ở chế độ giặt ngâm, vòng quay tối thiểu, bằng nước thường, không quá nóng, không quá lạnh. Khuyến khích để trong túi giặt thông dụng.\n- Giặt khô đối với các sản phẩm xử lý washed acid. Không nên sử dụng máy sấy (điều này có thể làm co sản phẩm).\n- Phân loại sản phẩm màu sắc, tránh giặt chung.\n- Tránh sử dụng nước tẩy quá nhiều.\n- Phơi đồ ở nơi thoáng mát tránh ánh nắng mặt trời trực tiếp.\n- Nút áo/quần thiết kế khi sử dụng cần phải cầm sát khuy nếu cần tháo/bỏ, tránh cầm xa khuy để giật ra.',
    images: [
      'https://product.hstatic.net/200000455169/product/front1_57c365ad8a354a88ab769c80bc96d312_master.jpg',
      'https://product.hstatic.net/200000455169/product/back1_969ef4b4d75e4de3af35a33977c27e5f_master.jpg',
      'https://product.hstatic.net/200000455169/product/front2_77c8438ed22c444290f1b1c46b0a59f0_master.jpg',
      'https://product.hstatic.net/200000455169/product/back2_c3e85b097c1f4464a43375e1c136fcdc_master.jpg',
      'https://product.hstatic.net/200000455169/product/img_5776_39cf40ad270f49a6932d4877b88c189b_master.jpg',
      'https://product.hstatic.net/200000455169/product/img_5785_6419fd4ff2ca459789c1cd2e2fd583af_master.jpg',
      'https://product.hstatic.net/200000455169/product/img_5788_47762a847f7647b59baac78b4b939656_master.jpg',
      'https://product.hstatic.net/200000455169/product/img_5792_8ad70c9bfac7400c84bec8da14ca5b39_master.jpg',    
    ],
  },
  {
    id: '8',
    name: 'TMPRARY BB SATIN SILK SHIRT',
    price: '1,490,000',
    description: 'FEATURES:\n\n100% Satin Silk\n01 túi ngực trái\nForm cuban\n\nSIZE CHART:\n\nSize M: dài 72cm - ngang 51cm - vai 45cm - dài tay 26cm\nSize L: dài 75cm - ngang 54cm - vai 46cm - dài tay 27cm\nSize XL: dài 78cm - ngang 57cm - vai 48cm - dài tay 28cm\n\nFITTING:\n 1m80 - 65kg mặc size XL\n\nCLOTHING PRESERVATION:\n\n- Giặt tay trước 1 lần để giữ sản phẩm lâu bền, lộn trái áo, tránh trà bàn chải trực tiếp lên hình in quá mạnh. Sử dụng xà phòng trung tính thông thường.\n- Giặt máy để ở chế độ giặt ngâm, vòng quay tối thiểu, bằng nước thường, không quá nóng, không quá lạnh. Khuyến khích để trong túi giặt thông dụng.\n- Giặt khô đối với các sản phẩm xử lý washed acid. Không nên sử dụng máy sấy (điều này có thể làm co sản phẩm).\n- Phân loại sản phẩm màu sắc, tránh giặt chung.\n- Tránh sử dụng nước tẩy quá nhiều.\n- Phơi đồ ở nơi thoáng mát tránh ánh nắng mặt trời trực tiếp.\n- Nút áo/quần thiết kế khi sử dụng cần phải cầm sát khuy nếu cần tháo/bỏ, tránh cầm xa khuy để giật ra.',
    images: [
      'https://product.hstatic.net/200000455169/product/front_f39f7141b5a3475aa373a45a29696a27_master.jpg',
      'https://product.hstatic.net/200000455169/product/back_e2283228a6be4ef0982a3c9cd1794627_master.jpg',
      'https://product.hstatic.net/200000455169/product/1_4df2a4aca9d34da994be28465016856a_master.jpg',
      'https://product.hstatic.net/200000455169/product/2_30f8531e7ce9462cbbf0722823d8f1bd_master.jpg',
      'https://product.hstatic.net/200000455169/product/3_53b89180d2c744b5940157b3e17e3791_master.jpg',
      'https://product.hstatic.net/200000455169/product/4_11299f4526a74ba58e9440567570f200_master.jpg',
    ],
  },
  {
    id: '9',
    name: 'DIGITAL SLAVES BLACK HOODIE',
    price: '760,0000',
    description: 'FEATURES:\n\n100% Cotton\nIn lụa\n02 túi trước bụng\n\nSIZE CHART:\n\nSize M: dài 69cm - ngang 54cm - vai 52cm - dài tay 69cm\nSize L: dài 72cm - ngang 57cm - vai 53cm - dài tay 69cm\nSize XL: dài 76cm - ngang 59cm - vai 55cm - dài tay 70cm\nSize XXL: dài 78cm - ngang 61cm - vai 56cm - dài tay 70cm\n\nFITTING:\n 1m80 - 65kg mặc size XL\n\nCLOTHING PRESERVATION:\n\n- Giặt tay trước 1 lần để giữ sản phẩm lâu bền, lộn trái áo, tránh trà bàn chải trực tiếp lên hình in quá mạnh. Sử dụng xà phòng trung tính thông thường.\n- Giặt máy để ở chế độ giặt ngâm, vòng quay tối thiểu, bằng nước thường, không quá nóng, không quá lạnh. Khuyến khích để trong túi giặt thông dụng.\n- Giặt khô đối với các sản phẩm xử lý washed acid. Không nên sử dụng máy sấy (điều này có thể làm co sản phẩm).\n- Phân loại sản phẩm màu sắc, tránh giặt chung.\n- Tránh sử dụng nước tẩy quá nhiều.\n- Phơi đồ ở nơi thoáng mát tránh ánh nắng mặt trời trực tiếp.\n- Nút áo/quần thiết kế khi sử dụng cần phải cầm sát khuy nếu cần tháo/bỏ, tránh cầm xa khuy để giật ra.',    
    images: [
      'https://product.hstatic.net/200000455169/product/front_83b30f6f498a4c03b4c7a88a6e6622a8_master.jpg',
      'https://product.hstatic.net/200000455169/product/back_a77125cd9458480c941cdd5e8e1614f6_master.jpg',
      'https://product.hstatic.net/200000455169/product/4_2d786aae93564f06bdc00f0bf570f0f4_master.jpg',
      'https://product.hstatic.net/200000455169/product/1_e9cc368ab17543bbb34df31a9824bb50_master.jpg',
      'https://product.hstatic.net/200000455169/product/2_8c8fbc94daf04a7da8e1c380ef363369_master.jpg',
      'https://product.hstatic.net/200000455169/product/3_a869d40f02704b4db7eda4aa4342a7a0_master.jpg',
      'https://product.hstatic.net/200000455169/product/5_257da446f91f40019a53c77007d88b53_master.jpg',

    ],
  },
  {
    id: '10',
    name: 'TMPRARY CUPRO GREY SLIM PANTS',
    price: '990,000',
description: `FEATURES:\n\n100% cupro\nForm slim fit\n02 túi quần\n\nSIZE CHART:\n\nSize M: bụng 78cm - dài 99cm - đũng 35cm - ống 56cm\nSize L: bụng 80cm - dài 103cm - đũng 36cm - ống 60cm\nSize XL: bụng 82cm - dài 108cm - đũng 38cm - ống 64cm\n\nFITTING:\n 1m80 - 65kg mặc size XL\n\nCLOTHING PRESERVATION:\n\n- Giặt tay trước 1 lần để giữ sản phẩm lâu bền, lộn trái áo, tránh trà bàn chải trực tiếp lên hình in quá mạnh. Sử dụng xà phòng trung tính thông thường.\n- Giặt máy để ở chế độ giặt ngâm, vòng quay tối thiểu, bằng nước thường, không quá nóng, không quá lạnh. Khuyến khích để trong túi giặt thông dụng.\n- Giặt khô đối với các sản phẩm xử lý washed acid. Không nên sử dụng máy sấy (điều này có thể làm co sản phẩm).\n- Phân loại sản phẩm màu sắc, tránh giặt chung.\n- Tránh sử dụng nước tẩy quá nhiều.\n- Phơi đồ ở nơi thoáng mát tránh ánh nắng mặt trời trực tiếp.\n- Nút áo/quần thiết kế khi sử dụng cần phải cầm sát khuy nếu cần tháo/bỏ, tránh cầm xa khuy để giật ra.`,
    images: [  
      'https://product.hstatic.net/200000455169/product/front_d311ac30994d4929a8e4d150d56b6039_master.jpg',
      'https://product.hstatic.net/200000455169/product/1_1f22543f098c466a9620c2de873d51e2_master.jpg',
      'https://product.hstatic.net/200000455169/product/2_556da6bb625f48299eb8967783cff5af_master.jpg',
      'https://product.hstatic.net/200000455169/product/3_8bc2450d099c4e16915be25e516ac54c_master.jpg',
      'https://product.hstatic.net/200000455169/product/4_5586558bf8b74ab1ac526b9bace66cb2_master.jpg',

    ],
  },
];


const ProductListScreen = ({ navigation }) => {
  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate('Product', { product: item })}
    >
      {/* Thêm hình ảnh ở đây */}
      
      <Image
        source={{ uri: item.image }} // Hiển thị hình ảnh
        style={styles.productImage} // Thêm kiểu dáng cho hình ảnh
      />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price} VND</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem} // Gọi hàm render sản phẩm
        keyExtractor={(item) => item.id} // Khóa của từng sản phẩm
      />
      
    </View>
  );
};

// Các kiểu dáng
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  productImage: {
    width: '100%', // Chiều rộng hình ảnh chiếm 100% chiều rộng của sản phẩm
    height: 100, // Chiều cao của hình ảnh
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default ProductListScreen;
