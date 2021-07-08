const Koa = require('koa');
const cors = require('@koa/cors');
const proxy = require('koa-proxies');
const app = new Koa();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(
    proxy('/', {
        target: 'https://app.deliverychain.io',
        changeOrigin: true,
        logs: true,
    })
);

app.listen(port);
console.log(`listening on port ${port}`);
