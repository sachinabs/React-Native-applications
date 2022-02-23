import { View, Text, Image,ScrollView } from 'react-native';
import PopularStyle from './Popular-Styles/popular-style';
const Popular = () => {
    return (
        <View>
            <View style={PopularStyle.Header} >
                <Text style={PopularStyle.PopularText}> Popular </Text>
            </View>
            <ScrollView style={PopularStyle.Scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={PopularStyle.PopularContainer}>
                <View style={PopularStyle.PopularItem}>
                    <Image style={PopularStyle.PopularImage} source={require('.././../assets/shop1.jpg')} />
                    <Text style={PopularStyle.PopularTitle}> Minimal Summer Jeans </Text>
                    <Text style={PopularStyle.PopularPrice}> $100.00 </Text>
                </View>
                <View style={PopularStyle.PopularItem}>
                    <Image style={PopularStyle.PopularImage} source={require('.././../assets/shop2.jpg')} />
                    <Text style={PopularStyle.PopularTitle}> Minimal Summer Jeans </Text>
                    <Text style={PopularStyle.PopularPrice}> $100.00 </Text>
                </View>
                <View style={PopularStyle.PopularItem}>
                    <Image style={PopularStyle.PopularImage} source={require('.././../assets/shop3.jpg')} />
                    <Text style={PopularStyle.PopularTitle}> Minimal Summer Jeans </Text>
                    <Text style={PopularStyle.PopularPrice}> $100.00 </Text>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default Popular;