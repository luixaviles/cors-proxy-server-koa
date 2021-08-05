import Koa from 'koa';
import cors from '@koa/cors';
import proxy from 'koa-proxies';

const app: Koa = new Koa();
const port: number | string = process.env.PORT || 3000;

app.use(cors());

const proxyOptions: proxy.IKoaProxiesOptions = {
    target: 'https://app.mydomain.com',
    changeOrigin: true,
    logs: true,
}

app.use(
    proxy('/', proxyOptions)
);

app.listen(port);
console.log(`listening on port ${port}`);
