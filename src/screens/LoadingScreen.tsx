import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import React from 'react'
import { colors } from '../theme/globalTheme';

export const LoadingScreen = () => {
    return (

        <View style={styles.container}>

            <Text style={styles.title}>FOREVER 21</Text>
            <ActivityIndicator
                size={50}
                color="black"

            />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 55,
        color: colors.secondary,
        fontFamily: "FontPrimary",
    }
})
