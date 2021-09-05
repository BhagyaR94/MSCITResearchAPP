import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {

    static getStyles(props) {
        return StyleSheet.create({
            textStyles: {
                color: '#336df3',
                fontSize: 18,
            }
        });
    }

}