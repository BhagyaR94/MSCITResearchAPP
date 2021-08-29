import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            container: {
            },

            labelContainer: {
                color: 'red'
            },

            textInputContainer: {
                height: 64,
                elevation: 0.1,
                borderBottomWidth: 0.5
            },

            textInput: {
                fontSize: 24,
            }

        });
    }

}