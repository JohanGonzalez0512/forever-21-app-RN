import React, { FC } from 'react'
import * as Yup from "yup";
import { Formik, FormikProps } from 'formik';
import { useAppDispatch } from '../../hooks';
import { ButtonSubmit, CustomInput } from '../ui';
import { CustomImagePicker } from './CustomImagePicker';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/ProductsStack';
import { startCreatingProduct } from '../../store/products';

interface InitialValues {
    name: string,
    image: string,
}

interface Props {
    SKU: string,
    navigation: NativeStackNavigationProp<RootStackParamList, "CreateProductScreen", undefined>
}

export const FormProduct: FC<Props> = ({ SKU, navigation }) => {

    const dispatch = useAppDispatch();

    const initialValues: InitialValues = { name: '', image: '' };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Nombre requerido'),
        image: Yup.object()
            .required('Imagen requerida')
    })

    const handleSubmit = (values: any) => {
        dispatch(startCreatingProduct({
            navigation,
            SKU,
            name: values.name,
            image: {
                uri: values.image.uri,
                type: values.image.type,
                fileName: values.image.fileName
            },
        }))
    }






    return (
        <View style={styles.container}>

            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
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
