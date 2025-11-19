import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import api from '../services/api'

export default function HomeScreen({ navigation }) {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await api.get('/produtos')
        setProdutos(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator/></View>

  return (
    <View style={{flex:1,padding:16}}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Product', { id: item.id })} style={{padding:12,borderBottomWidth:1}}>
            <Text style={{fontSize:16}}>{item.nome || item.title || `Produto ${item.id}`}</Text>
            <Text style={{color:'#666'}}>{item.descricao || item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
