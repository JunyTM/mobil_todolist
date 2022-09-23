import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.headings}> App Chăm sóc sức khỏe </Text>
      <Text style={styles.headings}> Phát triển bởi S-Team </Text>

      <View style={styles.box}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },

    headings: {
        fontSize: 20,
        fontWeight: 'bold',
    
        color: 'mediumslateblue',
        
        textAlign: 'center',
        justifyContent: 'center',

    },

    box: {
        width: 100,
        height: 100,

        marginTop: 50, 

        backgroundColor: 'deepskyblue',
        alignSelf: 'center',
    }

})