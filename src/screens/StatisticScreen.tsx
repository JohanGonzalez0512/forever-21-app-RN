import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Header } from '../components/ui/Header';
import { DatePickerForm } from '../components/statistics/DatePickerForm';
import { Graphics } from '../components/statistics';
import { useAppSelector } from '../hooks/hooks';
import { Statistic } from '../interfaces';


export const StatisticScreen = () => {

  const { statistics } = useAppSelector(state => state.statistic)

  const [data, setData] = useState<Statistic>()

  useEffect(() => {
    if (statistics !== null) {
      setData(statistics)
    }
  }, [statistics])




  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header title='Estadísticas' />
      <DatePickerForm />
      <Graphics statistics={statistics} />






    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
