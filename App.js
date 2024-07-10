import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text, Pressable, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';



import FavoritesContextProvider from './store/context/favorites-context';
import CategoresScreen  from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealScreen from './screens/MealScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return(
    <Drawer.Navigator 
    initialRouteName={"DrawerNavigator"} 
    screenOptions={{
        drawerStyle:{
          backgroundColor:'#cfab8d',
        }
      
        
    }}
    >
      <Drawer.Screen name="Categories" component={CategoresScreen} options={{
        headerTintColor:'white',
        headerStyle:{backgroundColor:headerColor},
        sceneContainerStyle:{backgroundColor:backgroundColor},
      }}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        backgroundColor:'blue',
        headerTintColor:'white',
        headerStyle:{backgroundColor:headerColor},
        contentStyle:{backgroundColor:backgroundColor},
      }}/>
    </Drawer.Navigator>
  )
}

export default function App() {

  
  return (
<>
  <StatusBar style='light'/>    
    
  <FavoritesContextProvider>

    <NavigationContainer>

          <Stack.Navigator 
            initialRouteName={[headerColor='#562f11',backgroundColor='#5a412e']}>  

            <Stack.Screen name="mealsCategories" component={DrawerNavigator} options={{
              title:'Meals Categories',
              headerShown: false,
              }}/>
            <Stack.Screen name="mealsOverview" component={MealsOverViewScreen} options={{
              headerTintColor:'white',
              headerStyle:{backgroundColor:headerColor},
              contentStyle:{backgroundColor:backgroundColor},
              }}/>
            <Stack.Screen name="meal Screen" component={MealScreen} options={{
              headerTintColor:'white',
              headerStyle:{backgroundColor:headerColor},
              contentStyle:{backgroundColor:backgroundColor},
              }}/>

          </Stack.Navigator>
            
    </NavigationContainer>
  </FavoritesContextProvider>
                
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
