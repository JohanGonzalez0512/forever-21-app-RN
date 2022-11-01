import React from 'react'
import { Formik, FormikHelpers, FormikProps } from 'formik'
import * as Yup from "yup";
import { CustomInput } from '../ui'
import { ButtonLogin } from './ButtonLogin'
import { useAppDispatch } from '../../hooks';
import { startLogin } from '../../store/auth';


interface InitialValues {
    email: string,
    password: string
}

export const FormLogin = () => {

    const dispatch = useAppDispatch();

    const initialValues: InitialValues = { email: '', password: '' };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email invalido')
            .required('Email requerido'),
        password: Yup.string()
            .min(6, 'Contraseña muy corta')
            .required('Contraseña requerida'),
    })

    const handleLogin = (values: InitialValues, { setSubmitting }: FormikHelpers<InitialValues>) => {
        dispatch(startLogin(values, setSubmitting));
    }




    return (
        <>

            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {({ handleChange, values, handleSubmit, handleBlur, touched, errors, isSubmitting }: FormikProps<InitialValues>) => (

                    <>


                        <CustomInput
                            iconName="mail-outline"
                            label="Correo electrónico"
                            placeholder='Correo electrónico'
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            margin={20}
                            value={values.email}
                            errors={errors.email}
                            onBlur={handleBlur('email')}
                            touched={touched.email}
                            onChangeText={handleChange('email')}
                        />

                        <CustomInput
                            iconName="lock-closed-outline"
                            label="Contraseña"
                            placeholder='Contraseña'
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            margin={20}
                            value={values.password}
                            errors={errors.password}
                            onBlur={handleBlur('password')}
                            touched={touched.password}
                            onChangeText={handleChange('password')}
                        />

                        <ButtonLogin
                            title="Iniciar Sesión"
                            onPress={handleSubmit}
                            disabled={isSubmitting}

                        />
                    </>
                )}

            </Formik>

        </>
    )
}
