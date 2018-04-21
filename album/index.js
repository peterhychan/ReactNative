//Import ReactNative Lib to help create a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import AlbumList from './src/components/AlbumList';

//Import self-defined component
import Header from './src/components/header';

//Create a component
const App =()=>{
  return (
    <View style={{flex:1}}>
      <Header headerText="First React-Native Application"/>
      <AlbumList />
    </View>
  );
};



//Render it to the device
AppRegistry.registerComponent('albums', ()=>App);
