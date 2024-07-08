import {Text, View, Pressable, StyleSheet,ImageBackground } from "react-native";

function MealItem({theMeal, onPress}){
    
    return (
    <View style={styles.outterContainer} >
        <Pressable
        android_ripple={{color : '#ccc'}}  
        style={({pressed}) => [
             
            pressed? {opacity:0.75}:null
        ]}
        onPress={onPress} 
        >
            <View >
                <ImageBackground source={{uri:theMeal.imageUrl} }style={styles.imageStyle}>

                    <Text style={styles.titleStyle} >{theMeal.title}</Text>

                </ImageBackground>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTextStyle}> Duration: {theMeal.duration}m     Complexity: {theMeal.complexity}</Text>
                    <Text style={styles.infoTextStyle}>Price: {theMeal.affordability}</Text>
                </View>
            </View>
        </Pressable>
    </View>)
}

export default MealItem;

const styles = StyleSheet.create({
    
    control1:{
        borderWidth:1,
        borderColor:'red',
    },
    
    outterContainer:{
        margin:5,
        overflow:'hidden',
        borderRadius:15,
        elevation:10,
    },

    imageStyle:{
        width:'100%',
        height:200,
    },
    
    titleStyle:{
        fontWeight:'bold',
        textAlign:'left',
        paddingLeft:5,
        fontSize:18,
        backgroundColor: 'rgba(255, 255, 255, 0.639)',
        
    },

    infoContainer:{
        paddingVertical:10,
        backgroundColor:'white',          
    },
    
    infoTextStyle:{
        textAlign:'center',
        fontWeight:'bold',
    },
})