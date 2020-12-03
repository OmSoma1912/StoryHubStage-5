import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class ReadStoryScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      allStories : []
    }
  }

  componentDidMount(){
    this.retriveStories()
  }

  retriveStories =()=>{
    try{
      var allStories = []
      var stories = db.collection("night time stories")
      .get().then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
          allStories.push(doc.data())
          console.log('Stories : ', allStories)
        })
        this.setState({allStories})
      })  
    }
    catch(error){
      console.log(error);
    }
  };
  
  searchFilter = async()=>{
    
  }

  render(){
    return(
      <View>
        <FlatList
          data = {this.state.allStories}
          renderItem = {({item})=>(
            <View style = {styles.itemContainer}>
              <Text>Title : {item.title}</Text>
              <Text>Author : {item.author}</Text>
            </View>
          )}
          keyExtractor = {(item,index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container : {
    flex : 1,
    backgroundColor : '#fff',
		justifyContent : 'center',
		alignItems : 'center'
  },
  item : {
    backgroundColor : 'pink',
    padding : 20,
    marginVertical : 8,
    marginHorizontal : 16
  },
  title : {
    fontSize : 32,
  },
  itemContainer : {
    height : 80,
    width : '100%',
    borderWidth : 2,
    borderColor : 'pink',
    justifyContent : 'center',
    alignSelf : 'center',
  },
});