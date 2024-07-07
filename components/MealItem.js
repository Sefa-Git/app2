import {Text, View, Pressable, StyleSheet,ImageBackground } from "react-native";

function MealItem({title,imageUrl, theMeal}){
    
    return (
    <View style={styles.outterContainer} >
        <Pressable
        android_ripple={{color : '#ccc'}}  
        style={({pressed}) => [
            styles.pressStyle, 
            pressed? styles.whenPressed:null
        ]} 
        onPress ={console.log("pressed")}>
            <View >
                <ImageBackground source={{uri:theMeal.imageUrl} }style={styles.imageStyle}>

                    <Text style={styles.textStyle} >{theMeal.title}</Text>

                </ImageBackground>
            </View>
        </Pressable>
    </View>)
}

export default MealItem;

const styles = StyleSheet.create({
    imageStyle:{
        width:'100%',
        height:200,
    },
    textStyle:{
        fontWeight:'bold',
        textAlign:'left',
        paddingLeft:5,
        fontSize:18,
        backgroundColor: 'rgba(255, 255, 255, 0.639)',
        
    },

    control1:{
        borderWidth:1,
        borderColor:'red',
    },
    outterContainer:{
        margin:5,
        overflow:'hidden',
        borderRadius:15,
    }
})