import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { ListItem, Avatar } from 'react-native-elements'
import { Icon } from 'react-native-elements';
import CryptocurrencyIcon from "react-native-cryptocurrency-hexagon-icons"


export default function Tokens() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
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
        <SafeAreaView>
            <View>
                <View>
                    <Text style={styles.heading}>Select single token</Text>
                </View>
                <View style={styles.dropdownContainer}>

                    <DropDownPicker
                        containerStyle={{
                            width: "40%"
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
<View>
<CryptocurrencyIcon name="appc" size={48} />

</View>
                                <ListItem.Content>
                                    <ListItem.Title>{l.name}</ListItem.Title>
                                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                                </ListItem.Content>
                                <View>
                                    <Text style={styles.amount}>$123.12</Text>
                                </View>
                            </ListItem>
                        ))
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    heading: {
        padding: 10
    }, icon: {
        justifyContent:'flex-start'
    },
    dropdownContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    amount:{
        color:'dodgerblue'
    }
})
