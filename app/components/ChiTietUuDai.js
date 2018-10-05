
import  React,{Component} from 'react';
import { ScrollView, View, Text, Image, StyleSheet,WebView } from 'react-native';
import HTML from 'react-native-render-html';
import config from './../config';
export default class ChiTietUuDai extends Component{
  constructor(props){
    super(props);
    this.state={
      isloading:true
    }
  }
  componentWillMount(){
    this.getChiTiet();
  }
  async  getChiTiet(){
    try {            
        let response = await fetch(config.hostPM6+'/api/chitietphucloi',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Token:config.token,
                Id_thongtinphucloi:1
            })
        });          
        let responseJson = await response.json();
        let data= responseJson.data.Ct_PhucLoi;
        console.log(data);
        this.setState({isloading:false,data:data,error:false});
        
    } catch (error) {
        this.setState({isloading:false,error:true,data:[]});
        console.log(error);        
    }
}
  render() {
    if(this.state.isloading){
      return (
      <ScrollView> 
           <Text>...</Text>
      </ScrollView>
          );
    }else{
      let html='';
      html += config.START_HTML+this.state.data.content+config.END_HTML;
    
      return (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          <View style={styles.author}>
            <Image
              style={styles.avatar}
              source={require('./../assets/uudai/uudai2.png')}
            />
            <View style={styles.meta}>
              <Text style={styles.name}>Chi tiết</Text>
              <Text style={styles.timestamp}>21/8/2018</Text>
            </View>
          </View>
          <Text style={styles.title}>{this.state.data.title}</Text>
          <View style={{padding:20}}>
          <HTML html={html}  />
          </View>    
        </ScrollView>
      );
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1
  },
  content: {
   
  },
  author: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    color: '#999',
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
   
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 8,
  },
});