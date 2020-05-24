import {StyleSheet} from 'react-native'
import {Constants} from "expo/build/globals.web";

const styles = StyleSheet.create({
    container:{
        backgroundColor : 'red',
        marginTop : Constants.statusBarHeight+5,
        marginLeft : 5,
        marginRight: 5,
        paddingVertical : 10,
        flexDirection : 'row'
    },
    content:{
        flex : 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text : {
        color:'white',
        textAlign:'center'
    }
});
export default styles