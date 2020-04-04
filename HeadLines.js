
import React, {Fragment, useEffect, useState} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome5';
const {width, height} = Dimensions.get('screen');

function Headlines({ navigation }) {

const category = 'structures';

const url = `https://age-of-empires-2-api.herokuapp.com/api/v1/${category}`;

    const [headlines, setHeadlines] = useState({});

    useEffect(() => {
        fetchData();
      }, []);
       
      async function fetchData() {
        (await fetch(url))
           .json()
           .then(res => setHeadlines(res));
      }

renderItem = ({item}) => {
    return(
        <TouchableHighlight onPress={() => navigation.navigate('headlinesdetail', { data: item })}>
        <View style={{ flex: 1, width,flexDirection: 'row', padding: 10, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
      
      <Icon name="home" size={20} style={{paddingRight:10}} />
          <Text >{item.name}</Text>
     
      
    <View style={{ flex: 1,marginLeft:55, flexDirection: 'row', justifyContent: 'flex-end', alignItems:'flex-end' }}>
 
      <Text>{item.cost.Wood}</Text>
      <Icon name="tree" size={20} style={{paddingLeft:10}}/>
    </View>
          
       
      </View></TouchableHighlight> );
    
   
}
  return (
    <View style={{justifiyContent:'center',alignItems:'center'}}>
       <FlatList
      data={headlines.structures}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    </View>
  );
};
 
export default Headlines;