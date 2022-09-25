import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert } from 'react-native';
import { Input, Icon ,Button} from '@rneui/themed';
import { SafeAreaView, TextInput } from "react-native";
import {DeviceEventEmitter} from "react-native"
import {useState} from "react"
import * as React from 'react';
import { getDatabase, ref, child, push, update ,set} from "firebase/database";
import { getAuth } from "firebase/auth";
import { Tile } from '@rneui/base';

export default function TodoDetailsScreen({ navigation}) {

  const auth = getAuth();
  const user = auth.currentUser;
  const UID = user.uid;


  const [isNewTodo,setIsNewTodo] = useState(true)
  const [key,setKey] = useState('')
  const [isSave,setIsSave] = useState(false)

  const d = new Date();
  const day = d.getDate() + " tháng " + (d.getMonth() + 1) + " , " + d.getFullYear();

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')

  const isValidTodo = ()=>{
    if((title||content)&&!isSave){
      return true
    }
    else return false
  }

  const createNewTodo =()=>{
    if(isValidTodo){
    if(isNewTodo){
      const db = getDatabase();
      const postData = {
        Title: title,
        Content: content,
        Time: day 
      };
    
      const newPostKey = push(child(ref(db), '/todoList/')).key;
      setKey(newPostKey);
      setIsNewTodo(false)
      const updates = {};
      updates['/todoList/'+ UID + '/' + newPostKey] = postData;
      update(ref(db), updates);
    }

    else{
      updateTodo()
    }
    setIsSave(true)
    }
  }

  const updateTodo = ()=>{
    const db = getDatabase();
   set(ref(db, '/todoList/'+ UID + '/' + key), {
    Title: title,
    Content: content,
    Time: day 
  });
  }



  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon style={{padding:10 }} name='save' type='material' onPress={()=>createNewTodo()} color={isValidTodo()?'black':'#d3d3d3'} title="Update count" />
      ),
    });
  }, [navigation, createNewTodo]);

 

  return (
    <View style={styles.container}>
      <TextInput style={styles.title} placeholder="Nhập tiêu đề" onChangeText={e=>{setTitle(e);setIsSave(false)}} value={title} />
      <TextInput style={styles.content} placeholder="Nội dung " onChangeText={e=>{setContent(e);setIsSave(false)}} value={content} multiline/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    padding:20
  },
  title:{
    fontSize:20,
    fontWeight: '500',
    paddingBottom:10,
    
  },
  content:{
    fontSize:16,
  },

});

