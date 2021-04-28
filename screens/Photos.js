import React from 'react';
import { StyleSheet, Text, SafeAreaView, ImageBackground, View, TouchableOpacity, Touchable } from 'react-native';

export default function Photos ({ navigation }) {

  const back = () => {
    navigation.goBack()
  }


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: navigation.getParam('image')}}
        style={styles.photos}
        imageStyle={{
            resizeMode: 'contain'
          }}
      >
        <View style={styles.bannerTitle}>
          <Text style={styles.title}>{ navigation.getParam('title') }</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={back}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
        
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007d00',
    width: 140,
    borderRadius: 20,
    marginTop: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonText: {
    color: '#fff'
  },
  photos: {
    flex: 1,
    resizeMode: 'cover',
    bottom: 0,
    width: '100%'
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    color: '#e2f4ff'
  },
  bannerTitle: {
    justifyContent: 'center',
    backgroundColor: '#1652b4',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    width: '50%',
    marginTop: '20%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});