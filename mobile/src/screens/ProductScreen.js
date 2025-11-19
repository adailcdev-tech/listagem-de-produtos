import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Button } from 'react-native'
import api from '../services/api'

export default function ProductScreen({ route, navigation }) {
  const { id } = route.params
  const [produto, setProduto] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await api.get(`/produtos/${id}`)
        setProduto(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator/></View>
  if (!produto) return <View style={{padding:16}}><Text>Produto não encontrado</Text></View>

  return (
    <View style={{flex:1,padding:16}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>{produto.nome || produto.title}</Text>
      <Text style={{marginTop:8}}>{produto.descricao || produto.description}</Text>
      <View style={{marginTop:16}}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}
