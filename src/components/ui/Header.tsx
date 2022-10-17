import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../theme/globalTheme';

type Props = {
    title: string;
}

export const Header: FC<Props> = ({ title }) => {
    return (
        <View>

            <View style={styles.containerTitle}>
                <Text style={styles.title}>FOREVER 21</Text>
            </View>

            <View style={styles.containerSubtitle}>
                <Text style={styles.subtitle}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        width: '100%',
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    title: {
        fontSize: 40,
        color: colors.secondary,
        fontFamily: "FontPrimary",
    },
    containerSubtitle: {
        width: '100%',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 1,
    },
    subtitle: {
        fontSize: 40,
        color: colors.secondary,
        fontFamily: "FontPrimary",
    }
});
