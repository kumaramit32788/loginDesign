//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Project</Text>
      <View style={{ paddingTop: 10 }}>
        <TextInput style={styles.TextInput}
          placeholder={"Email ID"}
          placeholderTextColor="black" />
      </View>
      <View style={{ paddingTop: 10 }}>
        <TextInput style={styles.TextInput}
          placeholder={"PASSWORD"}
          placeholderTextColor='black' />
      </View>
      <TouchableOpacity onPress={() => alert("wait")}>
        <Text style={styles.ButtonStyl}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: 'black' }}>Create a new account ! SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",

  },
  TextInput: {
    height: 50,
    width: "90%",
    borderRadius: 20,
    backgroundColor: "white",
    marginStart: 15,
    paddingStart: 15,
    borderWidth: 2,
    textAlign: "center",
    color: 'blue',
    borderColor: 'blue'

  },
  ButtonStyl: {
    width: "90%",
    height: 50,
    margin: 15,
    borderRadius: 20,
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    paddingTop: 10,
    marginTop: 20
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'blue',
    marginBottom: 100,

  }
});

//make this component available to the app
export default LoginPage;
