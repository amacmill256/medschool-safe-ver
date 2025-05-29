import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import LoadingAnimation from '../components/loading-animation';
import { API_BASE_URL } from '../constants';
import useFetchData from '../hooks/useFetchData';
const BASE_URL = API_BASE_URL + 'todo/';

const ListItem = ({task}) => {
    const [completed, setCompleted] = useState(false);
  
    const toggleCompleted = () => {
      setCompleted(!completed);
    };

    return (

        <View style={styles.item}>   
            <Text style={[styles.itemText, completed && styles.completedText]}>{task}</Text>
            <TouchableOpacity style={styles.checkbox} onPress={toggleCompleted}>
                {completed && <View style={styles.checked} />}
            </TouchableOpacity>      
      </View>
    );
  };
  

const ToDoList = () => {
    const {data, loading} = useFetchData(BASE_URL);
    if (loading) {
        return <LoadingAnimation/>;
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.toDoList}>
                        <Text style={styles.screenInfoText}>Things to do</Text>
                        {data.map((todo, index)=> 
                            <View key={index}>
                                <ListItem task={todo.list_item}/>
                            </View>
                        )}
                    </View>
                    </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    screenInfoText: {
        fontSize: 18,
        padding: 16,

    },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    item: {
        backgroundColor: '#7D2239',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin:16,
    },
    checkbox: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: 'white',
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checked: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: 'white',
    },
    itemText: {
      fontSize: 16,
      color: 'white',
      padding: 16,
      flex: 1,
    },
    completedText: {
      textDecorationLine: 'line-through',
    },
  });

export default ToDoList;