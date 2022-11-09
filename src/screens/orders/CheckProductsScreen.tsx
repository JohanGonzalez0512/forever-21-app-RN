import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { FabButton, OrderProductCard } from '../../components/orders';
import { ButtonSubmit, Header } from '../../components/ui';
import { RootStackParamListOrders } from '../../navigation/OrdersStack';
import { useAppSelector } from '../../hooks/hooks';

interface Props extends NativeStackScreenProps<RootStackParamListOrders, 'CheckProductsScreen'> { }


export const CheckProductsScreen: FC<Props> = ({ navigation, route }) => {
    const [disabled, setDisabled] = useState<boolean>(true)
    const { products } = route.params;
    const { quantityProducts } = useAppSelector(state => state.order)

    const handleCheck = () => {
        products.forEach((product, index) => {
            if (product.id === quantityProducts![index].id && product.quantity === quantityProducts![index].quantity) {
                setDisabled(false)
            } else {
                setDisabled(true)
            }
        })

        useEffect(() => {
            handleCheck()
        }, [])




    }

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
                    console.log('jejej click')
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

