import { AntDesign } from '@expo/vector-icons';
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../themes/styles';


export default function Header({ onPress }) {
    return (
        <ScrollView>
            <View style={styles.header}>
            <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={styles.header.button}
                        onPress={onPress}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.header.headerTitle}>Pirate's Stretwear</Text>
                </View>
            </View>
        </ScrollView>
    )
}