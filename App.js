/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Alert,
  ImageBackground,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const {width, height} = Dimensions.get('screen');

function App({ navigation }) {

  const imageBaseUrl = "https://images.unsplash.com/photo-";
  const imageParameters = "?auto=format&fit=crop&w=375&q=80";

 const dataSource = [
    { category: 'Structures', imageId: '1514539079130-25950c84af65' },
    { category: 'Civilizations', imageId: '1577081395884-e70fc91645ad' },
    { category: 'Units', imageId: '1514134177582-fec97bd28b7b' },
    { category: 'Technologies', imageId: '1510692038534-89c33e4a57ff' },
  
 
  ];

  renderItem = ({ item } ) => {
    return (
      <TouchableHighlight  onPress={() => navigation.navigate('Structures')}>
      <ImageBackground
        source={{ uri: imageBaseUrl + item.imageId + imageParameters }}
        style={{
          width: width,
          height: 150,
          justifyContent: 'center'
        }}>
        <Text style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 15
        }}>{item.category}</Text>
      </ImageBackground>
      </TouchableHighlight>
    );
  }

  return (


       
       <View style={{
        flex: 1,  
      
        justifyContent: 'center',
        alignItems: 'center'
    }}>
       
   <FlatList
        data={dataSource}
        renderItem={this.renderItem}
        keyExtractor={( item ) => item.category }
       
      />
    
    </View>

  

  );
};



export default App;
