import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/globalTheme';

export const TitleLogin = () => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.preTitle}>Inicia Sesión en</Text>
            <Text style={styles.title}>FOREVER 21</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80,
    },
    preTitle: {
        fontSize: 20,
        color: '#494949',
    },
    title: {
        fontSize: 55,
        color: colors.secondary,
        fontFamily: "FontPrimary",
    }
})
