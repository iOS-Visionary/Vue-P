

/**
 * Created by yixue on 2018/1/9.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    Image,
    FlatList
} from 'react-native';

const TWEET_URL = 'http://www.oschina.net/action/apiv2/tweets?pageToken=&type=1'
var Dimensions = require("Dimensions")
var Screen_width = Dimensions.get("window").width
var Screen_Height =  Dimensions.get("window").height

export default class TweetView extends Component {

    constructor(props){
        super(props);
        this.state = {
            models:[],
            loaded:false
        };
        this.fetchData();
    }
    fetchData(){
        fetch(TWEET_URL)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData)

                let arr = responseData.result.items;
                this.setState({
                    models:arr,
                    loaded:true,

                });
            })
            .done();

    }
    renderTweetList(model,rowId){

        return(
            //只能包裹一个View
            <TouchableHighlight
                underlayColor={'rgba(34,26,38,0.1)'}
            >
                <View  style={styles.item}>

                    <View style={styles.itemMargin}/>

                    <View style={styles.itemMain}>

                        <View style={styles.itemHeader}>
                            {/*头像**/}
                            <View style={styles.userIconP} >
                                <Image source={{uri:model.item.author.portrait}}
                                       style={styles.userIcon}></Image>
                            </View>


                            <View style={styles.userCreateTimeP}>
                                {/*用户名**/}
                                <Text style={styles.userName}>{model.item.author.name}</Text>

                                {/*时间**/}
                                <Text style={styles.userCreateTime}>{model.item.pubDate}</Text>
                            </View>



                        </View>

                        <View >


                            {/*内容**/}
                            <Text style={styles.userContent} >
                                {model.item.content}
                            </Text>
                            {/*<View>{this.renderImgList(model)}</View>*/}

                        </View>
                    </View>

                </View>


            </TouchableHighlight>
        )



    }

    renderImgList(model){
        if(model.images){
            let ratio = model.images[0].h/model.images[0].w
            let w = Screen_width * 0.5
            let h = w * ratio
            return (
                <Image source={{uri:model.item.images[0].href}}
                       style={{width:w,height:h,marginTop:10}}></Image>
            )
        }
        return (
            <View/>
        )
    }
    render() {
        if(!this.state.loaded){
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <ActivityIndicator
                            size='large'
                            color='blue'
                        />
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.container}>

                <FlatList
                    ItemSeparatorComponent={() => (
                        <View style={{height: 1, backgroundColor: 'skyblue'}}/>
                    )}
                    data={this.state.models}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderTweetList}
                />
            </View>
        )
    }
    _keyExtractor = (item, index) => {

        return item.id
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop:0,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerSpace: {
        marginTop: 0,
    },
    bottomSpace:{
        marginBottom:49,
    },
    item:{
        flexDirection: 'column',

    },
    itemMargin:{
        //获取屏幕尺寸

        height:15,
        width:Screen_width,
        backgroundColor: '#F2F4F6',

    },
    itemMain:{
        flexDirection: 'column',
        marginTop:10,
        marginLeft:10,
        marginBottom:8,
        marginRight:10,
    },
    itemHeader:{
        flexDirection: 'row',

    },
    userIconP:{

    },
    userIcon:{
        width:35,
        height:35,
        borderRadius:17.5,
        marginLeft:8,
        marginBottom:8,
    },
    userName:{

    },
    userCreateTimeP:{
        flexDirection:'column',
        marginLeft:8,
    },

    userCreateTime:{
        marginTop:3,
    },
    userContent:{

    },




});
