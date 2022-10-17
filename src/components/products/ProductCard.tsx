import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ButtonQuantity } from './ButtonQuantity';
import { useAppDispatch } from '../../hooks/hooks';
import { decrement, increment } from '../../store/products';

interface Props {
    product: {
        name: string;
        quantity: number;
        SKU: string;
    }

}

export const ProductCard: FC<Props> = ({ product }) => {

    const { name, quantity, SKU } = product;

    const disptach = useAppDispatch();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>SKU: {SKU}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <ButtonQuantity handlePress={() => disptach(decrement(product))} iconName='remove' />

                <Text style={styles.title}>{quantity}</Text>
                <ButtonQuantity handlePress={() => disptach(increment(product))} iconName='add' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        marginHorizontal: 10,
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    subtitle: {
        fontSize: 14,
        color: 'gray'
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
        justifyContent: 'space-around',
    }
});
