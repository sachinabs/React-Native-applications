// header component here
import React from 'react';
import { View } from 'react-native';
import HeaderStyles from './Header-Styles/header-style';

import Feather from "react-native-vector-icons/Feather";
const Header = () => {
    return (
        <View style={HeaderStyles.container} >
            <Feather name="menu" color="black" size={20} />
            <Feather name="search" color="black" size={20} />
        </View>
    )
}

export default Header;