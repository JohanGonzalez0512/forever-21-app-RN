import React from 'react'
import * as Yup from "yup";
import ImagePicker from 'react-native-image-picker';
import { Formik, FormikProps } from 'formik';
import { useAppDispatch } from '../../hooks';
import { ButtonSubmit, CustomInput } from '../ui';
import { CustomImagePicker } from './CustomImagePicker';
import { StyleSheet, View } from 'react-native';

interface InitialValues {
    name: string,
    image: string,

}

export const FormProduct = () => {

    const dispatch = useAppDispatch();

    const initialValues: InitialValues = { name: '', image: '' };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Nombre requerido'),
        image: Yup.object()
            .required('Imagen requerida')
    })






    return (
        <View style={styles.container}>

            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={() => {
                    console.log('submit')
                }}
            >
                {({ handleChange, values, handleSubmit, handleBlur, touched, errors, isSubmitting, setFieldValue, setFieldError, setFieldTouched }: FormikProps<InitialValues>) => (

                    <>


                        <CustomInput
                            iconName="pencil"
                            label="Nombre del producto"
                            placeholder='Nombre del producto'
                            keyboardType="default"
                            autoCapitalize="none"
                            autoCorrect={false}
                            margin={20}
                            value={values.name}
                            errors={errors.name}
                            onBlur={handleBlur('name')}
                            touched={touched.name}
                            onChangeText={handleChange('name')}
                        />

                        <CustomImagePicker
                            setFieldValue={setFieldValue}
                            errors={errors.image}
                            value={values.image}
                            setFieldError={setFieldError}
                            setFieldTouched={setFieldTouched}
                            touched={touched.image}

                         />


                        <ButtonSubmit
                            title="Crear Producto"
                            onPress={handleSubmit}
                            disabled={isSubmitting}

                        />
                    </>
                )}

            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
    }
})
