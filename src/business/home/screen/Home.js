import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import CustomButton from '../../../core/component/CustomButton/CustomButton';
import MultipleSelector from '../../../core/component/MultipleSelect/MultipleSelector';
import HomeStyles from './HomeStyles';
import { useSelector, useDispatch } from 'react-redux';
// import { setselectedTravelCategories } from '../slice/homeSlice'
import { HttpUtils } from '../../../core/util/HttpUtils';
import * as staticStyles from '../../../core/util/ColorUtil';
import { BarIndicator } from 'react-native-indicators';
import LabelWithIcon from '../../../core/component/LabelWithIcon/LabelWithIcon';

let styles = HomeStyles.getStyles();
let selector, navigate;

let Home = ({ navigation }) => {

    navigate = navigation;
    // selector = useSelector((state) => state.homeReducer);

    const [isLoading, setIsLoading] = React.useState(true);
    const [result, setResult] = React.useState({});
    const [isLessThanThreeSelected, setIsLessThanThreeSelected] = React.useState(true);

    React.useEffect(() => {
        loadAppMenu();
    }, []);

    React.useEffect(() => {
        if (result.length !== 0) {
            setIsLoading(false)
        }
    }, [result]);

    React.useEffect(() => {
        // if (selector.selectedTravelCategories.length >= 3) {
        //     setIsLessThanThreeSelected(false);
        // } else {
        //     setIsLessThanThreeSelected(true);
        // }
    });

    function loadAppMenu() {
        setIsLoading(true)
        new HttpUtils().postRequest('getAppMenu', {}).then((result) => setResult(getFormattedResult(result.data))).catch((error) => {
            console.log('error', error);
        });
    }

    function onPress() {
        navigate.navigate('SelectCategory')
    }

    function getFormattedResult(resultsArray) {
        return resultsArray.map(result => {
            return {
                title: result.title,
                icon: result.icon,
                isDisabled: result.isDisabled,
                isHidden: result.isHidden,
                rank: 0
            }
        })
    }

    return (
        <SafeAreaView style={styles.MainContainer}>
            {isLoading ? <BarIndicator color={staticStyles.appPrimayColor} /> :
                <View style={styles.UIContainer}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.Title}>Home Here</Text>
                    </View>
                    <View style={styles.SelectionContainer}>
                        <MultipleSelector items={result}></MultipleSelector>
                    </View>
                    <View style={styles.ButtonContainer}>
                        {/* <CustomButton label={'Next'} isDisabled={isLessThanThreeSelected} onPress={onPress.bind(this)}></CustomButton> */}
                        <CustomButton label={'Next'} isDisabled={false} onPress={onPress.bind(this)}></CustomButton>
                    </View>
                </View>
            }
        </SafeAreaView>

    );

}

export default Home;