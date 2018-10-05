import React, { Component } from 'react';
import { Image,StyleSheet ,ImageBackground,TouchableHighlight } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,Button  } from 'native-base';
const cards = [
  {
    image: require('./../assets/splash/slide1.jpg'),
  },
  {
    image: require('./../assets/splash/slide2.jpg'),
  },
  {
    image: require('./../assets/splash/slide3.jpg'),
  }
];
export default class DeckSwiperAdvancedExample extends Component {
  constructor(props){
    super(props);
    this.state={i:0};
  }
  render() {
    let i = this.state.i;
    return (
      <Container > 
        <ImageBackground source={cards[i].image} style={{width: '100%', height: '100%'}}>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 5, right: 5, justifyContent: 'space-between', padding: 10 }}>
         <TouchableHighlight onPress={()=>this.BoQua()}>
         <View  >
            <Icon name="checkmark" style={{color:'white'}} />
            <Text style={{color:'white'}}>Bỏ qua</Text>
          </View>
         </TouchableHighlight>
         <TouchableHighlight onPress={() => this.TiepTuc()}>
          <View  >
            <Icon name="arrow-forward" style={{color:'white'}}/>
            <Text style={{color:'white'}}>Tiếp tục</Text>
          </View>
          </TouchableHighlight>
        </View>
      </ImageBackground>
              
      </Container>
    );
  }
  BoQua(){
    const { navigate } = this.props.navigation;
    navigate('App');
  }
  TiepTuc(){
    const { navigate } = this.props.navigation;
    if(this.state.i==2){
      navigate('App');
    }else{
      this.setState({i:this.state.i+1});
    }
  }
}
