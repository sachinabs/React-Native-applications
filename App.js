import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './src/Components/Banner/banner';
import Categories from './src/Components/Categories/categories';


import Header from './src/Components/Header/header';
import Popular from './src/Components/Popular/popular';
import TitleBar from './src/Components/TitleBar/titleBar';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <TitleBar />
      <Banner/>
      <Categories/>
      <Popular/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
