import React, {useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';


const ResultShowsScreen=({navigation})=> {
 const [result,setResult]= useState(null);
 const id=navigation.getParam('id');

 const getResult= async id=>{
     
    const response=await yelp.get(`/${id}`);
    setResult(response.data);
 };

 useEffect(()=>{
  
    getResult(id);
 },[]);
 
 if(!result){
    return null;
 }

    return (
        <View>
        <Text>{result.name}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
           return <Image style={styles.photo} source={{uri:item}}/>
        }}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    photo:{
        width:300,
        height:200,
    }
})
export default ResultShowsScreen;