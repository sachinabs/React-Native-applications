// Title component here
import React from 'react';
import { View, Text} from 'react-native';
import TitleBarStyles from './TitleBar-Styles/titleBar-styles';

import Feather from "react-native-vector-icons/Feather";
const TitleBar = () => {
    return (
        <View>
        <View  style={TitleBarStyles.Header} >
            <Text style={TitleBarStyles.HeaderText}> New Release </Text>
            <Text style={TitleBarStyles.HeaderViewAll}> View all </Text>
        </View>
        <View>
            {/* Display date */}
            <Text style={TitleBarStyles.Date}>
                {new Date().toLocaleDateString()}
            </Text>
        </View>

        </View>
    )
}

export default TitleBar;