import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './App/Screen/Home';
import Categorytextslider from './App/Component/Home/Categorytextslider';
import { NavigationContainer } from '@react-navigation/native';
import Homenavigator from './App/Navigations/Homenavigator';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Homenavigator />
      </NavigationContainer>
{  /* <Home /> */ }   
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    fontSize:50,
    color:'red',
    paddingTop:20,
    padding: 20,
  },
});
