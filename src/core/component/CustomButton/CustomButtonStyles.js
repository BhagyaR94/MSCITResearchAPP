import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            container: {
            },

            buttonStyles: {
                height: 48,
                width: 256,
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                backgroundColor: props.isDisabled ? 'grey' : '#009688'
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