import {Text, TouchableOpacity, View, Image} from 'react-native';
import React,{useState,useEffect}from 'react';
import style from './style';
import icons from '../../constants/icons';
import {useSelector} from 'react-redux';
const ListItem = props => {
  const imageArray = useSelector(state => state.imageArray);
  const imag = imageArray[Math.floor(Math.random() * imageArray.length)];
  const [image, setImage] = useState(null);
  useEffect(() => {
    setImage(imag)
}, [imageArray])  
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('DetailScreen', {item: props.item,image:image.Image});
      }}
      style={style.container}>
      <View style={{flex:.4}}>
        <Image style={style.image} source={{uri: image?image.Image:null}} />
      </View>
      <View style={{marginLeft:10,flex:.8,alignItems:'flex-start'}}>
        <Text style={style.title}>{props.item.Brand}</Text>
        <View style={{flexDirection: 'row'}}>
          {props.item.Stars > 0 && (
            <View style={{flexDirection: 'row', marginRight: 15}}>
              <Text style={style.subText}>{props.item.Stars + ' '}</Text>
              <Image style={style.icon} source={icons.star} />
            </View>
          )}
          <View style={{flexDirection: 'row'}}>
            <Image style={style.icon} source={icons.location} />
            <Text style={style.subText}>{props.item.Country}</Text>
          </View>
        </View>
        <Text style={[style.subText]}>
          {'Special Dish - ' + props.item.Variety}
        </Text>
        {props.item['Top Ten'] != 'NaN' && (
          <Text style={style.subText}>
            {'Top Ten - ' + props.item['Top Ten']}
          </Text>
        )}
        {props.item.Style != 'NaN' && (
          <Text style={style.subText}>{'Style - ' + props.item.Style}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default ListItem;
