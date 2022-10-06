import React from 'react'
import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native'
import { FormikErrors } from 'formik'
import Icon from 'react-native-vector-icons/Ionicons'


interface Props extends TextInputProps {
  label: string,
  errors: FormikErrors<string> | undefined,
  touched: boolean | undefined,
  margin?: number,
  iconName: string,
}


export const CustomInput = ({ label, errors, touched, margin = 0, iconName, ...props }: Props) => {
  return (
    <View style={{ marginHorizontal: margin }}>
      <Text style={styles.label} >{label}</Text>
      <View style={{
        ...styles.inputContainer,
        borderColor: (touched && errors) ? '#FF0000' : '#e9eaef',
      }}>
        <Icon
          name={iconName}
          size={20}
          color="rgba(0,0,0,0.5)"
          style={{ marginRight: 10 }}
        />
        <TextInput

          {...props}
          placeholderTextColor="rgba(0,0,0,0.5)"
          style={styles.input}
        />
      </View>
      <Text style={styles.inputError}>{errors && touched && errors}</Text>


    </View>
  )
}

const styles = StyleSheet.create({


  label: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 8,
  },

  inputContainer: {
    height: 50,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 10,
    borderColor: '#e9eaef',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input:{
    color: 'black',
  },

  inputError: {
    marginTop: 10,
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 2,
  }
});