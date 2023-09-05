import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.storyContainer}>
        <TouchableOpacity style={styles.circle}>
        </TouchableOpacity>
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>

      <View style={styles.postContainer}>
        <View style={styles.userInfo}>
          <TouchableOpacity style={styles.circle}>
          </TouchableOpacity>
          <Text style={styles.username}>Hello_user</Text>
        </View>
        <Image source={require('./Assets/post.png')} style={styles.image} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('./Assets/love.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('./Assets/comment.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('./Assets/share.png')} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    borderWidth: 3,
    borderColor: 'red',
  },
  postContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -210,
    marginBottom: 10, 
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
    width: 300,
    height: 300,
    marginLeft: -40,
    resizeMode: 'cover',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    marginBottom: -50,
    marginLeft: 16,
  },
  button: {
    marginHorizontal: 10,
  },
  buttonImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default App;
