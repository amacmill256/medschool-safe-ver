import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

const Deadline = () => {
    return(
        <View style={styles.deadlineContainer}>
            <View style={styles.deadlineDate}>
                <Text style={{textAlign: "center", color: "white"}}>Due</Text>
                <Text style={styles.dateText}>16/03</Text>
            </View>
            <View style={{justifyContent: "center"}}>
                <Text style={styles.taskDescription}>Task Description</Text>
            </View>
        </View>
    )
};

const Deadlines = () => {
    return (
        <View>
            <ScrollView>
                <Deadline/>
                <Deadline/>
                <Deadline/>
            </ScrollView>
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

    deadlineContainer: {
        backgroundColor: "#B30C00",
        flexDirection: "row",
        margin: 16,
        padding: 16,
        borderRadius: 4,
    },

    deadlineDate: {
        padding: 20,
    },

    dateText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
    },
    taskDescription: {
        color: "white",
        fontSize: 14,
    }


})

export default Deadlines;