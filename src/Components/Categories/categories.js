import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import CategoriesStyle from './Categories-Style/categories-styles';

const Categories = () => {

    return (
        <View>
            <View style={CategoriesStyle.Header} >
                <Text style={CategoriesStyle.CategoriesText}> Categories </Text>
                <Text style={CategoriesStyle.CategoriesSeeAll}> See all </Text>
            </View>
            <View style={CategoriesStyle.CategoriesButtonBox}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity>
                        <View style={CategoriesStyle.CategoriesButtonActive}>
                            <Text style={{ color: 'white' }}>All</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View >
                            <Text style={CategoriesStyle.CategoriesButton} >Business</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View >
                            <Text style={CategoriesStyle.CategoriesButton}>Trading</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View >
                            <Text style={CategoriesStyle.CategoriesButton}>Design</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text style={CategoriesStyle.CategoriesButton}>B-Trends</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View >
                            <Text style={CategoriesStyle.CategoriesButton}>Home Design</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

            </View>

        </View>
    )

}

export default Categories