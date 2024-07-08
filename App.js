import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoresScreen  from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealScreen from './screens/MealScreen';


const Stack = createNativeStackNavigator();

/* 
*/

export default function App() {

  
  return (
<>
  <StatusBar style='light'/>    
  
  <NavigationContainer>
        
        <Stack.Navigator initialRouteName={[headerColor='#562f11',backgroundColor='#5a412e']}>  
        
          <Stack.Screen name="mealsCategories" component={CategoresScreen} options={{
            title:'Meals Categories',
            headerTintColor:'white',
            headerStyle:{backgroundColor:headerColor},
            contentStyle:{backgroundColor:backgroundColor}
            }}/>
          <Stack.Screen name="mealsOverview" component={MealsOverViewScreen} options={{
            headerTintColor:'white',
            headerStyle:{backgroundColor:headerColor},
            contentStyle:{backgroundColor:backgroundColor}}}/>
          <Stack.Screen name="meal Screen" component={MealScreen} options={{
            headerTintColor:'white',
            headerStyle:{backgroundColor:headerColor},
            contentStyle:{backgroundColor:backgroundColor}}}/>
        
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
