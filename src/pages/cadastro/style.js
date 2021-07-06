import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    input:{
        height: 100,
        width: 300,
        margin: 12,
        borderWidth: 1,
        borderColor: '#9966cc',
        color: '#9966cc',
        textAlign: 'center'
    },
        botao:{
            flex: 1,
             alignItems: 'center',
            justifyContent: 'center',
        },
        button:{
            alignItems: 'center',
            backgroundColor: '#7b3ff2',
            padding: 10,
            width: 300,
            marginTop: 16,
            borderRadius:10
        },
        texto:{
            fontSize: 25,
            textAlign: 'center',
            marginBottom: 16,
            color: '#5d09ed'
        }
});
export default styles;