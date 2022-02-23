import react from 'react';
import { View, Text, Image } from 'react-native';
import BannerStyle from './Banner-Styles/banner-styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Banner = () => {
    return (
        <View style={BannerStyle.BannerDiv}>
            <Image source={require('../../assets/girl.jpg')} style={BannerStyle.BannerImage} />
            <View style={BannerStyle.BannerMessage}>
                <View style={BannerStyle.BannerTextBox}>
                    <Text style={BannerStyle.BannerTextTitle}> Women's </Text>
                    <Text style={BannerStyle.BannerTextMessage}>Jeans & jackets</Text>
                </View>
                <View style={BannerStyle.BannerIconBox}>
                    <Ionicons name="remove-outline" color="black" size={20} />
                </View>
            </View>
        </View>

    )
}

export default Banner;
