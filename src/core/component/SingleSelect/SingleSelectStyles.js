import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({

            MainContainer: {
            },

            SelectLabel: {
                fontSize: 14
            },

            SingleSelectContainer: {
                borderRadius: 5,
                height: 64,
                borderBottomWidth:0.5, borderBottomColor:'black', borderStyle:'solid'
            },

        });
    }

}