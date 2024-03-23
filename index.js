import jwt from "jsonwebtoken";

// _______________ LADO DO SERVER ________________

// Essa é a senha usada para criar e traduzir o token
const senhaServer = "ABC1234";

const gerarToken = (user) => {
  const token = jwt.sign(user, senhaServer);
  return token;
};

const verificarToken = (token) => {
  try {
    return jwt.verify(token, senhaServer);
  } catch (err) {
    return err.message;
  }
};

// _______________ LADO DO CLIENTE ________________

// Usuário de exemplo
const userData = {
  id: 1,
  username: "lucas",
  senha: "1234",
};

const tokenRecebido = gerarToken(userData);
const response = verificarToken(tokenRecebido);

console.log(`O token recebido foi: ${tokenRecebido}`);
console.log("A resposta da verificação do token foi:", response);
