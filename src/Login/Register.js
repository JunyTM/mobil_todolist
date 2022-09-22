import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput ,Alert} from "react-native";
import { CheckBox, Button } from "@rneui/themed";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Firebase/FirebaseConfig.js"

export default function Register() {
    const [check1, setCheck1] = useState(false);
    
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConfirmation,setPasswordConfirmation] = useState('')

   
    const handleRegister =()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then(
            Alert.alert("ok em")
          )
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <Text style={{ color: '#000', fontSize: 30 }}>Wellcome SignUp</Text>
                        <Text style={{ color: '#000', fontSize: 15, paddingBottom: 10, borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#ccc' }}>
                            Please fill in this form to create an account!
                        </Text>
                    </View>
                    <View style={styles.box_form1}>
                        <TextInput style={styles.value_input1} name='FirstName' placeholder="First Name" 
                        selectionColor="#000" onChangeText={(text)=>setFirstName(text)} value={firstName}/>
                        <TextInput style={styles.value_input1} name='LastName' placeholder="Last Name" 
                        selectionColor="#000" onChangeText={(text)=>setLastName(text)} value={lastName}/>
                    </View>

                    <View style={styles.box_form2}>
                        <TextInput style={styles.value_input2} autoCompleteType='email' name='email' placeholder="Email" selectionColor="#000"
                            autoCorrect={false}  onChangeText={(text)=>setEmail(text)} value={email}
                            autoCapitalize="none"

                           
                        />
                        <TextInput style={styles.value_input2} secureTextEntry={true} name='password' 
                        placeholder="Password" selectionColor="#000" onChangeText={(text)=>setPassword(text)} value={password}/>
                        <TextInput style={styles.value_input2} secureTextEntry={true} name='confirm_password' 
                        placeholder="Confirm Password" selectionColor="#000" onChangeText={(text)=>setPasswordConfirmation(text)} value={passwordConfirmation}/>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            title="I accept the Terms of Use & Privacy Policy."
                            checked={check1}
                            onPress={() => setCheck1(!check1)}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button
                            disabled={!check1}
                            title="Sign up"
                            loading={false}
                            loadingProps={{ size: "small", color: "white" }}
                            buttonStyle={{
                                backgroundColor: "#019386",
                                borderRadius: 10
                            }}
                            titleStyle={{ fontWeight: "bold", fontSize: 23 }}
                            containerStyle={{
                                marginHorizontal: 50,
                                height: 50,
                                width: 200,
                                marginVertical: 10,
                            }}
                           onPress={()=>handleRegister()}
                        />
                        
                    </View>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 15,
        paddingTop: 40
    },

    box_form1: {
        paddingTop: 40,
        flexDirection: 'row',
    },

    box_form2: {

    },

    value_input1: {
        backgroundColor: '#f2f2f2',
        borderStyle: 'solid',
        width: 150, height: 40,
        borderRadius: 5,
        paddingLeft: 5,
        marginLeft: 17
    },

    value_input2: {
        backgroundColor: '#f2f2f2',
        borderStyle: 'solid',
        width: '90%', height: 40,
        borderRadius: 5,
        paddingLeft: 5,
        margin: 15,
    },

});