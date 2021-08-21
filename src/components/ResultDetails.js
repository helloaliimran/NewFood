import React from "react";
import {Text, View, StyleSheet,Image} from 'react-native'

const ResultDetails=({item})=>{
return <View style={styles.container}>

    <Image style={styles.imageStyle}
    source={{uri:item.image_url}}
    />

<Text style={styles.name}>{item.name}</Text>
<Text>{item.rating} stars, {item.review_count} Reviews</Text>
</View>

}
const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
imageStyle:{
    borderRadius:4,
    width:250,
    height:120,
    marginBottom:5

},
name:{
    fontWeight:'bold',
    fontSize:16
}

});
export default ResultDetails;