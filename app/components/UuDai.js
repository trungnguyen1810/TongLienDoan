import React, { Component } from 'react';
import { ImageBackground, View, Alert, AsyncStorage, Image,TouchableOpacity,Touchable } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, CardItem, Icon, Card } from 'native-base';

import config from './../config';
export default class UuDai extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <Container>
        <Content>
          
          <TouchableOpacity onPress={()=>this.XemChiTiet()}>
          <Card >
            <CardItem>
              <Text note>23/8/2018</Text>
            </CardItem>
            <CardItem style={{ flex: 1, alignContent: 'center' }}>

              <Image style={{ height: 230, width: 375, alignItems: 'center', alignContent: 'center', resizeMode: 'cover' }} source={require('./../assets/uudai/uudai1.jpg')} />
            </CardItem>
            <CardItem>
              <Text>TỔNG HỢP CÁC ƯU ĐÃI SALE ĐẾN TỪ GIÀY DÉP TOP&TOP</Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>this.XemChiTiet()}>
          <Card>
            <CardItem>
              <Text note>24/8/2018</Text>
            </CardItem>
            <CardItem style={{ flex: 1, alignContent: 'center' }}>

              <Image style={{ height: 230, width: 375, alignItems: 'center', alignContent: 'center', resizeMode: 'cover' }} source={require('./../assets/uudai/uudai2.png')} />
            </CardItem>
            <CardItem>
              <Text>Quỹ khen thưởng phúc lợi công đoàn nhân dịp trung thu</Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.XemChiTiet()}>
         
          <Card>
            <CardItem>
              <Text note>25/8/2018</Text>
            </CardItem>
            <CardItem style={{ flex: 1, alignContent: 'center' }}>

              <Image style={{ height: 230, width: 375, alignItems: 'center', alignContent: 'center', resizeMode: 'cover' }} source={require('./../assets/uudai/uudai3.png')} />
            </CardItem>
            <CardItem>
              <Text>Công đoàn tham gia xây dựng nông thôn mới</Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.XemChiTiet()}>
          <Card>
            <CardItem>
              <Text note>26/8/2018</Text>
            </CardItem>
            <CardItem style={{ flex: 1, alignContent: 'center' }}>

              <Image style={{ height: 230, width: 375, alignItems: 'center', alignContent: 'center', resizeMode: 'cover' }} source={require('./../assets/uudai/uudai4.jpg')} />
            </CardItem>
            <CardItem>
              <Text>PHONG TRÀO THI ĐUA “LAO ĐỘNG GIỎI, LAO ĐỘNG SÁNG TẠO” Ở ĐỒNG THÁP: 5 năm làm lợi trên 130 tỉ đồng</Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
        </Content>
        
      </Container>
    );
  }
  XemChiTiet(){
    const { navigate } = this.props.navigation; 
        navigate('ChiTietUuDai');
  }

}