import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from '@rneui/themed'
import Login from './Login.js'

export default function LoginScreen({navigation}) {
  return (
    <View>
        <Login login={()=>navigation.navigate('ListTodo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});