import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from '../components/ui/Header';
import { DatePickerForm } from '../components/statistics/DatePickerForm';

export const StatisticScreen = () => {
  return (
    <View style={styles.container}>
      <Header title='Estadísticas' />
      <DatePickerForm />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
