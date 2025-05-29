import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

const GlossaryTerm = ({ term, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <View style={styles.sectionContainer}>
            <TouchableOpacity onPress={toggleCollapsed}>
                <Text style={styles.sectionHeader}>{term}</Text>
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
        padding: 16,
        backgroundColor: '#385A4F',
        borderRadius: 4,
    },

})

export default GlossaryTerm;