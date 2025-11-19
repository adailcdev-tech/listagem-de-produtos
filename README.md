# Meu Estudo de Caso — Rotas e Consumo de API

Projeto de estudo dividido em duas partes: aplicação Web (React + Vite) e Mobile (React Native + Expo). O objetivo é listar produtos, navegar entre telas/rotas e consumir uma API REST.

Estrutura esperada:

```
/meu-estudo-caso
├── web/
└── mobile/
```

Web (React + Vite):
- Rotas: `/` (lista de produtos) e `/produto/:id` (detalhes)
- Bibliotecas: React, Vite, React Router, Axios, React Bootstrap

Mobile (Expo + React Native):
- Telas: Tela inicial (lista), Tela de detalhes
- Bibliotecas: Expo, React Navigation, Axios, (opcional) React Native Paper

Instalação e execução

Web:

1. Entre na pasta `web`:

```
cd web
```

2. Instale dependências:

```
npm install
```

3. Rode em desenvolvimento:

```
npm run dev
```

Mobile (Expo):

1. Entre na pasta `mobile`:

```
cd mobile
```

2. Instale dependências (use `npm` ou `yarn`):

```
npm install
```

3. Rode o projeto Expo:

```
npm start
```

API de Produtos

A API usada como exemplo possui documentação Swagger em:

https://proweb.leoproti.com.br/swagger-ui/index.html

Os endpoints usados no scaffold são exemplares: `/produtos` e `/produtos/{id}` — verifique os nomes e rotas corretas na documentação da API.

Deploy (Web) — Vercel

1. Crie conta no Vercel e conecte ao GitHub
2. Selecione o repositório e a pasta `web/` como root do projeto
3. Configure build command: `npm run build` e output: `dist` (Vite)
4. Deploy e acesse o link gerado

Créditos e referências

- React: https://react.dev/
- Vite: https://vitejs.dev/
- React Router DOM: https://reactrouter.com/
- Expo: https://expo.dev/
- Swagger (API): https://proweb.leoproti.com.br/swagger-ui/index.html
