import { StyleSheet } from 'react-native';
import * as staticStyles from '../../../util/ColorUtil'

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
                display: 'flex',
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
            },
            formContainer: {
                display: 'flex',
                flexDirection: 'row',
                flex: 0.3,
            },
            countryCodeContainer: {
                display: 'flex',
                flex: 0.3,
                justifyContent: 'center',
            },
            mobileNumberContainer: {
                display: 'flex',
                flex: 0.7,
                justifyContent: 'center',
            },
            buttonContainer: {
                marginTop: 8,
                justifyContent: 'center'
            },
            title: {
                fontSize: staticStyles.appHeadingLarge,
                justifyContent: 'center',
                fontWeight: 'bold'
            },
            subtitle: {
                fontSize: staticStyles.appHeadingMedium,
                justifyContent: 'center',
                textAlign: 'center',
            },
            headingContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 24
            }, bannerContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }
        });
    }
}