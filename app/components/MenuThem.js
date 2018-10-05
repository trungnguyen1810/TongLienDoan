import { List, ListItem } from 'react-native-elements';
import React, { Component } from 'react';
import { ScrollView, View, Text, Image, FlatList, StyleSheet, Alert, Button,ImageBackground } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import FAQ from './FAQ';
import App from './../../App';
const list = [
    {
        key: '1',
        name: 'Tặng điểm',
        icon: require('./../assets/icon_menuthem/ic_tang_diem.png')
    },
    {
        key: '2',
        name: 'Lịch sử điểm',
        icon: require('./../assets/icon_menuthem/ic_lich_su_diem.png')
    },
    {
        key: '3',
        name: 'Mời bạn bè',
        icon: require('./../assets/icon_menuthem/ic_moi_ban_be.png')
    },
    {
        key: '4',
        name: 'Đăng ký nhận/hủy đăng ký SMS',
        icon: require('./../assets/icon_menuthem/ic_them_sms.png')
    },
    {
        key: '5',
        name: 'Chính sách',
        icon: require('./../assets/icon_menuthem/ic_tro_giup.png')
    },
    {
        key: '6',
        name: 'FAQ',
        icon: require('./../assets/icon_menuthem/ic_fqa.png')

    }
];
class MenuThem extends Component {
    static navigationOptions = {
        HeaderMode:'none'
      };
    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this);
    }
    render() {

        return (
            <View style={{ backgroundColor: 'white' }} >
                 <View >
                 <Image
                    source={require('./../assets/icon_menuthem/bg_menu_them.png')}
                    style={{  position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0, }}
                />
                </View>
                <FlatList
                    data={list}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.name}
                />

            </View>
        );
    }

    _renderItem({ item }) {

        return (
            <ItemMenu item={item} navigation={this.props.navigation} />
        );
    }

}
class ItemMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let item = this.props.item;
        return (
            <View style={{ backgroundColor: 'white' }} >           
                <ListItem
                    title={item.name}
                    avatar={item.icon}
                    subtitle=''
                    onPress={() => this.handleClickMenuItem(item)}
                />
            </View>
        );
    }
    handleClickMenuItem(item) {
        const { navigate } = this.props.navigation;
        switch(item.key) {
            case '5':
            navigate('ChinhSach');
                break;
            case '6':
            navigate('FAQ');
                break;
            default:
            navigate('FAQ');
        }
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    avatar: {
        width: 193,
        height: 110,
    },
});

export default MenuThem;
