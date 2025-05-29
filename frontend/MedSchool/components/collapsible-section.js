import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

const CollapsibleSection = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <View style={styles.sectionContainer}>
            <TouchableOpacity onPress={toggleCollapsed}>
                <Text style={styles.sectionHeader}>{title}</Text>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                {children}
            </Collapsible>
        </View>
    );
};

const styles = StyleSheet.create({


    sectionHeader: {
        fontSize: 20,
        marginTop : 20,
        marginBottom: 16,
        color: 'white',
        fontWeight: "bold",
    },

    sectionContainer: {
        margin: 8,
        padding:16,
        backgroundColor: '#003865',
        borderRadius: 4,
    },

})

export default CollapsibleSection;
