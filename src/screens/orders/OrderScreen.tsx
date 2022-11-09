import React, { FC, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OrderCard } from '../../components/orders';
import { Header } from '../../components/ui';
import { RootStackParamListOrders } from '../../navigation/OrdersStack';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { startGettingOrders } from '../../store/orders';



interface Props extends NativeStackScreenProps<RootStackParamListOrders, 'OrdersScreen'> { }

export const OrderScreen: FC<Props> = ({ navigation }) => {

  const { orders } = useAppSelector(state => state.order)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(startGettingOrders())
  }, [dispatch, navigation])





  return (
    <View style={styles.container}>
      <Header title="Ordenes" />

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OrderCard
            order={item}
            navigation={navigation}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
