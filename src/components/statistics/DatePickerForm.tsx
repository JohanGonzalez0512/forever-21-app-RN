import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks';
import { DatePickerButtons } from './DatePickerButtons'
import * as Yup from "yup";
import { Formik, FormikProps } from 'formik';
import { ButtonSubmit } from '../ui';
import DatePicker from 'react-native-date-picker';


interface InitialValues {
    initialDate: string,
    finalDate: string,
}


export const DatePickerForm = () => {

    const dispatch = useAppDispatch();
    const [open, setOpen] = useState({
        initialDate: false,
        finalDate: false
    })




    const initialValues: InitialValues = { initialDate: '', finalDate: '' };

    const validationSchema = Yup.object().shape({
        initialDate: Yup.string()
            .required('Fecha requerida'),
        finalDate: Yup.string()
            .required('Fecha requerida')
    })

    const handleSubmit = (values: any) => {
        console.log(values)
    }


    return (
        <>

            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, handleSubmit, touched, errors, isSubmitting, setFieldValue }: FormikProps<InitialValues>) => (

                    <>
                        <DatePickerButtons
                            setOpen={setOpen}
                            value={values.initialDate}
                            errors={errors.initialDate}
                            touched={touched.initialDate}
                            value2={values.finalDate}
                            errors2={errors.finalDate}
                            touched2={touched.finalDate}
                        />

                        <DatePicker
                            modal
                            open={open.initialDate}
                            mode={'date'}
                            date={values.initialDate ? new Date(values.initialDate) : new Date()}
                            onConfirm={(date) => {
                                setOpen({
                                    initialDate: false,
                                    finalDate: false
                                })
                                setFieldValue('initialDate', date.toISOString().split('T')[0])
                            }}
                            onCancel={() => {
                                setOpen({
                                    initialDate: false,
                                    finalDate: false
                                })
                            }}
                        />

                        <DatePicker
                            modal
                            open={open.finalDate}
                            mode={'date'}
                            date={values.finalDate ? new Date(values.finalDate) : new Date()}
                            onConfirm={(date) => {
                                setOpen({
                                    initialDate: false,
                                    finalDate: false
                                })
                                setFieldValue('finalDate', date.toISOString().split('T')[0])
                            }}
                            onCancel={() => {
                                setOpen({
                                    initialDate: false,
                                    finalDate: false
                                })

                            }}
                        />

                        <ButtonSubmit
                            title="Consultar estadísticas"
                            onPress={handleSubmit}
                            disabled={isSubmitting}
                        />
                    </>
                )}

            </Formik>
        </>
    )
}
