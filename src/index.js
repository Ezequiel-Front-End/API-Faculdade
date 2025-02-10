const express = require('express');
const app = express();
const PORT = 8080;
const usuarioRoutes = require('./routes/usuario_routes'); 

app.use(express.json()); // Para interpletar json no corpo de requisição Ezequiel
app.use('/usuarios', usuarioRoutes); // Rotas principais para o uso da APIs Ezequiel

// Apresentação da API
app.get('/', (req, res) => {
    res.send("<p> Essa API foi feita pelo Ezequiel e sua equipe de Desenvolvimento! </p>");
});

app.listen(PORT, ()=> {
    console.log(`O Servidor ja esta rodando na porta ${PORT}`); 
});

module.exports = app; // Exportação para funcionar na Vercel