import React, { FC } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { Header, NoData } from '../../components/ui';
import { Buttons, ProductCard } from '../../components/products';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/ProductsStack';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { startUpdatingProducts } from '../../store/products';



interface Props extends NativeStackScreenProps<RootStackParamList, 'ProductsScreen'> { }
export const ProductScreen: FC<Props> = ({ navigation }) => {

    const { products } = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()


    return (
        <View style={styles.container}>
            <Header title='Productos' />


            {
                products.length > 0
                    ?
                    <FlatList
                        style={styles.flatList}
                        showsVerticalScrollIndicator={false}
                        data={products}
                        keyExtractor={(item, index) => item.name + index}
                        renderItem={({ item }) => <ProductCard product={item} />}
                        ListFooterComponent={<View style={{ height: 100 }} />}
                    />
                    :
                    <NoData
                        path={require('../../assets/no-data.png')}
                        text='No hay productos'
                    />


            }




            <Buttons
                handlePressUpload={() => dispatch(startUpdatingProducts()) }
                handlePressAdd={() => navigation.navigate('CaptureScreen')}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        flex: 1,
        marginTop: 20,
    },


});
