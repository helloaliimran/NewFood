import React ,{useState,useEffect} from 'react'
import yelp from '../api/yelp';

export default()=>{

    const[result,setResult]=useState([]);
    const[errorMessage,setErrorMessage]=useState("");
    

    

    const searchApi = async (searchTerm)=>{
        console.log('hi there');
    try{

        const response=await yelp.get('/search',{
            
         params:{
             limit:50,
             term:searchTerm,
             location:'san jose'
         }
     });

     setResult(response.data.businesses);
     console.log(result);
    }catch(err){
        console.log('err : '+err);
        setErrorMessage("something went wrong!");
    }

  
    };

    useEffect(()=>{
        searchApi('pasta');
    },[]);

    return [searchApi,result,errorMessage]
}