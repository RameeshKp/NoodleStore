import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import icons from '../../constants/icons';
const DetailScreen = props => {
  const [item, setItem] = useState(props.route.params.item);
  return (
    <View style={style.container}>
      <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={style.backContainer}
          >
          <Image style={style.back} source={icons.back} />
        </TouchableOpacity>
      <View style={{flex: 0.3}}>
        
        <Image style={style.image} source={{uri: props.route.params.image}} />
      </View>
      <View style={{padding: 10}}>
        <Text style={style.title}>{item.Brand}</Text>
        <View style={{flexDirection: 'row'}}>
          {item.Stars > 0 && (
            <View style={{flexDirection: 'row', marginRight: 15}}>
              <Text style={style.subText}>{item.Stars + ' '}</Text>
              <Image style={style.icon} source={icons.star} />
            </View>
          )}
          <View style={{flexDirection: 'row'}}>
            <Image style={style.icon} source={icons.location} />
            <Text style={style.subText}>{item.Country}</Text>
          </View>
        </View>
        <Text style={style.subText}>{'Special Dish - ' + item.Variety}</Text>
        {item['Top Ten'] != 'NaN' && (
          <Text style={style.subText}>{'Top Ten - ' + item['Top Ten']}</Text>
        )}
        {item.Style != 'NaN' && (
          <Text style={style.subText}>{'Style - ' + item.Style}</Text>
        )}
      </View>
    </View>
  );
};
export default DetailScreen;
