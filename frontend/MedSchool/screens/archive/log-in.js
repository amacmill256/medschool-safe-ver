import React, { useState } from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Register from './register';
import PasswordReset from './forgot-password';

const LoginScreen = () => {
    const navigation = useNavigation();
    const[state, setState] = useState({
        username: '',
        password: '',
    });


const onPressLogin = () => {
    // is the below line why this hasnt been working?
    fetch('https://example.com/api'), {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            'username': state.username,
            'password': state.password,
        }),
    })  
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error: ', error);
        });
    console.log('Login button pressed');
    console.log('Username:', state.username); 
    console.log('Password:', state.password);
};

const onPressRegister = () => {
    navigation.navigate('Register');
};

const onPressPasswordReset = () =>{
    navigation.navigate('PasswordReset');
};

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Log in</Text>
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
            <TouchableOpacity
                onPress={onPressLogin}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onPressRegister}
                style={styles.registerBtn}>
                <Text style={styles.registerText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onPressPasswordReset}
                style={styles.registerBtn}>
                <Text style={styles.registerText}>Reset Password</Text>
            </TouchableOpacity>

        </View>
    );
}

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

export default LoginScreen;
