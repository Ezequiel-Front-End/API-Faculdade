let usuarios = []; // Simulação de banco de dados na memória

// Buscar todos os usuários
exports.getTodosUsuarios = (req, res) => {
    console.log(usuarios.length);

    if(usuarios.length == 0) {
        res.send("<p> Nenhuma informação cadastrada no momento! </p> ");
    }

    return res.json(usuarios);
};

// Buscar um usuário por ID
exports.getUsuarioPorId = (req, res) => {

    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json({
        message: `O ID filtrado foi ${usuario.id}`,
        response: usuario
    });
};

// Criar um novo usuário
exports.criarUsuario = (req, res) => {

    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ mensagem: "Nome e email são obrigatórios" });
    }

    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email
    };

    usuarios.push(novoUsuario);

    res.status(201).json(
        {
            message: "Novo usuario criado",
            responde: novoUsuario
        }
    );

};

// Atualizar um usuário
exports.atualizarUsuario = (req, res) => {

    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    const nomeAntigo = usuario.nome;
    const emailAntigo = usuario.email;

    const { nome, email } = req.body;

    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;

    res.json({
        message: `Dados Alterados: Nome ${nomeAntigo} para ${nome} e Email ${emailAntigo} para ${email}`,
        response: usuario
    });

};

// Deletar um usuário
exports.deletarUsuario = (req, res) => {

    const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    usuarios.splice(index, 1);

    return res.status(200).json(
        {
            message: 'Usuario deletado!',
            response: `O nome do Usuario é ${usuario.nome}`
        }
    );

};
