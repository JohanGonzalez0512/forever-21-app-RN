import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react'


interface Props {
    path: any,
    text: string
}


export const NoData: FC<Props> = ({ path, text }) => {
    return (


        <View style={styles.container}>

            <Image
                style={styles.image}
                source={path}
            />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
    }
});
