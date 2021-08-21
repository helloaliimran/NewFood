import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/Screens/SearchScreen';
import ResultShowsScreen from './src/Screens/ResultShowsScreen';


const navigator=createStackNavigator({
    Search:SearchScreen,  
    ResultShows:ResultShowsScreen,
    }
    ,{
      initialRouteName:'Search',
      defaultNavigationOptions:{
        title:'Bussiness search'
      }
    });
    
    export default createAppContainer(navigator);