import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";


function renderCategoryItem(item){
    return;
}


function CategoresScreen(){

 return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} />
 
 
}

export default CategoresScreen;