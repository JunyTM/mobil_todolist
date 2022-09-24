import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Icon ,Button} from '@rneui/themed';
import { SafeAreaView, TextInput } from "react-native";
import {useState} from "react"
import * as React from 'react';
import { getDatabase, ref, child, push, update ,set} from "firebase/database";
import { getAuth } from "firebase/auth";

export default function TodoDetailsScreen({ navigation,route}) {

  const auth = getAuth();
  const user = auth.currentUser;
  const UID = user.uid;

  const d = new Date();
  const day = d.getDate() + " tháng " + (d.getMonth() + 1) + " , " + d.getFullYear();

  const [title,setTitle] = useState(route.params.todo.Title)
  const [content,setContent] = useState(route.params.todo.Content)
  const [key,setKey] = useState(route.params.todo.Id)

  const createNewTodo =()=>{
    route.params({Title: title,Content: content,Time: day})
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon style={{padding:10}} name='check' type='feather' onPress={()=>updateTodo()}  title="Update count" />
      ),
    });
  }, [navigation, createNewTodo]);

  const updateTodo = ()=>{
    const db = getDatabase();
   set(ref(db, '/todoList/'+ UID + '/' + key), {
    Title: title,
    Content: content,Time: day 
  });
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.title} placeholder="Nhập tiêu đề" onChangeText={e=>setTitle(e)} value={title} />
      <TextInput style={styles.content} placeholder="Nội dung " onChangeText={e=>setContent(e)} value={content} multiline/>
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

