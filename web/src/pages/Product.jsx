import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Button, Spinner } from 'react-bootstrap'
import api from '../services/api'

export default function Product() {
  const { id } = useParams()
  const [produto, setProduto] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await api.get(`/produtos/${id}`)
        setProduto(res.data)
      } catch (err) {
        console.error('Erro ao buscar produto', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) return <div className="text-center"><Spinner animation="border"/></div>
  if (!produto) return <div>Produto não encontrado</div>

  return (
    <Card>
      <Card.Body>
        <Card.Title>{produto.nome || produto.title}</Card.Title>
        <Card.Text>{produto.descricao || produto.description}</Card.Text>
        <Link to="/">
          <Button variant="secondary">Voltar</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}
