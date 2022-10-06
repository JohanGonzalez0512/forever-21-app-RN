import { StyleSheet } from 'react-native';



export const colors = {
    primary: "#ffffff",
    secondary: "#000",
    tertiary: "#ffe801",


}
export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 5,
    },
   
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,

    },

    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50
    },
    menuBoton: {
        marginVertical: 15,
    },
    menuTexto: {
        fontSize: 20,

    }
});