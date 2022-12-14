import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/ProductsStack';
import { Header } from '../../components/ui';
import { FormProduct } from '../../components/products';

interface Props extends NativeStackScreenProps<RootStackParamList, 'CreateProductScreen'> { }

export const CreateProductScreen: FC<Props> = ({ route, navigation }) => {

  const { code } = route.params;

  return (
    <View style={styles.container}>
      <Header title='Crear Producto' />

      <FormProduct
        SKU={code}
        navigation={navigation}
       />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
