import React ,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultLists';

const  SearchScreen =({navigation})=> {
    
    const[term,setTerm]=useState('');
    const[searchApi,result,errorMessage]=useResults();
  
    const filterResultByPrice=(price)=>{
        //price === '$'|| '$$' || '$$$'
        return result.filter(res=>{
            return res.price===price;
        });
    }
    return (
     
       <>
       
         <SearchBar 
         term={term} 
         onTermChange={setTerm}
         onTermSubmit={()=>searchApi(term)}
         />
        {errorMessage? <Text>{errorMessage}</Text>:null}
        
        <ScrollView>
        <ResultList  results={filterResultByPrice('$')} title='Cost Effective'/>
        <ResultList  results={filterResultByPrice('$$')} title='Bit Pricer'/>
        <ResultList  results={filterResultByPrice('$$')} title='Big Spender'/>
        </ScrollView>
        </>
        
    );
}

const styles = StyleSheet.create({})
export default SearchScreen;