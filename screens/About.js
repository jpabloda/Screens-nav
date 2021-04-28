import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function About({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.textCont}>
        <Text style={styles.title}>What to Expect</Text>
        <Text style={styles.text}>On this app you will find information and photos of some of the best nature landscape spots in the country, get inspired and plan to visit them in your next vacations!</Text>
      </View>

      <View style={styles.button}>
        <Button
          title=' Home Page  '
          onPress={pressHandler}
          color='#fff'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e6f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#00722a',
    borderRadius: 20,
    marginBottom: 80
  },
  textCont: { 
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
    flex: 1,
  
  },
  text: {
    fontStyle: 'italic'
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 20,
    color: '#123f83'
  }
});
