import { View,StyleSheet,ImageBackground, Text, ScrollView, Button,} from "react-native"
import {useContext, useEffect} from "react"

import FavoriteButton from "../components/FavoriteButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealScreen({navigation,route}){ // route hold the MEAL item

    const favoriteMealCts = useContext(FavoritesContext);

    const theMeal = route.params.item; // the selcted MEAL item 
    const backgroundColor = route.params.backgroundColor;
    
    const mealIsFavorite = 
    favoriteMealCts.ids.includes(theMeal.id);

    function changeFavoriteStatusHandler(){
        
        if(mealIsFavorite){        
            favoriteMealCts.removeFavorite(theMeal.id);
        } else{
            favoriteMealCts.addFavorite(theMeal.id);
        }
        
    }
    useEffect(() => {
        
        navigation.setOptions({
            headerRight:(() => 
                <FavoriteButton 
                    isFavorite={mealIsFavorite}
                    onPress={changeFavoriteStatusHandler}> 
                </FavoriteButton>)
        })}, [mealIsFavorite]);

    
    return(
    
        <ScrollView style={styles.mainContainer}>
            <View >
                <ImageBackground source={{uri:theMeal.imageUrl} }style={styles.imageStyle} />
    
                <View>

                    <View style={styles.mealTitleContainer}>
                            <Text style={styles.mealTitleStyle}>{theMeal.title}</Text>
                    </View>

                    <View style={styles.listContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleStyle}>Ingredients</Text>
                            </View>    
                    
                            {theMeal.ingredients.map((ingredient,index) => 
                            <View  style={styles.itemContainer} key={index}>
                            <Text style={styles.textStyles} key={index}> {ingredient}</Text>
                            </View>                                
                            )}
                    </View>
                    
                    <View style={styles.listContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleStyle}>Steps</Text>
                            </View>

                            {theMeal.steps.map((step,index) => 
                                <View style={styles.itemContainer} key={index}>
                                <Text style={styles.textStyles} key={index}> {step}</Text>
                                </View>                                
                            )}                        
                    </View>
                    
                </View>
            </View>
        </ScrollView>
        )
    
    

}

export default MealScreen;


const styles = StyleSheet.create({

    control1:{
        borderWidth:1,
        borderColor:'red',
    },
    control2:{
        borderWidth:1,
        borderColor:'blue',
    },


    mainContainer:{
        flex:1,
    },

    mealTitleContainer:{
        alignItems:'center',
    },

    mealTitleStyle:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        color:'#f5dbc5', 
    },

    imageStyle:{
        width:'100%',
        height:300,
        elevation:10,
    },
    
    
    listContainer:{
        color:'white',                
        margin:5,
        
    },


    titleContainer:{
        borderRadius:5,
        padding:5,
        marginHorizontal:40,
        alignItems:'center',        
        borderBottomColor:'#cb9b73',
        borderBottomWidth:1,
    },
    titleStyle:{
        color:'#dfb390', 
        fontSize:20,
        fontWeight:'bold',
    },

    
    itemContainer:{
        marginVertical:3,
        marginHorizontal:40,
        paddingHorizontal:2,
        borderRadius:5,
        alignItems:'center',     
        backgroundColor: '#cb9b73', 
    },
    textStyles:{
        marginVertical:5,
        color:'white',
        textAlign:'center',
        
    },
})