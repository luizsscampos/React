// Criando as rotas da aplicação
const routes = require('next-routes')();

module.exports = routes
    .add({ name: 'Home', pattern: '/', page: 'Home' })
    .add({ name: 'Product', pattern: '/product/:product', page: 'Product' });
