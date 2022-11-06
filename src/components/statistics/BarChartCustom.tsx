import React, { FC } from 'react'
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

interface Props {
    data: {
        labels: string[],
        datasets: {
            data: number[]
        }[]
    },
    title: string
}

export const BarChartCustom: FC<Props> = ({ data, title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <BarChart
                data={data}
                width={Dimensions.get("window").width - 15} // from react-native
                height={220}
                yAxisLabel={''}
                yAxisSuffix={''}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    strokeWidth: 2, // optional, default 3
                }}
                style={styles.graph}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    graph: {
        marginVertical: 10,
        borderRadius: 16,
        marginHorizontal: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        textAlign: 'center'
    }

});