import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OrderCard } from '../../components/orders';
import { Header } from '../../components/ui';
import { RootStackParamListOrders } from '../../navigation/OrdersStack';

const data = [
  {
    id: "fc643c9b-bad8-486e-989c-7a6890a8fbde",
    status: false,
    products: [
      {
        id: "a7923552-1880-4a38-a1c6-00269d8d339e",
        SKU: "010421250724",
        name: "CamisaTest",
        imageURL: "No Image",
        quantity: 8
      },



    ],
    length: 1
  },
]




interface Props extends NativeStackScreenProps<RootStackParamListOrders, 'OrdersScreen'> { }

export const OrderScreen: FC<Props> = ({ navigation }) => {

  const handleClick = () => {
    navigation.navigate('CheckProductsScreen', {
      products: data[0].products
    })
  }


  return (
    <View style={styles.container}>
      <Header title="Ordenes" />
      <OrderCard
        order={data[0]}
        handleClick={handleClick}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
