import React,{Component} from 'react';
import {WebView,ActivityIndicator,Button} from 'react-native';
import config from './../config';

export default class ChinhSach extends Component{
    static navigationOptions = {
        headerTitle: 'Chính Sách'
      };
    constructor(props){
        super(props);
        this.state={isloading:true,error:false}
    }
    async componentDidMount(){
       await this.getFaq();            
    }
    async  getFaq(){
        try {            
            let response = await fetch(config.hostPM6+'/Api_DanhSachChinhSach',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    Token:config.token
                })
            });          
            let responseJson = await response.json();
           
            this.setState({isloading:false,data:responseJson.Data.DanhSach,error:false});
            return true;
        } catch (error) {
            this.setState({isloading:false,error:true,data:[]});
            console.log(error);
            return true;
        }
    }
    render(){
        let html=``;      
        if(!this.state.isloading){
            if(this.state.error){
                html=''; 
            }else{
                html+=config.START_HTML;
                for(let i=0;i<this.state.data.length;i++){
                    html+=`${this.state.data[i].TieuDe}<br><p>${this.state.data[i].NoiDung}<p>`;
                }
                html+=config.END_HTML;
            }
        }  
        
        return (
            <WebView 
            originWhitelist={['*']}
            source={{baseUrl: '',html:html}}
            />
        );
    }
}