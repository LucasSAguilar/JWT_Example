import jwt from "jsonwebtoken";

// _______________ LADO DO SERVER ________________

// Essa é a senha usada para criar e traduzir o token
const senhaServer = "ABC1234";

// JWT expirando em 2 segundos
const gerarToken = (user) => {
  const token = jwt.sign(user, senhaServer, {expiresIn: '2s'});
  return token;
};

const verificarToken = (token) => {
  try {
    const data = jwt.verify(token, senhaServer);
    console.log("Usuário: ", data.username);
    console.log("Autorização do tipo: ", data.autorizacao);
    return data
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};

// _______________ LADO DO CLIENTE ________________

// Usuário de exemplo
const user_01 = {
  id: 1,
  username: "lucas",
  senha: "1234",
  autorizacao: "básica"
};

const user_02 = {
  id: 2,
  username: "gabi",
  senha: "5678",
  autorizacao: "máxima"
};


const tokenUserUm = gerarToken(user_01);
const tokenUserDois = gerarToken(user_02);

verificarToken(tokenUserUm);
verificarToken(tokenUserDois);

// Exibindo o JWT quando expirar (mensagem de erro)

setTimeout(()=>{
  verificarToken(tokenUserUm)
}, 3000)

