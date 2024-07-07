import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoresScreen  from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';

const Stack = createNativeStackNavigator();

/* 
*/

export default function App() {
  return (
<>

  <StatusBar style='dark'/>    
  
  <NavigationContainer>
        
        <Stack.Navigator> 
        
          <Stack.Screen name="mealsCategories" component={CategoresScreen}/>
          <Stack.Screen name="mealsOverview" component={MealsOverViewScreen}/>
        
        </Stack.Navigator>
  </NavigationContainer>

</>

  );
}

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    borderWidth:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:100,
    width:100,
    elevation:1,
    borderRadius:9,
  },
});

