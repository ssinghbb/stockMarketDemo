import React from 'react'
import { View, Text, SafeAreaView,StyleSheet,ScrollView } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import CryptocurrencyIcon from "react-native-cryptocurrency-hexagon-icons"

export default function Holdings() {
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
      <ScrollView>

      <View>

        <Text style={styles.text}>Yeild Farming</Text>
      </View>
      <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <View>
              <CryptocurrencyIcon name="btc" size={48} />

              </View>
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
      <View>
        <Text style={styles.text}>Tokens</Text>
      </View>
      <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
<View>
<CryptocurrencyIcon name="eth" size={48} />

</View>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>
      <View>
        <Text style={styles.text}>Liquidity Pools</Text>
      </View>
      <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
<View>
<CryptocurrencyIcon name="ark" size={48} />

</View>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }

      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  text:{
padding:12
  }
})
