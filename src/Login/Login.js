import { View, Text, StyleSheet, TextInput ,Alert} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { Button, Icon } from "@rneui/themed";
import { color } from "@rneui/themed/dist/config";
import {auth} from '../Firebase/FirebaseConfig.js'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function Index(props) {
    const [hidePass, setHidePass] = useState(true);

    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('')

    const handleLogin = ()=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            props.login(user.displayName)
            // ...
          })
          .catch((error) => {
            if(auth/network-request-failed){
                Alert.alert("Mạng kết nối không ổn định !")
            }
            Alert.alert("Sai tài khoản hoặc mật khẩu !")
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
          });
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Icon reverse name="person" size={50} color="#0089e3" />
                <View style={styles.container_input}>
                    <View style={styles.box_input}>
                        <Icon style={styles.icon} name="person" color="#0089e3" />
                        <TextInput style={styles.input_value} name="email" placeholder="Email" onChangeText={text=>setEmail(text)} value={email} />
                    </View>
                    <View style={styles.box_input}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Icon style={styles.icon} name="lock" color="#0089e3" />
                            <TextInput style={styles.input_value_ps} placeholder="Mật khẩu"
                                autoCompleteType="password"
                                secureTextEntry={hidePass ? true : false}
                                onChangeText={text=>setPassword(text)} value={password}
                                />
                            <Icon style={{ marginTop: 25 }} name={hidePass ? 'eye-slash' : 'eye'}
                                type="font-awesome-5"
                                size={15}
                                color="#000"
                                onPress={() => setHidePass(!hidePass)}
                            />
                        </View>

                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Đăng nhập"
                            loading={false}
                            loadingProps={{ size: "small", color: "white" }}
                            buttonStyle={{
                                backgroundColor: "#54dd76",
                                borderRadius: 10
                            }}
                            titleStyle={{ fontWeight: "bold", fontSize: 23 }}
                            containerStyle={{
                                marginHorizontal: 50,
                                height: 50,
                                width: 340,
                                marginVertical: 10,
                            }}
                            onPress={handleLogin}
                        />

                        <Button
                            title="Tạo tài khoản"
                            loading={false}
                            loadingProps={{ size: "small", color: "white" }}
                            buttonStyle={{
                                backgroundColor: "#54dd76",
                                borderRadius: 10,
                            }}
                            titleStyle={{ fontWeight: "bold", fontSize: 23 }}
                            containerStyle={{
                                marginHorizontal: 50,
                                height: 50,
                                width: 340,
                                marginVertical: 10,
                            }}
                        onPress={() =>props.register()}
                        />
                    </View>

                    <View >
                        <View>
                            <Text style={{ textAlign: 'center', paddingTop: 10 }}>Hoặc đăng nhập bằng</Text>
                        </View>
                        <View style={styles.icon_ftg} >
                            <Icon style={styles.icon_ftg} name="facebook" type="font-awesome-5" size={40} color='#3f5993' />
                            <Icon style={styles.icon_ftg} name="twitter" type="font-awesome-5" size={40} color='#49a1ed' />
                            <Icon style={styles.icon_ftg}name="google-plus" type="font-awesome-5" size={40} color='#d4503d' />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#54dd76",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
    },

    baseText: {
        fontWeight: "bold",
        fontSize: 40,
        textAlign: "center",
        justifyContent: "center",
    },

    form: {
        backgroundColor: "#fff",
        width: "100%",
        maxWidth: 700,
        height: "90%",
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        marginTop: 20,
        marginRight: 0,
        width: 30,
    },

    container_input: {
        alignItems: "center",
    },

    box_input: {
        flexDirection: "row",
        height: 50,
        borderBottomWidth: 1,
        width: 340,
    },

    input: {
        height: 50,
        margin: 12,
        padding: 10,
    },

    input_value: {
        marginTop: 20,
        marginRight: 0,
        width: 320,

    },

    input_value_ps: {
        marginTop: 20,
        marginRight: 0,
        width: 290,

    },

    headings: {
        fontSize: 20,
        fontWeight: "bold",

        color: "mediumslateblue",

        textAlign: "center",
        justifyContent: "center",
    },

    icon_ftg: {
        margin:10,
        padding:10,
        flexDirection: 'row',

    },
   
});