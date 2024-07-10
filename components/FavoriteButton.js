import {StyleSheet, Pressable, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';

function FavoriteButton({isFavorite, onPress}){

    

    return(
        <Pressable 
        onPress={onPress}>
            
            <View>
                <FontAwesome name={ isFavorite? "star":"star-o"} size={36} color='#ffffff' />
            </View>
        </Pressable>

    )

}

export default FavoriteButton;

const styles = StyleSheet.create({
    pressStyle:{
        opacity:0.5,
    },
    notPressed:{
        opacity:1,
    }
})
