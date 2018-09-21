/**
 * Created by zhaoliulei on 2018/9/21.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Pushed from './Pushed'
import Tweet from './TweetView'

export default class MainList extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: (new Map():Map<string,boolean>)
        }
        this._onForward = this._onForward.bind(this);
    }
    _onForward(id:string) {
        console.log(id)
        let nextIndex = ++this.props.index;
        if (id == '1'){
            this.props.navigator.push({
                component: Pushed,
                title: "Scene " + nextIndex,
                passProps: { index: nextIndex ,ID:id}
            });
        }else if(id =='3'){
            this.props.navigator.push({
                component: Tweet,
                title: "Scene " + nextIndex,
                passProps: { index: nextIndex ,ID:id}
            });
        }

    }

    render(){
        return (
        <View style={styles.container}>
            <FlatList
                ItemSeparatorComponent={() => (
                    <View style={{height: 1, backgroundColor: 'skyblue'}}/>
                    )}
                data={[
                        {title: '跳转传参', id: '1'},
                        {title: 'scroll', id: '2'},
                        {title: '网络请求TableView', id: '3'},
                        {title: 'Title Text', id: '4'},
                        {title: 'Title Text', id: '5'},
                        {title: 'Title Text', id: '6'},
                        {title: 'Title Text', id: '7'},
                        {title: 'Title Text', id: '8'},
                    ]}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ListHeaderComponent = {() => <View style={{height: 0}}></View>}
            />
        </View>

        )
    }
    //为什么加大括号
    _renderItem = ({item}) => (
        <ListItem
        id = {item.id}
        onPressItem = {this._onPressItem}
        title={item.title}
    />
    )
    _keyExtractor = (item, index) => item.id;
    _onPressItem = (id:string) =>{
        this._onForward(id)
    }
}
class ListItem extends Component{
    _onPress = () => {
        /*调用父类方法**/
        this.props.onPressItem(this.props.id)
    }
    render(){
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.item}>
                    <Text>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        height: 88,
    },
})