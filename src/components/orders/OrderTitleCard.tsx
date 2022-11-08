import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MarqueeText from 'react-native-marquee';

interface Props {
    products: {
        id: string;
        SKU: string;
        name: string;
        imageURL: string;
    }[],
    length: number;
}

export const OrderTitleCard: FC<Props> = ({ products, length }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nombre(s):</Text>
            {
                length > 1 ?
                    <MarqueeText
                        style={{ fontSize: 24, minWidth: 200 }}
                        speed={1}
                        marqueeOnStart={true}
                        loop={true}
                        delay={1000}

                    >
                        {products.map((product, index) => {
                            return (
                                <Text key={index} style={styles.value}>{`${product.name}         `}</Text>
                            )
                        })}
                    </MarqueeText>


                    :
                    (
                        <Text style={styles.value}>{products[0].name}</Text>
                    )


            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        
    },
    value: {
        fontSize: 15,
        color: 'black',
        marginLeft: 10
    }
})
