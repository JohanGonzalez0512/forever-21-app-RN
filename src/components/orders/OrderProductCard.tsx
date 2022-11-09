import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useAppSelector } from '../../hooks/hooks';

interface Props {
    product: {
        id: string;
        SKU: string;
        name: string;
        imageURL: string;
        quantity: number;
    }
}

export const OrderProductCard: FC<Props> = ({ product }) => {


    const { quantityProducts } = useAppSelector(state => state.order);

    return (
        <View style={styles.container}>
            <View>

                <Text style={styles.statusTitle}>{`Nombre: ${product.name}`}</Text>
                <Text style={styles.statusTitle}>{`Cantidad requerida: ${product.quantity}`}</Text>
            </View>

            <Text style={styles.statusTitle}>{`Cantidad: ${quantityProducts?.find(item => item.id === product.id)?.quantity}`}</Text>
           
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 70,
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
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100
    },
    statusTitle: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'black',
        marginRight: 10
    },
    statusValue: {
        fontSize: 15,
        color: 'black',
    }



})