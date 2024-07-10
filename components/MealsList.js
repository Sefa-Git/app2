import { FlatList,View,StyleSheet } from "react-native"

import MealItem from "./MealItem";

function MealsList({navigation, items}){

    function renderMealItem(itemData){ // renders Items in its return

        function pressHandler(){ //navigates to screen for pressed item 
            navigation.navigate("meal Screen",{
                item : itemData.item,
                });
        }

        return <MealItem theMeal={itemData.item}  onPress={pressHandler}/>;
    }

    return(
        
        <View style={styles.container}>
            
            <FlatList 
            data={items} 
            keyExtractor={(item=>item.id)}
            renderItem={renderMealItem}            
            ></FlatList>
        </View>
    )
}

export default MealsList;  


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});