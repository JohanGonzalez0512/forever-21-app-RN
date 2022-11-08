import React, { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { OrderTitleCard } from './OrderTitleCard';

interface Props {

    order: {
        id: string;
        status: boolean;
        products: {
            id: string;
            SKU: string;
            name: string;
            imageURL: string;
            quantity: number;
        }[];
        length: number;
    }
    handleClick: () => void;

}

export const OrderCard: FC<Props> = ({ order, handleClick }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.container}
            onPress={handleClick}
        >

            <View>
                <OrderTitleCard
                    products={order.products}
                    length={order.length}
                />

                <View style={styles.statusContainer}>
                    <Text style={styles.statusTitle}>Status:</Text>
                    <Text style={styles.statusValue}>{order.status ? 'Enviado' : 'Pendiente'}</Text>
                </View>
            </View>
        </TouchableOpacity >
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
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginRight: 10
    },
    statusValue: {
        fontSize: 15,
        color: 'black',
    }



})