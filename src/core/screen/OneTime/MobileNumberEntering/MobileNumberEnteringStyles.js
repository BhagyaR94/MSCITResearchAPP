import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
    static getStyleSheet() {
        return StyleSheet.create({
            mainContainer: {
                display: 'flex',
                flex: 1,
                margin: 8,
                flexDirection: 'column',
            },
            imageContainer: {
                display:'flex',
                flex:0.5,
                justifyContent: 'center',
                alignItems:'center',
            },
            formContainer: {
                display: 'flex',
                flexDirection: 'row',
                flex:0.3,
            },
            countryCodeContainer: {
                display: 'flex',
                flex: 0.4,
                justifyContent: 'center',
            },
            mobileNumberContainer: {
                display: 'flex',
                flex: 0.6,
                justifyContent: 'center',
            },
            buttonContainer: {
                marginTop: 8,
                justifyContent: 'center'
            },
            title:{
                fontSize:28,
                justifyContent:'center',
                fontWeight: 'bold'
            },
            subtitle:{
                fontSize:20,
                justifyContent:'center',
                textAlign: 'center',
            },
            headingContainer: {
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems:'center',
                marginTop: 24
            }
        });
    }
}