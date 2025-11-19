# 📦 Estudo de Caso — Aplicação Web + Mobile com Consumo de API

Este repositório contém o estudo de caso desenvolvido para a disciplina de **Desenvolvimento Profissional**, utilizando **React + Vite** na versão Web e **React Native + Expo** na versão Mobile.  
Ambas as aplicações consomem uma **API REST de produtos**, implementam **rotas**, **componentes reutilizáveis** e seguem boas práticas de desenvolvimento.

---

## 🗂️ Estrutura do Repositório

```
/meu-estudo-caso
│
├── web/       → Aplicação Web (React + Vite)
└── mobile/    → Aplicação Mobile (React Native + Expo)
```

---

# 🌐 Aplicação Web — React + Vite

## 🔧 Tecnologias Utilizadas
- React  
- Vite  
- React Router DOM  
- Axios  
- React Bootstrap  

## 🎯 Funcionalidades
- Página inicial listando os produtos  
- Página de detalhes do produto  
- Navegação entre rotas  
- Consumo da API REST de produtos  

## 🔗 API Utilizada
Documentação oficial:  
https://proweb.leoproti.com.br/swagger-ui/index.html

---

## 🚀 Deploy no Vercel (Web)
Passos básicos:
1. Criar conta no Vercel  
2. Conectar ao GitHub  
3. Selecionar o diretório `/web`  
4. Confirmar build (Vite)  
5. Publicar  

---

# 📱 Aplicação Mobile — React Native + Expo

## 🔧 Tecnologias Utilizadas
- React Native  
- Expo  
- React Navigation  
- Axios  
- React Native Paper (opcional)  

## 🎯 Funcionalidades
- Tela inicial com navegação para produtos  
- Tela de detalhes do produto  
- Consumo da mesma API da versão Web  
- Navegação com React Navigation  

---

# 🛠️ Como Executar o Projeto

## 📘 1. Clonar o repositório
```bash
git clone https://github.com/SEU_USUARIO/meu-estudo-caso.git
cd meu-estudo-caso
```

---

## 🌐 2. Rodar a Aplicação Web
```bash
cd web
npm install
npm run dev
```

A aplicação será iniciada em:  
http://localhost:5173/

---

## 📱 3. Rodar a Aplicação Mobile
```bash
cd mobile
npm install
npx expo start
```

Você poderá:
- Escanear o QR Code com o aplicativo Expo Go  
- Rodar em um emulador Android  
- Rodar em um emulador iOS (no Mac)  

---

# 🧭 Rotas Implementadas

## 🌐 Web — React Router DOM
| Rota | Descrição |
|------|-----------|
| `/` | Listagem de produtos |
| `/produto/:id` | Detalhes do produto |

## 📱 Mobile — React Navigation
| Tela | Descrição |
|------|-----------|
| `Home` | Tela inicial com menu de produtos |
| `Detalhes` | Exibe o produto selecionado |

---

# 📤 Envio para o GitHub
```bash
git init
git add .
git commit -m "Entrega do estudo de caso"
git remote add origin https://github.com/SEU_USUARIO/meu-estudo-caso.git
git push -u origin main
```

---

# 📚 Materiais de Apoio

- React Router DOM (Web)  
  https://www.youtube.com/watch?v=AZyfp0tbGJ4&t=1288s

- React Navigation (Mobile)  
  https://www.youtube.com/watch?v=iNewmFYHjIw

- Deploy com Vercel  
  https://www.youtube.com/watch?v=e_92Fz99q18

---

# 👤 Autor
**Adail Cipriano Neto**
