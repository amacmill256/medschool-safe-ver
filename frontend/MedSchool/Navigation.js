import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './screens/log-in'; 
// import Register from './screens/register';
// import PasswordReset from './screens/forgot-password';
import Home from './screens/landing-page';
import Contacts from './screens/contacts';
import Glossary from './screens/glossary';
// import Deadlines from './screens/deadlines';
import ToDoList from './screens/todo-list';
import KeyDates from './screens/key-dates';
import Resources from './screens/resources';
import StudentBodies from './screens/student-bodies';
import CustomHeader from './components/custom-header';

const Stack = createNativeStackNavigator();

// MyStack component - returns the stack navigator
function MyStack() {
  return(
    // Navigator containing screens
    <Stack.Navigator initialRouteName='Home'>
      {/* <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      <Stack.Screen name="PasswordReset" component={PasswordReset} options={{headerShown: false}}/> */}
      <Stack.Screen name="Home" component={Home} options={{ header: (props) => <CustomHeader {...props} title="Medicine Prepare" showBackButton={false}/> }}/>
      <Stack.Screen name="Glossary" component={Glossary} options={{ header: (props) => <CustomHeader {...props} title="Glossary" showBackButton={true}/> }} />
      <Stack.Screen name="Contacts" component={Contacts} options={{ header: (props) => <CustomHeader {...props} title="Contacts" showBackButton={true} /> }}/>
      <Stack.Screen name="KeyDates" component={KeyDates} options={{ header: (props) => <CustomHeader {...props} title="Key Dates" showBackButton={true}/> }}/>
      <Stack.Screen name="To Do" component={ToDoList} options={{ header: (props) => <CustomHeader {...props} title="To Do" showBackButton={true}/> }}/>
      <Stack.Screen name="Resources" component={Resources} options={{ header: (props) => <CustomHeader {...props} title="Resources" showBackButton={true}/> }}/>
      <Stack.Screen name="Student Life" component={StudentBodies} options={{ header: (props) => <CustomHeader {...props} title="Student Life" showBackButton={true} /> }}/>
    </Stack.Navigator>
  );
}

export default MyStack;
