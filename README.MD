## CORS Solution using a Proxy Server and Koa

### JavaScript

```js
const Koa = require("koa");
const cors = require("@koa/cors");
const proxy = require("koa-proxies");
const app = new Koa();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(
  proxy("/", {
    target: "https://app.mydomain.com",
    changeOrigin: true,
    logs: true,
  })
);

app.listen(port);
console.log(`listening on port ${port}`);
```

### TypeScript

```ts
import Koa from "koa";
import cors from "@koa/cors";
import proxy from "koa-proxies";

const app: Koa = new Koa();
const port: number | string = process.env.PORT || 3000;

app.use(cors());

const proxyOptions: proxy.IKoaProxiesOptions = {
  target: "https://app.deliverychain.io",
  changeOrigin: true,
  logs: true,
};

app.use(proxy("/", proxyOptions));

app.listen(port);
console.log(`listening on port ${port}`);
```

Feel free to clone this repository and run both JavaScript and TypeScript versions of the Proxy Server to solve the CORS issue on your side.