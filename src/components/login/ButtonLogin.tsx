import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { FC } from 'react'


interface Props {
    title: string
    onPress: () => void,
    disabled: boolean
}

export const ButtonLogin: FC<Props> = ({ title, onPress, disabled }) => {
    return (
        <TouchableOpacity
            disabled={disabled}            
            activeOpacity={0.8}
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 40,
        height: 50,
        backgroundColor: 'black',
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
