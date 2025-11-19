import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Spinner } from 'react-bootstrap'
import api from '../services/api'

export default function Home() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await api.get('/produtos')
        setProdutos(res.data)
      } catch (err) {
        console.error('Erro ao buscar produtos', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <div className="text-center"><Spinner animation="border"/></div>

  return (
    <Row>
      {produtos.map((p) => (
        <Col key={p.id} sm={12} md={6} lg={4} className="mb-3">
          <Link to={`/produto/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card>
              <Card.Body>
                <Card.Title>{p.nome || p.title || `Produto ${p.id}`}</Card.Title>
                <Card.Text>{p.descricao || p.description || ''}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  )
}
