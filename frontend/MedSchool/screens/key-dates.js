import {StyleSheet, View, Text, ScrollView} from 'react-native';
import LoadingAnimation from '../components/loading-animation';
import { API_BASE_URL } from '../constants';
import useFetchData from '../hooks/useFetchData';
const BASE_URL = API_BASE_URL +'key-dates/';

const DateItem = ({date, item_description}) => {
    const [year, month, day] = date.split('-');
    // compare to current date, if it has passed do not display
    return(
        <View style={styles.deadlineContainer}>
            <View style={styles.deadlineDate}>
                <Text style={styles.dateText}>{day}/{month}</Text>
            </View>
            <View style={{justifyContent: "center"}}>
                <Text style={styles.taskDescription}>{item_description}</Text>
            </View>
        </View>
    )
};

const KeyDates = () => {
    const {data, loading} = useFetchData(BASE_URL);
    if (loading) {
        return <LoadingAnimation/>;
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {data.map((date, index)=>
                    <View key={index}>
                        <DateItem date={date.date} item_description={date.item_description}/>  
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container :{ backgroundColor: "white",},
    sectionHeader: {
        fontSize: 20,
        marginTop : 20,
        marginBottom: 16,
        color: 'white',
        fontWeight: "bold",
    },

    deadlineContainer: {
        backgroundColor: "#5B4D94",
        // borderColor: "#B30C00",
        flexDirection: "row",
        margin: 8,
        borderRadius: 4,
        flex: 1,
    },

    deadlineDate: {
        padding: 20,
    },

    dateText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    taskDescription: {
        color: "white",
        fontSize: 16,
        padding:16,
        flex: 1,
        flexWrap: "wrap",
        textAlign: "center",
    },


})

export default KeyDates;