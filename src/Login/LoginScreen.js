import { StyleSheet, Text, View } from 'react-native';
import Login from './Login.js'

export default function LoginScreen({navigation}) {
  return (
    <View>
        <Login login={()=>navigation.navigate('ListTodo')}  register={()=>navigation.push('Register')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});