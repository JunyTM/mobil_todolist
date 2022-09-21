import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar, Icon } from "@rneui/themed";
import { useState,useEffect } from 'react'
import TodoList from './TodoList.js'

export default function TodoListScreen({ navigation }) {

  const lognow = ()=>{ 
    console.log("ditr me m=nah asjbndaksbdas")
  }


  const [searchInput, setSearchInput] = useState('')
  const d = new Date();
  const day = d.getDate() + " tháng " + (d.getMonth() + 1) + " , " + d.getFullYear();
  const [ListTodo, setListTodo] = useState([{ Title: "Hôm nay ăn gì", Content: "Ăn cứt", Time: day }, { Title: "Danh sách nợ", Content: "Đéo có ai", Time: day }
    , { Title: "Danh sách người yêu cũ", Content: "Cũng đéo có aiasdfas fasdfas dfasfasfawefa sdfwae fastfa wefasdfwaerf ăfa", Time: day }, { Title: "Công thức tán gái", Content: "ajsdgjashdgajshgdhjas ko có", Time: day },
  { Title: "Danh sách trượt môn", Content: "Tất cả", Time: day }]);

  const addNewTodo = (newTodo) => {
    let newListTodo = [newTodo, ...ListTodo];
    setListTodo(newListTodo);
    console.log(newListTodo);
  }


  return (
    <View style={styles.container}>
      <View >
        <SearchBar platform="android" ref={search => setSearchInput(search)} value={searchInput} style={styles.searchInput} placeholder="Tìm kiếm ghi chú" />
      </View>
      <View style={styles.IconAdd}><Icon onPress={() => { navigation.navigate('TodoDetails',addNewTodo) }} size={30} reverse color='#36f20c' name="plus" type="feather" /></View>
      <TodoList ListTodo={ListTodo} key={ListTodo} />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    display: "flex",
  },
  IconAdd: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    size: 30,
    zIndex: 1
  },
});

