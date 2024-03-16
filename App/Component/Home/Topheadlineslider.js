import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native'
import GlobalApi from '../../Services/GlobalApi';
import Color from '../../Shared/Color';
import { useNavigation } from '@react-navigation/native';
import Readnews from '../../Screen/Readnews';


function Topheadlineslider({ newsList}) {
  

const navigation=useNavigation();

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
          onPress={()=>navigation.navigate('read-news',{news:item})}
            style={{ width: Dimensions.get('screen').width * 0.80, marginRight: 15 }}>
            <Image source={{ uri: item.urlToImage }}
              style={{ height: Dimensions.get('screen').width * 0.77, borderRadius: 10 }} />
            <Text numberOfLines={3}style ={{marginTop:10,fontSize:23,fontWeight:'800',}}> {item.title}</Text>
            <Text style ={{marginTop:5,color:Color.primary}}> {item?.source?.name}</Text>

          </TouchableOpacity>
        )}

      />



    </View>)
}

export default Topheadlineslider