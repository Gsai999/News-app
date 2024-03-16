import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import {View, Text,Image, TouchableOpacity, ScrollView} from 'react-native'
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import { Share } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
function Readnews() {
    const news=useRoute().params.news;
const navigation=useNavigation();
    useEffect(()=>{
        console.log(news)
    },[])

    const shareNews=()=>{
        Share.share({
            message:news.title+"\nRead More"+news.description
        })
    }
  return (
<ScrollView style={{backgroundColor:Color.white,flex:1}}>
<View style={{marginTop:10,marginBottom:10,flexDirection:'row',justifyContent:'space-between'}}>
    
    <TouchableOpacity onPress={()=>navigation.goBack()}>
<Ionicons  name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>shareNews()}>

    <Ionicons  name="share-outline" size={24} color="black" />
    </TouchableOpacity>

</View>


<Image source ={{uri:news.urlToImage}}
style={{width:'100%',height:300,borderRadius:19,margin:10}} 
/>

<Text style={{ marginTop:5,color:Color.primary,fontSize:16}}> {news.source.name } </Text>

<Text style={{ marginTop:1,fontSize:22,fontWeight:'bold'}}> {news.title } </Text>
<Text style={{ marginTop:6,fontSize:18 ,color:Color.gray,lineHeight:30}}> {news.description } </Text>

<TouchableOpacity 
onPress={()=>WebBrowser.openBrowserAsync(news.url)}>

<Text style={{ marginTop:7,color:Color.primary,fontSize:18,fontWeight:'bold'}}> Read More </Text>
</TouchableOpacity>

</ScrollView>


    )
}

export default Readnews