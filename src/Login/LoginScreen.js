import { StyleSheet, Text, View } from 'react-native';
import Login from './Login.js'

export default function LoginScreen({navigation}) {
  return (
    <View>
        <Login login={(name)=>navigation.navigate('ListTodo',{name:name})}  register={()=>navigation.push('Register')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});