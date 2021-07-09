import React, { useEffect } from 'react'
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Button, Image } from 'react-native'
import { Input } from 'react-native-elements';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                navigation.replace("Home");
            }
        })

        return unsubscribe;
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error))
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",

            }}
            style={{ width: 200, height: 200 }} />
            <View style={styles.inputContainer}>
                <Input 
                  placeholder="Email" 
                  autoFocus 
                  type="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)} 
                />
                <Input 
                  placeholder="Password" 
                  secureTextEntry 
                  type="password"
                  value={password}
                  onChangeText={(text) => setPassword(text)} 
                  onSubmitEditing={signIn}
                />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button 
            onPress={() => navigation.navigate("Register")}
            containerStyle={styles.button} type="outline" title="Register" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 300,
        marginTop: 20,
    }
  });
  

export default LoginScreen
