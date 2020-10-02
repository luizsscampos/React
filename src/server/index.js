// Iniciando o servidor, instanciando as rotas, verificando se é dev ou prod e iniciando a aplicação.
const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_EVN !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const port = process.env.PORT || 3000;

app.prepare().then(() => {
    createServer(handler).listen(port, () => {
        console.info(`Server listening on port: ${port}`)
    })
});
