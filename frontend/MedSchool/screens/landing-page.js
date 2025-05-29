import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Home = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;
  const tileWidth = (screenWidth - 30) / 2; // Calculate the tile width based on screen width
  // const navigation = useNavigation(); // navigator

  const onPressContacts = () => {
    navigation.navigate('Contacts');
  };

  const onPressGlossary = () => {
    navigation.navigate('Glossary');
  }

  const onPressToDo = () => {
    navigation.navigate('To Do');
  }

  const onPressKeyDates = () => {
    navigation.navigate('KeyDates');
  }

  const onPressResources = () => {
    navigation.navigate('Resources');
  }

  const onPressStudentLife = () => {
    navigation.navigate('Student Life');
  }


  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.tilesContainer}> 
          <TouchableOpacity
            style={[styles.tile, { width: tileWidth, height: tileWidth }]}
            onPress={onPressContacts}>
            <MaterialIcons name="contact-page" size={48} color="white" />
            <Text style={styles.tileText}>Useful Contacts</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tile, { width: tileWidth, height: tileWidth }]}
            onPress={onPressGlossary}>
            <Entypo name="open-book" size={48} color="white" />
            <Text style={styles.tileText} >Glossary</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tile, { width: tileWidth, height: tileWidth }]}
            onPress={onPressKeyDates}>
            <Entypo name="calendar" size={48} color="white" />
            <Text style={styles.tileText} >Key Dates</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tile, { width: tileWidth, height: tileWidth }]}
            onPress={onPressToDo}>
            <Entypo name="documents" size={48} color="white" />
            <Text style={styles.tileText}>To Do</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tile, { width: tileWidth, height: tileWidth }]}
            onPress={onPressStudentLife}>
            <MaterialIcons name="groups" size={48} color="white" />
            <Text style={styles.tileText} >Student Life</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tile, { width: tileWidth, height: tileWidth }]}
            onPress={onPressResources}>
            <AntDesign name="book" size={48} color="white" />
            <Text style={styles.tileText} >Recommended Resources</Text>
          </TouchableOpacity>
        </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
  },
  tileText:{
    color: 'white',
    padding: 8
  },
  header: {
    backgroundColor: '#003865',
    paddingTop: 0,
    padding: 15,
    justifyContent: 'flex-start',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  tile: {
    width: '48%',
    height: 100,
    backgroundColor: '#003865',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 5,
  },
});

export default Home;
