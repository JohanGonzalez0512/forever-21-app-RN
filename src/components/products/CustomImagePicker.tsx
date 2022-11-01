import { FormikErrors } from 'formik';
import React, { FC } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

interface Props {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
  errors: FormikErrors<string> | undefined,
  setFieldError: (field: string, value: any) => void,
  setFieldTouched: (field: string, isTouched?: boolean | undefined, shouldValidate?: boolean | undefined) => void,
  touched: boolean | undefined,
  value: string
}

export const CustomImagePicker: FC<Props> = ({
  setFieldValue,
  errors,
  setFieldError,
  setFieldTouched,
  touched,
  value

}) => {

  const handleSelectImage = () => {
    launchCamera({
      mediaType: 'photo',
      quality: 0.5,
      maxHeight: 200,
      maxWidth: 200
    }, ({ assets, didCancel }) => {
      if (!didCancel) {
        setFieldValue('image', assets![0]);
        setFieldError('image', undefined);
        setFieldTouched('image', true);
      } else {
        setFieldValue('image', '');
        setFieldError('image', 'Imagen requerida');
        setFieldTouched('image', true);
      }
    }
    )
  }


  return (
    <>

      <TouchableOpacity
        style={{
          ...styles.container,
          borderColor: (touched && errors) ? '#FF0000' : '#e9eaef',
        }}
        activeOpacity={0.8}
        onPress={handleSelectImage}
      >
        <Text style={styles.containerText}>{`${!(value !== '') ? 'Tome una foto del producto' : 'Foto tomada'}`}</Text>
      </TouchableOpacity>
      <Text style={styles.inputError}>{errors && touched && errors}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  containerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputError: {
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 2,
  }
});
