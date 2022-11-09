import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { FabButton, OrderProductCard } from '../../components/orders';
import { ButtonSubmit, Header } from '../../components/ui';
import { RootStackParamListOrders } from '../../navigation/OrdersStack';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { startUpdatingOrder } from '../../store/orders';

interface Props extends NativeStackScreenProps<RootStackParamListOrders, 'CheckProductsScreen'> { }


export const CheckProductsScreen: FC<Props> = ({ navigation, route }) => {
    const [disabled, setDisabled] = useState<boolean>(true)
    const { products } = route.params;
    const { quantityProducts } = useAppSelector(state => state.order)
    const dispatch = useAppDispatch()

    const handleCheck = () => {
       
        products.forEach((product, index) => {
            quantityProducts?.forEach((productR, i) => {
                if (product.id === productR.id && product.quantity === productR.quantity) {
                    setDisabled(false)

                } else {
                    setDisabled(true)
                }

            })



        })
    }

    useEffect(() => {
        handleCheck()

    }, [route.params])

    return (
        <View style={styles.container}>
            <Header
                title="Checador de ordenes"
            />

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <OrderProductCard
                        product={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: 100 }} />}
            />

            <ButtonSubmit
                title="Finalizar"
                marginBottom={100}
                disabled={disabled}
                onPress={() => {
                    dispatch(startUpdatingOrder({ navigation }))
                }}

            />
            <FabButton
                navigation={navigation}
                route={route}
            />



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'relative',
        flex: 1,
    }
});

