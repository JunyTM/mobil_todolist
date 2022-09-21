import React from "react";
import {useState} from "react";
import { View, StyleSheet, Alert ,Text, TextInput, ScrollView} from "react-native";
import Todo from "../../Todo"
import { Button,Icon } from "@rneui/themed";
export default function ListTodo(props) {
  
 const [listTodo,setListTodo] = useState(props.ListTodo); 

 const [isChecking,setIsChecking] = useState(false) 

 const styles = StyleSheet.create({
        container: {
          marginTop:20,
         flex: 1,
        },
        row: {
          flexDirection: "row",
          flexWrap: "wrap",
          textAlign: "center",
        
        },
        input: {
            marginTop:50,
            height: 40,
            margin: 10,
            borderWidth: 1,
            padding: 10,
          },
      });
  

  return (

    <>
        <ScrollView style={styles.container}>
           <View style={styles.row}>
          {listTodo.map((value,key)=>{
            return <Todo style={styles.todo}  todo={value} key = {key}  i = {key} isChecking={isChecking} openChecking={()=>setIsChecking(true)} />
        })}
         </View>
        </ScrollView>
       

    </>
  );
}



