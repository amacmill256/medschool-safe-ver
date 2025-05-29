import React, { useState, useEffect } from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingAnimation from '../components/loading-animation';

import GlossaryTerm from '../components/glossary-term';
import { API_BASE_URL } from '../constants';
import useFetchData from '../hooks/useFetchData';
// Constants
const BASE_URL = API_BASE_URL + 'glossary-terms/?section=';

const GlossarySection = ({letter}) => {
    // const {data, loading} = useFetchData({letter})
    const {data, loading} = useFetchData(`${BASE_URL}${letter}`);
    if (loading) {
        return <LoadingAnimation/>;
    }

    return(
        <View>
            <Text style={styles.glossarySectionTitle}>{letter}</Text>
                {data.map((term, index) => (
                    <View key={index}>
                        <GlossaryTerm term={term.term_string}>
                            <Text style={styles.definitionText}>{term.definition}</Text>
                        </GlossaryTerm>
                    </View>
                ))}
        </View>
        

    );
};

const Glossary = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <ScrollView>
                    <View>
                        <Text style={styles.screenInfoText}>This glossary consists of key terms you will encounter as a medical student.</Text>
                    </View>
                    <GlossarySection letter="A"/>
                    <GlossarySection letter="B"/>
                    <GlossarySection letter="C"/>
                    <GlossarySection letter="D"/>
                    <GlossarySection letter="E"/>
                    <GlossarySection letter="F"/>
                    <GlossarySection letter="G"/>
                    <GlossarySection letter="H"/>
                    <GlossarySection letter="I"/>
                    <GlossarySection letter="M"/>
                    <GlossarySection letter="O"/>
                    <GlossarySection letter="P"/>
                    <GlossarySection letter="R"/>
                    <GlossarySection letter="S"/>
                    <GlossarySection letter="T"/>
                    <GlossarySection letter="V"/>
                    <GlossarySection letter="W"/>
               </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    screenInfoText: {
        fontSize: 18,
        padding: 16,
    },

    glossarySectionTitle: {
      fontSize: 30,
      textAlign: "center",  
      padding: 8,
      fontWeight: "bold",
    },

    definitionText: {
        fontSize: 18,
        color: "white",
    },


  });

export default Glossary;