import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoresScreen({navigation}){
    
    function renderCategoryItem(itemData){
        
        function pressHandler(){

            navigation.navigate("mealsOverview",{
                category:itemData.item,
            });
            }
        
        return( 
            <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onPress={pressHandler}
            />
        );
    }
    
 return (
    <FlatList 
    data={CATEGORIES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderCategoryItem}
    numColumns={2}
    />
 );
 
}

export default CategoresScreen;