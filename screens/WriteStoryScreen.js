import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import AppHeader from '../AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      story : '',
      storyTitle : '',
      author : ''
    }
  }

  submitStory  = async()=>{
    db.collection("Story 1").add({
      'author' : this.author,
      'story' : this.story,
      'storyTitle' : this.storyTitle
    })

    this.setState({
      author : '',
      story : '',
      storyTitle : ''
    })
  }

  render(){
    return(
      <KeyboardAvoidingView style = {styles.container} behavior = "padding" enabled>
        <View style = {styles.container}>
          <AppHeader/>
          <TextInput
            style = {styles.inputBoxA}
            placeHolder = "Story Title"
            onChangeText={(text)=>{this.setState({storyTitle:text})}}
          />
          <TextInput
            style = {styles.inputBoxA}
            placeHolder = "Author"
            onChangeText={(text)=>{this.setState({author:text})}}
          />
          <TextInput
            style = {styles.inputBoxB}
            placeHolder = "Write your story"
            onChangeText={(text)=>{this.setState({story:text})}}
          />
          <TouchableOpacity 
            style = {styles.submitButton}
            onPress ={()=>{
              this.submitStory
              ToastAndroid.show("Your story has been submitted", ToastAndroid.SHORT);
            }}>
              <Text style = {styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  inputBoxA:{
    width: 200,
    height: 40,
    fontSize: 20
  },
  inputBoxB:{
    width: 200,
    height: 400,
  },
  scanButton:{
    backgroundColor: '#f09ff9',
    width: 50,
    height : 10
  },
  buttonText : {
    fontSize : 20,
  }
});