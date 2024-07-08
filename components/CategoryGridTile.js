import {Text, Pressable, View,StyleSheet, Platform } from "react-native";

function CategoryGridTile({title,color, onPress}){
    
    
    
    return(
        <View style={styles.gridItems }>
            <Pressable
            android_ripple={{color : '#red'}}  
            style={({pressed}) => [
                styles.pressStyle, 
                pressed? styles.whenPressed:null
            ]}
            onPress={onPress}
            >
        
                <View   style={[styles.innerCootainer, {backgroundColor: color}]}>
                    <Text style={styles.textStyle}  >{title}</Text>
                </View >
            </Pressable>
        </View>
    );
}


export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItems:{
        flex:1,
        margin:16,
        height:100,
        elevation:12,
        borderRadius:10,
        overflow:Platform.OS ==='android'?  'hidden':'visible',
    },
    
    innerCootainer:{
        flex:1,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',   
    }, 
    pressStyle:{
        flex:1,
    },
    whenPressed:{
        opacity:0.5,
    },
    textStyle:{
        
        fontSize:15,
        fontWeight:'bold',
    },
    control:{
        borderWidth:2,
    }

})