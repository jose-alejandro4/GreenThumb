# 🌿 GreenThumb

Aplicativo mobile desenvolvido em *React Native* que simula uma loja de plantas e materiais de jardinagem.
O usuário pode navegar pelos produtos, visualizar detalhes, adicionar ao carrinho e realizar compras.

---

- Funcionalidades

* Login e cadastro com Firebase * Listagem de plantas
* Listagem de materiais de jardinagem
* Visualização de detalhes dos produtos
* Adição e remoção de itens no carrinho
*  Limpar carrinho
* Escolha de método de pagamento
*  Tela de confirmação de compra

---

> Tecnologias utilizadas

* React Native
* Expo
* Firebase Authentication
* JavaScript
* React Navigation

---

> Estrutura do projeto

src/
 ├── components/   # Componentes reutilizáveis (botões, cards)
 ├── data/         # Dados das plantas e materiais
 ├── screens/      # Telas do aplicativo
 ├── services/     # Configuração do Firebase
 ├── styles/       # Estilos globais
---

> Como instalar e executar

(!) Clonar o repositório

bash
git clone (link do github) 
cd GreenThumb

---

(!!)  Instalar dependências

bash
npm install

ou

bash
yarn install

---

(!!!)  Configurar o Firebase

Crie um arquivo:

src/services/firebaseConfig.js

E adicione sua configuração:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYX8LJSys8wJTz54aarDMahNSqvEGBS3U",
  authDomain: "greenthumb-c42fe.firebaseapp.com",
  projectId: "greenthumb-c42fe",
  storageBucket: "greenthumb-c42fe.firebasestorage.app",
  messagingSenderId: "1067977556307",
  appId: "1:1067977556307:web:4157ad9e1689cf097f61a6",
  measurementId: "G-0JTB8TVQMH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 

---

(!!!!)  Rodar o projeto

bash
npx expo start

---

(!!!!!)  Executar no celular

* Baixe o app *Expo Go*
* Escaneie o QR Code exibido no terminal

---

> Como usar o app

1. Criar uma conta ou fazer login
2. Escolher entre *Plantas* ou *Materiais*
3. Visualizar produtos
4. Clicar para ver detalhes
5. Adicionar ao carrinho
6. Acessar o carrinho
7. Escolher método de pagamento
8. Finalizar compra

---

> Objetivo do projeto

Este projeto foi desenvolvido para atender aos requisitos de um trabalho acadêmico, incluindo:

* Uso de componentes do React Native
* Navegação entre telas
* Manipulação de dados
* Interface funcional
* Integração com Firebase

---

> Integrantes

* Maria Eduarda Pereira Celestino (01811588)
* José Alejandro Teixeira da Silva (01796473)
* Letícia Oliveira Santos (01807942)
* Matheus Werbeth Sousa Lourenço (01817298)

---

> Observações

* Este aplicativo é apenas um protótipo educacional
* Não possui integração com pagamentos reais

---

> Demonstração
div align="center"
img src="<img width="738" height="1600" alt="Image" src="https://github.com/user-attachments/assets/5b814fb0-0fcf-4900-87ea-1aeff099f53e" />" width="100px" /
img src="<img width="738" height="1600" alt="Image" src="https://github.com/user-attachments/assets/9afac2fd-646f-4a05-95f9-b92af3fe51e2" />" width="100px" /
img src="<img width="738" height="1600" alt="Image" src="https://github.com/user-attachments/assets/328dd486-c5e0-41ed-9b88-54ec88924187" />" width="100px" /



/div

---

> Licença

Este projeto é apenas para fins acadêmicos.
