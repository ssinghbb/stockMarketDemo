import React,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { ListItem, Avatar } from 'react-native-elements'

import { Icon } from 'react-native-elements';
export default function Pools() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);
    const list = [
        {
          name: 'WBNB-BUSD',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: '139.8% APY'
        },
        {
          name: 'WBNB-Cake',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: '139.8% APY'
        },
        {
          name: 'WBNB-BUSD',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: '139.8% APY'
        }
        ,
        {
          name: 'WBNB-CAKE',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: '139.8% APY'
        },
        {
          name: 'WBNB-BTCB',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: '139.8% APY'
        }
      ]
  
    return (
        
        <View>
            <Text style={styles.heading}>Select Liquidity Pair</Text>
            <View style={{flexDirection:'row'}}>
            <DropDownPicker
                      containerStyle={{
                        width:"40%"
                    }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
          <DropDownPicker
          containerStyle={{
              width:"40%"
          }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
    <Icon style={styles.icon}
  name='filter-list' />
            </View>
            <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
              <View>
                <Text>$123.12</Text>
              </View>
            </ListItem>
          ))
        }
      </View>
        </View>
    )
}
const styles = StyleSheet.create({
    heading:{
        padding:10
    },
    icon:{
        padding:15
    }
})
