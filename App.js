import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListTodo from './src/TodoList/TodoListScreen.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Login/LoginScreen.js'
import TodoDetails from './src/TodoDetails/CreateNewTodo.js'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} headerLargeTitle={false} />
        <Stack.Screen name="ListTodo" component={ListTodo} />
        <Stack.Screen name="TodoDetails" component={TodoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
