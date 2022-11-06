import React, { FC } from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { Statistic } from '../../interfaces'
import { NoData } from '../ui';
import { BarChartCustom } from './BarChartCustom';

interface Props {
    statistics: Statistic | null
}

export const Graphics: FC<Props> = ({ statistics }) => {
    return (

        <>
            {statistics ?

                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    <BarChartCustom
                        data={{
                            labels: statistics.products.map(product => product.name),
                            datasets: [{ data: statistics.products.map(product => product.quantity) }]
                        }}
                        title='Productos más vendidos'
                    />
                    <BarChartCustom
                        data={{
                            labels: statistics.mostActiveUser.map(activeUser => activeUser.user),
                            datasets: [{ data: statistics.mostActiveUser.map(activeUser => activeUser.movements) }]
                        }}
                        title='Usuarios más activos'
                    />
                   
                    <BarChartCustom
                        data={{
                            labels: statistics.mostActiveOrders.map(activeUser => activeUser.user),
                            datasets: [{ data: statistics.mostActiveOrders.map(activeUser => activeUser.orders) }]
                        }}
                        title='Usuarios con más ordenes'
                    />
                </ScrollView>
                : <NoData
                    path={require('../../assets/no-graph.png')}
                    text='No hay datos'
                />}



        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginVertical: 40
    }
});
