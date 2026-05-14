import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  // 🌿 TELA BASE
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5fff7'
  },

  // 📝 TÍTULOS
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2e7d32',
    textAlign: 'center'
  },

  // 🔝 HEADER COM CARRINHO
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },

  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32'
  },

  cartButton: {
    fontSize: 18,
    backgroundColor: '#a5d6a7',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    color: '#1b5e20',
    fontWeight: 'bold'
  },

  // 🧩 CARDS (produtos)
  card: {
    backgroundColor: '#ffffff',
    padding: 12,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 3
  },

  // 🖼️ IMAGENS
  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 10
  },

  // 🌱 NOME
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b5e20'
  },

  // 💰 PREÇO
  price: {
    fontSize: 14,
    color: '#388e3c',
    marginBottom: 8
  },

  // 🟢 BOTÕES
  button: {
    backgroundColor: '#a5d6a7',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    alignItems: 'center'
  },

  buttonText: {
    color: '#1b5e20',
    fontWeight: 'bold',
    fontSize: 15
  },

  // 🛍️ CATEGORIAS (PLANTAS / MATERIAIS)
  categoryCard: {
    backgroundColor: '#c8e6c9',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3
  },

  categoryImage: {
    width: '100%',
    height: 150
  },

  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 12,
    color: '#1b5e20',
    textAlign: 'center'
  },

  // 🛒 ITENS DO CARRINHO
  cartItem: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2
  },

  cartText: {
    fontSize: 15,
    color: '#2e7d32'
  },

  // 💳 PAGAMENTO
  paymentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#1b5e20'
  }

});