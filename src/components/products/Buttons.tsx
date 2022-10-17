import React, { FC, useState } from 'react'
import { StyleSheet } from 'react-native';
import { colors } from '../../theme/globalTheme';
import { FAB } from 'react-native-paper';


interface Props {
    handlePressAdd: () => void,
    handlePressUpload: () => void,
}

export const Buttons: FC<Props> = ({ handlePressAdd, handlePressUpload }) => {

    const [state, setState] = useState({
        open: false,
    });

    const onStateChange = ({ open }: any) => setState({ open });


    const { open } = state;

    return (
        <>
            <FAB.Group
                open={open}
                visible={true}
                color={colors.primary}
                fabStyle={styles.fab}
                icon={!open ? 'add' : 'close'}
                actions={[
                    {
                        icon: 'add',
                        label: 'Agregar Producto',
                        color: colors.primary,
                        onPress: handlePressAdd,
                        size: 'medium',
                    },
                    {
                        icon: 'cloud-upload',
                        label: 'Subir Productos a la nube',
                        color: colors.primary,
                        onPress: handlePressUpload,
                        size: 'medium',
                    },

                ]}
                onStateChange={onStateChange}

            />
        </>

    )
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: colors.secondary,
    },
    label: {
        color: colors.secondary,
        fontSize: 15,
        fontWeight: 'bold'
    }
})

