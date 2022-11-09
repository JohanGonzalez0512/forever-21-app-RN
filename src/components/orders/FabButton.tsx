import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamListOrders } from '../../navigation/OrdersStack';


interface Props extends NativeStackScreenProps<RootStackParamListOrders, 'CheckProductsScreen'> { }



export const FabButton: FC<Props> = ({ navigation }) => {


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.container}
            onPress={() => navigation.navigate('CaptureScreenOrders')}
        >
            <Icon
                name="add"
                color="white"
                size={35}
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'black',
        width: 60,
        height: 60,
        borderRadius: 100,
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
