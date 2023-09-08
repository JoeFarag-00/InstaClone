import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from 'react-native';

const storyData = [
  {
    id: 1,
    username: 'User1',
    imageSource: require('./Assets/story1.jpg'),
  },
  {
    id: 2,
    username: 'User2',
    imageSource: require('./Assets/story2.jpg'),
  },
  {
    id: 3,
    username: 'User3',
    imageSource: require('./Assets/story3.jpg'),
  },
  {
    id: 4,
    username: 'User4',
    imageSource: require('./Assets/story4.jpg'),
  },
];

const postsData = [
  {
    id: 1,
    username: 'Hello_user1',
    imageSource: require('./Assets/post.png'),
  },
  {
    id: 2,
    username: 'Hello_user2',
    imageSource: require('./Assets/post2.jpg'),
  },
  {
    id: 3,
    username: 'Hello_user3',
    imageSource: require('./Assets/post3.jpg'),
  },
];

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.storyContainer}>
        {storyData.map((story) => (
          <TouchableOpacity key={story.id} style={styles.circle}>
            <Image source={story.imageSource} style={styles.circleImage} />
            <Text style={styles.username}>{story.username}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {postsData.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <View style={styles.userInfo}>
            <TouchableOpacity style={styles.circle}>
              <Image source={post.imageSource} style={styles.circleImage} />
            </TouchableOpacity>
            <Text style={styles.username}>{post.username}</Text>
          </View>
          <Image source={post.imageSource} style={styles.image} />
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
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 16,
  },
  storyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'pink',
    alignItems: 'center',
  },
  circleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  postContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: -200,
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
    width: 370,
    height: 300,
    marginLeft: -5,
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: -230,
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