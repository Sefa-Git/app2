import { View,Text,StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import React, { useEffect } from 'react';

function MealsOverViewScreen({navigation,route}){// route.params.category, carries CATEGORY  object
    
    const currentCategory = route.params.category;
    
    const catId = currentCategory.id;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    }); 

    function renderMealItem(itemData){ // renders Items in its return

        function pressHandler(){ //navigates to screen for pressed item 
            navigation.navigate("meal Screen",{
                item : itemData.item,
                });
        }

        return <MealItem theMeal={itemData.item}  onPress={pressHandler}/>;
    }

    useEffect(() => {     // sets current screens title name
        navigation.setOptions({
            title:`${currentCategory.title}`,            
        })
            
        
    }, []);
    
    return(
        <View style={styles.container}>
            
            <FlatList 
            data={displayedMeals} 
            keyExtractor={(item=>item.id)}
            renderItem={renderMealItem}            
            ></FlatList>
        </View>
    );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});