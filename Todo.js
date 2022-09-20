import React from "react";
import {useState} from "react";
import { View, StyleSheet, Button, Alert ,Text} from "react-native";
import { Icon } from "@rneui/themed";

export default function Todo(props) {

  return (
        <View style={props.style}>
        <Text >{props.todo}</Text>
        <Icon
       
        name='lock-closed-outline'
        type='ionicon'
        color='#f50'
         
        onPress={()=>props.handleDelete(props.i)}
      />
        </View>
        
  
  );
}



