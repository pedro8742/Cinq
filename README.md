Cinq-Back END Este repositório utiliza as dependências Express e Sequelize.

É necessário criar um banco de dados para poder ser realizada a autenticação com o sequelize.

1º Passo - Iniciar NPM Acesse o terminal e execute o seguinte comando para iniciar o NPM e suas dependências.

npm install

2º Passo - Conexão com Banco de Dados pelo Sequelize No Arquivo .env insira os dados do seu banco nos respectivos espaços:

"development": {
    "username": "root",
    "password": suaSenha,
    "database": "cinq_dev",
    "host": "localhost",
    "dialect": "mysql"
  }

3º Passo - para criar o banco pela primeira vez coloque o código abaixo:

primeiro crie o banco
npm run sequelize db:create

depois o código abaixo
npm run sequelize db:migrate

4º Passo - para dar start no sistema execute o código abaixo

npm start
