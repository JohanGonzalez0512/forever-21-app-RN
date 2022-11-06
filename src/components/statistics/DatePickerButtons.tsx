import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FormikErrors } from 'formik';
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    value: string
    errors: FormikErrors<string> | undefined,
    touched: boolean | undefined,
    value2: string
    errors2: FormikErrors<string> | undefined,
    touched2: boolean | undefined,
    setOpen: React.Dispatch<React.SetStateAction<{
        initialDate: boolean;
        finalDate: boolean;
    }>>
}


export const DatePickerButtons: FC<Props> = ({ value, errors, touched, errors2, touched2, value2, setOpen,  }) => {
    return (
        <>
            <Text style={styles.title}>Filtros</Text>
            <View style={styles.container}>

                <View >
                    <Text style={styles.label}>Desde</Text>
                    <TouchableOpacity onPress={() => setOpen(
                        {
                            initialDate: true,
                            finalDate: false
                        }
                    )
                    } style={{
                        ...styles.containerPicker,
                        borderColor: (touched && errors) ? '#FF0000' : '#e9eaef',
                    }}>
                        <Icon
                            name={'calendar-outline'}
                            size={20}
                            color="rgba(0,0,0,0.5)"
                            style={{ marginRight: 10 }}
                        />
                        <Text>{`${value ? value : 'Elige una fecha'}`}</Text>
                    </TouchableOpacity>
                    <Text style={styles.inputError}>{errors && touched && errors}</Text>
                </View>


                <View >
                    <Text style={styles.label}>Hasta</Text>
                    <TouchableOpacity onPress={() => setOpen({
                        initialDate: false,
                        finalDate: true
                    })} style={{
                        ...styles.containerPicker,
                        borderColor: (touched2 && errors2) ? '#FF0000' : '#e9eaef',
                    }}>
                        <Icon
                            name={'calendar-outline'}
                            size={20}
                            color="rgba(0,0,0,0.5)"
                            style={{ marginRight: 10 }}
                        />
                        <Text>{`${value2 ? value2 : 'Elige una fecha'}`}</Text>
                    </TouchableOpacity>
                    <Text style={styles.inputError}>{errors2 && touched2 && errors2}</Text>
                </View>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
        marginLeft: 10
    },
    container: {
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: 20,
        flexDirection: 'row',
    },
    containerPicker: {
        height: 50,
        width: 160,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 10,
        borderColor: '#e9eaef',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    inputError: {
        marginTop: 10,
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 2,
    }

});
