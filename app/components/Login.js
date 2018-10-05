import React, { Component } from 'react';
import { ImageBackground, View, Alert ,AsyncStorage} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, Icon } from 'native-base';
import config from './../config';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };  
  }
  static navigationOptions = {
    title: 'Đăng nhập',
    header: null,
  };
  componentWillMount() {
    AsyncStorage.getItem('islogin').then((value) => {
      if(value1=null){
        this.setState({ islogin: true })
      }else{
        this.setState({ islogin: false })
      }
      
    })
  }

  render() {
    
      if(this.state.islogin){
        return (
        <Container style={{ flex: 1, alignItems: 'center' }}>
         <Text>Xin Chào,Bạn đã đăng nhập</Text>
        </Container>
        );
      }else{
        return (
          <Container style={{ flex: 1, alignItems: 'center' }}>
            <ImageBackground source={require('./../assets/login/login.png')} style={{ width: '100%', height: '100%' }}>
              <View style={{ flexDirection: "row", flex: 1, position: "absolute", top: 220, left: 25, right: 25, justifyContent: 'space-between', padding: 10 }}>
                <Content >
                  <Form style={{ alignItems: 'center' }}>
                    <Item>
                      <Icon name='user' type='FontAwesome' style={{ color: 'white' }} />
                      <Input placeholder="Tên đăng nhập" onChangeText={(username) => this.setState({ username })} floatingLabel style={{ color: 'white' }} />
                    </Item>
                    <Item>
                      <Icon name='key' type='FontAwesome' style={{ color: 'white' }} />
                      <Input secureTextEntry={true} placeholder="Mật khẩu" onChangeText={(password) => this.setState({ password })} floatingLabel style={{ color: 'white' }} />
                    </Item>
                    <Item underline={false}>
                      <Button rounded warning style={{ padding: 5, marginTop: 30, alignItems: 'center' }} onPress={() => this.Login()}>
                        <Text>Đăng nhập</Text>
                      </Button>
                    </Item>
                  </Form>
                </Content>
              </View>
            </ImageBackground>
    
          </Container>
        )
      }    
  }
   Login() {   
    const { navigate } = this.props.navigation;
    if (!this.state.password) {
      Alert.alert(
        'Thông báo',
        'Bạn chưa nhập mật khẩu'
      )
    }
    if (!this.state.username) {
      Alert.alert(
        'Thông báo',
        'Bạn chưa nhập tên đăng nhập'
      )
    }
    if (this.state.username && this.state.password) {
      AsyncStorage.setItem('islogin', '1')
      .then(() => {  
        this.setState({islogin:true});
        navigate('Login');  
      })
      .catch((error) => {
        Alert.alert(
          'Thông báo',
          'Có lỗi xảy ra'
        )
      })
    }
   
  }
}