import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Icon ,Button} from '@rneui/themed';
import { SafeAreaView, TextInput } from "react-native";
import {useState} from "react"
import * as React from 'react';
export default function TodoDetailsScreen({ navigation,route}) {

  const d = new Date();
  const day = d.getDate() + " tháng " + (d.getMonth() + 1) + " , " + d.getFullYear();

  const [todo,setTodo] = useState({})

  const [title,setTitle] = useState(route.title)
  const [content,setContent] = useState(route.content)

  const createNewTodo =()=>{
    route.params({Title: title,Content: content,Time: day})
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon style={{padding:10}} name='check' type='feather' onPress={()=>createNewTodo()}  title="Update count" />
      ),
    });
  }, [navigation, createNewTodo]);

 

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

