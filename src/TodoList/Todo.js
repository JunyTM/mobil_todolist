import React from "react";
import { useState } from "react";
import { View, StyleSheet, Button, Alert, Text, TouchableOpacity, Vibration } from "react-native";
import { Icon, CheckBox } from "@rneui/themed";

export default function Todo(props) {
  const styles = StyleSheet.create({
    todo: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 15,
      backgroundColor: props.includeChecked(props.i) ? '#e0e0e0' : 'white',
      alignSelf: "flex-start",
      marginHorizontal: "2%",
      marginBottom: 6,
      width: 180,
      textAlign: "center",
      minWidth: '45%',
      maxWidth: '47%',
      height: 150
    },
    title: {
      fontWeight: "bold",
      fontSize: 16,
      padding: 3,
    },
    content: {
      padding: 3,
      fontSize: 15,
      lineHeight: 20
    },

    time: {
      padding: 3,
      fontSize: 12,
      position: 'absolute',
      bottom: 10,
      left: 10,
      color: 'gray'
    },

    check: {
      fontSize: 12,
      position: 'absolute',
      bottom: -4,
      right: -2,
      backgroundColor: props.includeChecked(props.i) ? '#e0e0e0' : 'white',
    }
  })

  return (

    <TouchableOpacity style={styles.todo} children={false}
      onLongPress={() => { if (!props.isChecking) { Vibration.vibrate(30); props.openChecking(); } }}
      onPress={props.isChecking ? () => { props.handleOnPessChecked(props.i); Vibration.vibrate(15) } : () => props.openTodoDetails()} >
      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{props.todo.Title}</Text>
      <Text style={styles.content} numberOfLines={3} ellipsizeMode='tail'>{props.todo.Content}</Text>
      <Text style={styles.time} >{props.todo.Time}</Text>
      {!props.isChecking ? '' : <CheckBox
        containerStyle={styles.check}
        center
        checkedIcon={
          <Icon
            name="check-circle-fill"
            type="octicon"
            color="green"
          />
        }
        uncheckedIcon={
          <Icon
            name="circle"
            type="octicon"
            color="grey"
          />
        }
        checked={props.includeChecked(props.i)}
        onPress={() => { props.handleOnPessChecked(props.i); Vibration.vibrate(15) }}
      />}

    </TouchableOpacity>
  );
}



