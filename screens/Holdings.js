import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import CryptocurrencyIcon from "react-native-cryptocurrency-hexagon-icons"

export default function Holdings() {
  const [data, setData] = useState([])
  useEffect(() => {
    getMoviesFromApiAsync();

  })
  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch("https://api.nomics.com/v1/currencies?key=165e0fa2a0350b7332f2a822910f2376164ee41a&ids=BTC,ETH,XRP")
        .then(response => response.json())
        .then(item => console.log("item",item))
    } catch (error) {
      console.error(error);
    }
  };
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
                  <Text style={styles.amount}>$123.12</Text>
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
        <View>
      {
          data.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <View>
              <CryptocurrencyIcon name="btc" size={48} />

              </View>
              <ListItem.Content>
                <ListItem.Title>{l.id}</ListItem.Title>
              </ListItem.Content>
              <View>
                <Text style={styles.amount}>$123.12</Text>
              </View>
            </ListItem>
          ))
        }
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  text: {
    padding: 12
  },
  amount: {
    color: 'red'
  }
})
