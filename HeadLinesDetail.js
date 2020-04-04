
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

function HeadlinesDetail({ route, navigation }) {
  const { data } = route.params;
 

  return (
    <View style={{justifiyContent:'center',alignItems:'center'}}>
        <Icon name="home" size={20} style={{marginTop:15}} />
  <Text>{data.name}</Text>
  <Text>{data.expansion}</Text>
  <Text>{data.age}</Text>
  <Icon name="hourglass" size={20} style={{marginTop:15}} />
  <Text>{data.build_time}</Text>
  <Text>{data.hit_points}</Text>
  <Text>{data.line_of_sight}</Text>
  <Text>{data.armor}</Text>
  <Icon name="tree" size={20} style={{marginTop:15}} />
  <Text>{data.cost.Wood}</Text>
    </View>
  );
};
 
export default HeadlinesDetail;