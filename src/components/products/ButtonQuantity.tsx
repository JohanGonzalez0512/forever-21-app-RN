import React, { FC } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    handlePress: () => void,
    iconName: string
}

export const ButtonQuantity: FC<Props> = ({ handlePress, iconName }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.8}
            style={styles.container}>
            <Icon
                name={iconName}
                size={25}
                color={'white'}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.secondary,
        borderRadius: 50,
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 1,


    },
});