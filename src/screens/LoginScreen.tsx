import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/globalTheme';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.preTitle}>Inicia Sesión en</Text>
        <Text style={styles.title}>FOREVER 21</Text>
      </View>



    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  preTitle:{

    fontSize: 20,
    color: '#494949',
  },  
  title: {
    fontSize: 55,
    color: colors.secondary,
    fontFamily: "FontPrimary",
  }
}
)
