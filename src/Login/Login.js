import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { Button, Icon } from "@rneui/themed";
import { color } from "@rneui/themed/dist/config";


export default function Index(props) {
  const [hidePass, setHidePass] = useState(true);
  return (

    <View style={styles.container}>
      <View >
        <Text style={{ fontSize: 40, textAlign: "center", paddingBottom: 40, color: '#fff' }}>Register Now!</Text>
      </View>
      <View style={styles.form}>
        <Icon reverse name="person" size={50} color="#0089e3" />
        <View style={styles.inout}>
          <View style={styles.container_input}>
            <View style={styles.box_input}>
              <Icon style={styles.icon} name="person" color="#0089e3" />
              <TextInput style={styles.input_value} placeholder="User name" />
            </View>

            <View style={styles.box_input}>
              <View style={{
                  flexDirection: 'row'
              }}>
                <Icon style={styles.icon} name="lock" color="#0089e3" />
                <TextInput style={styles.input_value_ps} placeholder="Password"
                  autoCompleteType="password"
                  secureTextEntry={hidePass ? true : false} />

                <Icon style={{marginTop: 25}} name={hidePass ? 'eye-slash' : 'eye'}
                  type="font-awesome-5"
                  size={15}
                  color="#000"
                  onPress={() => setHidePass(!hidePass)}

                />

              </View>

            </View>

            <View style={{ marginTop: 20 }}>
              <Button
                title="Log in"
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
                  width: 340,
                  marginVertical: 10,
                }}
                onPress={props.login}
              />

              <Button
                title="Sign up"
                loading={false}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                  backgroundColor: "#019386",
                  borderRadius: 10,
                }}
                titleStyle={{ fontWeight: "bold", fontSize: 23 }}
                containerStyle={{
                  marginHorizontal: 50,
                  height: 50,
                  width: 340,
                  marginVertical: 10,
                }}
              // onPress={() =>
              />
            </View>

            <View >
              <View>
                <Text style={{ textAlign: 'center', paddingTop: 10 }}>Or Sign Up Using</Text>
              </View>
              <View style={styles.icon_ftg} >
                <Icon name="facebook" type="font-awesome-5" size={40} color='#3f5993' />
                <Icon name="twitter" type="font-awesome-5" size={40} color='#49a1ed' />
                <Icon name="google-plus" type="font-awesome-5" size={40} color='#d4503d' />
              </View>

            </View>

          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#019386",
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
    height: "70%",
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
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
    
  },

  box: {
    width: 100,
    height: 100,

    marginTop: 50,

    backgroundColor: "deepskyblue",
    alignSelf: "center",
  },
});