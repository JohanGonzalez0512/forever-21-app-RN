import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useAppSelector } from '../../hooks/hooks';

export const UserInfo = () => {

    const { user } = useAppSelector(state => state.auth)
    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`Nombre Completo: ${user?.fullName}`}</Text>
            <Text style={styles.text}>{`Email: ${user?.email}`}</Text>
            <Text style={styles.text}>{`ID: ${user?.id}`}</Text>
        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop: 40,
        // make a card
        padding: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5 
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10
    }
});
