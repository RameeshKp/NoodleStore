import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ListItem from '../../components/ListItem';
import style from './style';
import {useSelector, useDispatch} from 'react-redux';
import {getItems, getImages, sort} from '../../actions/listing';
import icons from '../../constants/icons';
const Listing = props => {
  const renderItem = ({item}) => (
    <ListItem item={item} navigation={props.navigation} />
  );
  const emptyList = () => (
    <View style={{alignItems: 'center'}}>
      <Text style={style.emptyText}>No Resturants found</Text>
    </View>
  );
  const loader = () => (
    <View style={{alignItems: 'center'}}>
      <ActivityIndicator color="#173756" animating size="large" />
    </View>
  );
  const [searchText, setSeacrhText] = useState('');
  const [filterList, setFilterList] = useState(null);
  const dispatch = useDispatch();
  const itemList = useSelector(state => state.itemsList);
  const isLoading = useSelector(state => state.isLoading);
  const sortList = () => {
    const newArray = itemList;
    dispatch(sort(newArray.sort((a, b) => a.Stars - b.Stars)));
  };
  useEffect(() => {
    dispatch(getItems());
    dispatch(getImages());
  }, []);
  return (
    <View style={style.container}>
      <Text style={style.title}>RESTUARANTS</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.inputBox}
          placeholderTextColor="#6E6E6E"
          placeholder="Search"
          onChangeText={searchString => {
            setSeacrhText(searchString);
            let filteredData = itemList.filter(function (item) {
              return item.Brand.toLowerCase().includes(
                searchString.toLowerCase(),
              );
            });
            setFilterList(filteredData);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            sortList();
          }}
          style={style.filterContainer}>
          <Image style={style.filter} source={icons.filter} />
        </TouchableOpacity>
      </View>
      <FlatList
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 10,
            }}></View>
        )}
        contentContainerStyle={{paddingVertical: 10}}
        data={searchText != '' ? filterList : itemList}
        renderItem={renderItem}
        keyExtractor={item => item.Variety}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={isLoading ? loader : emptyList}
      />
    </View>
  );
};
export default Listing;
