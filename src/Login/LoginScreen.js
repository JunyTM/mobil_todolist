import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from '@rneui/themed'

export default function LoginScreen({navigation}) {
  return (
    <View>
        <Text>ahihi</Text>
        <Button title="DI vao ben trong" onPress={()=>navigation.navigate('ListTodo')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
   
  },
  
});