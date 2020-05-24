import {StyleSheet,Platform} from 'react-native'
import {Constants} from "expo/build/globals.web";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    textCenter : {
        textAlign : 'center',
        width : '100%',
    },
    container : {
        paddingTop:  Constants.statusBarHeight,
        flex : 1,
        opacity : 1,
        // backgroundColor:"#3E4D75"
    },
    colorPrimary:{
        backgroundColor:"#3E4D75"
    },
    content_form : {
        flex : 1,
        padding:hp("1%")
        // top:hp("20%"),
        // justifyContent : 'center',
    },

});

export default styles
