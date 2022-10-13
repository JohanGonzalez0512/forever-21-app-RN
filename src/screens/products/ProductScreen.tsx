import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export const ProductScreen = () => {

    const navigation = useNavigation<any>();

    return (
        <View>
            <Text>ProductScreen</Text>

            <Button
                title="Go to CaptureScreen"
                onPress={() => navigation.navigate('CaptureScreen')}
            />
        </View>
    )
}
