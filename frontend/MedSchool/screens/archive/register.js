import React, { useState } from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import LoginScreen from './log-in';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
    const[state, setState] = useState({
        username: '',
        password: '',
        conf_password: '',
    })

    const onPressLogin = () => { 
        console.log("login button pressed");
        navigation.navigate('Login');   
    };

    const onPressRegister = () => {
        // register logic here
        console.log("register button pressed");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sign up</Text>
            <TextInput
                style={styles.textBox}
                placeholder="Email"
                onChangeText={text => setState({ ...state, username: text })}
            />
            <TextInput
                secureTextEntry
                style={styles.textBox}
                placeholder="Password"
                onChangeText={text => setState({ ...state, password: text })}
            />
            <TextInput
                secureTextEntry
                style={styles.textBox}
                placeholder="Confirm password"
                onChangeText={text => setState({ ...state, conf_password: text })}
            />

            <TouchableOpacity
                onPress={onPressRegister}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onPressLogin}
                style={styles.registerBtn}>
                <Text style={styles.registerText}>Log in</Text>
            </TouchableOpacity>
            
         
        </View>
    ); 

};

const styles = StyleSheet.create({
    loginBtn: {
        width: "80%",
        backgroundColor:'#003869',
        borderRadius:10,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginTop:40,
        marginBottom:10
    },

    textBox: {
        borderColor: '#D3D3D3',
        borderWidth: 0.75,
        width: '80%',
        height:40,
        marginBottom: 10,
        borderRadius: 5,
    },

    loginText: {
        color:'#FFFFFF'
    },

    registerBtn: {
        width: "80%",
        alignItems:"center",
        justifyContent: "center",
        marginTop:10,
        marginBottom:10
    },

    registerText: {
        textDecorationLine: 'underline',
    },

    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        marginBottom: 20,

    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:150,
    }


})

export default Register;