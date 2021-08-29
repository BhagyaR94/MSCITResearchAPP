import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            container: {
            },

            buttonStyles: {
                height: 64,
                width: 128,
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                backgroundColor: '#009688'
            },

            buttonLabel: {
                color: '#FFF',
                alignSelf: 'center',
                width: 100,
                fontSize: 18,
                textAlign: 'center'
            },

        });
    }

}