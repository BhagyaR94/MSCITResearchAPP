import { StyleSheet } from 'react-native'

export default class StyleSheetFactory {
    static getStyles(props) {
        return StyleSheet.create({
            mainContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                backgroundColor: '#FFF'
            },

            logoContainer: {
                width: 350,
                height: 350,
                bottom: 50,
                alignSelf: 'center',
            },

            logoStyle: {
                width: 350,
                height: 350,
                transform: [{ rotate: props.logoStyle.spin }]
            },

            title: {
                fontFamily: 'tahoma',
                fontSize: 72,
                textAlign: 'center',
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: -1, height: 1 },
                color: '#009688'
            },

            subtitle: {
                fontFamily: 'tahoma',
                fontSize: 18,
                textAlign: 'center',
                color: '#009688',
                fontWeight: 'bold'
            }
        });
    }
}