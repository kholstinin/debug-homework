const e=require("node:http");let salt=0;debugger;e.createServer(((e,t)=>{t.writeHead(200),t.end(Buffer.from(`some${salt}random`).toString("base64"))})).listen(8e3);