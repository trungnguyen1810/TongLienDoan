import { AppRegistry,YellowBox } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import App from './App';
import Splash from './app/components/Splash';
const AppNavigation = createStackNavigator({    
    Splash:{
        screen:Splash
    },
    App:{
        screen:App
    }    
},{headerMode:'none'});
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated','Module RCTImageLoader']);
AppRegistry.registerComponent('TongLienDoan', () => AppNavigation);
