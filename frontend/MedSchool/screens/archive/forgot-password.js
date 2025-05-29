import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import LoginScreen from './log-in';
import { useNavigation } from '@react-navigation/native';

const PasswordReset = () => {
    const navigation = useNavigation();
    const[state, setState] = useState({
        username: '',
    })

    const onPressLogin = () => {
        console.log("login button pressed")
        navigation.navigate('Login');
    };

    const onPressResetPassword = () => {
        // reset password logic here
        console.log("reset button pressed");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Forgot password</Text>
            <TextInput
                style={styles.textBox}
                placeholder='Email'
                onChangeText={text=>setState({...state, username: text})}
            />
    
            <TouchableOpacity
                onPress={onPressResetPassword}
                style={styles.resetButton}>
                <Text style={styles.resetText}>Reset password</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={onPressLogin}
                style={styles.loginBtn}>
                <Text style={{textDecorationLine: 'underline'}}>Log in</Text>
            </TouchableOpacity>

        </View>
    );
}

    const styles = StyleSheet.create({
        resetButton: {
            width: "80%",
            backgroundColor:'#003869',
            borderRadius:10,
            height:50,
            alignItems:"center",
            justifyContent: "center",
            marginTop:20,
            marginBottom:10
        },

        resetText: {
            color:'white',
        },

        container: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 150,
        },

        heading: {
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            marginBottom: 20,
        },
          
        textBox: {
            borderColor: '#D3D3D3',
            borderWidth: 0.75,
            width: '80%',
            height:40,
            marginBottom: 10,
            borderRadius: 5,
        },
    })
    
export default PasswordReset;