import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LOGO_PATH = require('../assets/uofg-logo.png');

const CustomHeader = ({title, navigation, showBackButton}) => {
    return (
        <View style={styles.headerContainer}>
        {showBackButton && (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back-outline" size={24} color="white" />
            </TouchableOpacity>
        )}
        <Image source={LOGO_PATH} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8, 
        backgroundColor: '#003865',
    },
    logo: {
        width: 50, 
        height: 50, 
        margin: 10,
        resizeMode: 'contain',
    },
    backButton: {
        position: 'absolute',
        left: 16,
        padding: 10,
    } ,
    title: {
        color: "white",
        
    },
});

export default CustomHeader;
