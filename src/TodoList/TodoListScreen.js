import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SearchBar, Icon } from "@rneui/themed";
import { useState, useEffect } from 'react'
import {DeviceEventEmitter} from "react-native"
import TodoList from './TodoList.js'

export default function TodoListScreen({ navigation }) {

  const [searchInput, setSearchInput] = useState('')
  const d = new Date();
  const day = d.getDate() + " tháng " + (d.getMonth() + 1) + " , " + d.getFullYear();
  const [ListTodo, setListTodo] = useState([{ Title: "Hôm nay ăn gì", Content: "Ăn cứt", Time: day }, { Title: "Danh sách nợ", Content: "Đéo có ai", Time: day }
    , { Title: "Danh sách người yêu cũ", Content: "Cũng đéo có aiasdfas fasdfas dfasfasfawefa sdfwae fastfa wefasdfwaerf ăfa", Time: day }, { Title: "Công thức tán gái", Content: "ajsdgjashdgajshgdhjas ko có", Time: day },
  { Title: "Danh sách trượt môn", Content: "Tất cả", Time: day }]);

  const [isChecking, setIsChecking] = useState(false)

  const [arrayOfChecked, setArrayOfChecked] = useState([])

  const [isSelectAll,setIsSelectAll] = useState(false)

  const handleOnPessChecked = (id) => {
    if (arrayOfChecked.includes(id)) {
      let newArr = arrayOfChecked.filter((value, key) => {
        return value != id
      })
      setArrayOfChecked(newArr?newArr:[])
    }
    else {
      let newArr = [id, ...arrayOfChecked]
      setArrayOfChecked(newArr)
    }

    console.log(arrayOfChecked)
  }

  const handleOnPressDelete = ()=>{
     let newTodo = ListTodo.filter((value, key)=>{
        return !arrayOfChecked.includes(value.Title+key)
      })

      setListTodo(newTodo)

  }

  const handleOnPressSelectAll =()=>{
    if(isSelectAll){
      setArrayOfChecked([])
      setIsSelectAll(!isSelectAll)
    }
    else{
      let newIsChecking=[]
      ListTodo.forEach((value, key)=>newIsChecking.push(value.Title+key))
      setArrayOfChecked([...newIsChecking])
      setIsSelectAll(!isSelectAll)
    
    }
   
  }

  const handleOnPressExit = ()=>{
    setIsChecking(false);
    setArrayOfChecked([]);
    setIsSelectAll([])
  }

  const includeChecked = (id) => arrayOfChecked.includes(id)

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
      <TouchableOpacity style={styles.IconAdd} onPress={() => { navigation.navigate('CreateNewTodo', {addNewTodo:addNewTodo}) }}><Icon  size={30} reverse color='#36f20c' name="plus" type="feather" /></TouchableOpacity>
      <TodoList ListTodo={ListTodo} key={ListTodo} openTodoDetails={(todo) => { navigation.navigate('TodoDetails', { todo }) }} isChecking={isChecking} openChecking={() => { setIsChecking(true) }}
        handleOnPessChecked={(id) => { handleOnPessChecked(id) }} includeChecked={(id) => includeChecked(id)}
      />
      {!isChecking ? '' :
        <View style={styles.footChecking} >
          <TouchableOpacity style={styles.iconChecking} onPress={handleOnPressExit}>
            <Icon name='x' type="feather" />
            <Text style={styles.tileChecking} >Thoát</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconChecking} onPress={handleOnPressDelete}>
            <Icon name='trash-2' type="feather" />
            <Text style={styles.tileChecking}>Xóa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconChecking} onPress={handleOnPressSelectAll}>
            <Icon name='checkmark-done-circle-outline' type="ionicon" />
            <Text style={styles.tileChecking}>Chọn tất cả</Text>
          </TouchableOpacity>
        </View>
      }

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
  footChecking: {
    position: 'absolute',
    backgroundColor: '#e5ffff',
    bottom: 0,
    width: '100%',
    height: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
  },
  iconChecking: {
    padding: 5,
    width: '33%',
    textAlign: 'center',
  },
  tileChecking: {
    textAlign: 'center',
    fontSize: 12
  }
});

