import React from "react";
import {useState} from "react";
import { View, StyleSheet, Alert ,Text, TextInput, ScrollView} from "react-native";
import Todo from "./Todo"
import { Button,Icon } from "@rneui/themed";
export default function App({navigation}) {

    const [ListTodo,setListTodo] = useState(['asdasd','asdasdas','asdgfdsa','asdjhgas']);

    const [newTodo,setNewTodo] = useState('');

    const handlePress = ()=>{
        if(newTodo){
        let newList = [...ListTodo,newTodo];
        setListTodo(newList);
        setNewTodo('');}
        else {
            Alert.alert("địt mẹ nhập vào đi")
        }
    }

    const AcceptDelete = (i)=>{
        let newList = ListTodo.filter((value,index)=>{
            return i != index
        })

        setListTodo(newList);
    }

    const handleDeleteTodo=(i)=>{
        Alert.alert(
            "Bạn muốn xóa uwuuuuuuu !",
            "Địt mẹ vừa viết xong đã đòi xóa rồi ",
            [
              {
                text: "Xóa",
                onPress:()=>AcceptDelete(i),
                style: "accept"
              },
              { text: "Thôi" }
            ])
    }

    
  
    const styles = StyleSheet.create({
        container: {
         flex: 1,
         paddingTop: 22
        },
        item: {
          padding: 10,
          flexDirection: "row",
          flexWrap: "wrap",
        
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

    <View className="TodoList">
        <Button title="Login" onPress={()=>navigation.navigate('Login')}></Button>
        <TextInput style={styles.input}  placeholder="Viết nội dung mới vào đây nèk !!!" onChangeText={e=>setNewTodo(e)} value={newTodo} />
        <Button
              title="Thêm nội dung"
              icon={{
                name: 'plus',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'green',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 180,
                marginHorizontal: 100,
                marginVertical: 10,
              }}
            onPress={handlePress}
            />
        <ScrollView>
        {ListTodo.map((value,key)=>{
            return <Todo style={styles.item} todo={value} key = {key} handleDelete={handleDeleteTodo} i = {key} />
        })}
        </ScrollView>
  

    </View>
  );
}



