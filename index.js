const express = require('express');
const app = express();
// O Render define a porta automaticamente, então usamos process.env.PORT
const port = process.env.PORT || 3000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('*', (req, res) => {
    console.log(`[!] App bateu na porta: ${req.method} ${req.originalUrl}`);
    console.log(`[!] Dados:`, req.body || req.query);
    
    // A resposta que o Multiplayer Master exige para o login
    res.json({
        code: 200,
        token: "token_mestre_123_hack",
        imtoken: "token_chat_123_hack",
        activate: 1,
        gameServers: [] 
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`[+] Servidor Miragem Online na nuvem!`);
});
