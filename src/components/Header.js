import { AntDesign } from '@expo/vector-icons';
import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../themes/styles';


export default function Header({onPress}){
    return (
        <View style={styles.AddTenis.header}>
            <TouchableOpacity style={styles.AddTenis.header.button}
                onPress={onPress}>
                <AntDesign name="arrowleft" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.AddTenis.header.headerTitle}>Pirate's Stretwear</Text>
        </View>
    )
}