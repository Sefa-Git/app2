import { useRoute } from "@react-navigation/native";
import { View,Text,StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import tinycolor from "tinycolor2";

function MealsOverViewScreen({route}){
    
    const makeTransparent = (color, alpha) => {  // makes the  input color little transparant
        const colorObj = tinycolor(color);
        colorObj.setAlpha(alpha);
        return colorObj.toRgbString();
    };

    const catId = route.params.categoryId;
    const backgroundColor = makeTransparent(route.params.buttonColor,0.4)
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    }); 

    function renderMealIten(itemData){
        return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} theMeal={itemData.item} />;
    }

    return(
        <View style={styles.container} backgroundColor={backgroundColor}>
            
            <FlatList 
            data={displayedMeals} 
            keyExtractor={(item=>item.id)}
            renderItem={renderMealIten}            
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