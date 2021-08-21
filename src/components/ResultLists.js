import React from 'react'
import {View, StyleSheet, Text,FlatList, TouchableOpacity} from 'react-native'
import ResultDetails from './ResultDetails'
import {withNavigation} from 'react-navigation'

const ResultList=({title,results,navigation})=>{

 if(!results){
     return null;
 }   
return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
    showsHorizontalScrollIndicator={false}
    horizontal
    data={results}
    keyExtractor={result=>result.id}
    renderItem={({item})=>{
        return  (
        <TouchableOpacity onPress={()=> navigation.navigate('ResultShows',{id : item.id})}>
        <ResultDetails item={item}/>
        </TouchableOpacity>
            )
    }}
    />
</View>
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5

    },
    container:{
        marginBottom:10
    }
});

export default withNavigation(ResultList);