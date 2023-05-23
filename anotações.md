### Projeto 02

## Capítulo 01 aula 01 - Introdução

## Capítulo 01 aula 02 - Conhecendo o Fastify

- https://www.fastify.io/
- npm install fastify

## Capítulo 01 aula 03 - Entendendo o Typescript

- npm init -y
- src/index.js

* Runtime Type Checking - Quando o executo a aplicação é que consigo visualizar os erros. O ideal é que os erros sejam apresentados antes disso.
* Static Type Checking - Consegue ter no momento que está desenvolvendo a aplicação visualizar os erros.

- Ao alterar o arquivo é alterado para index.ts ele já acusa algum erro caso tenha algo.

- https://www.typescriptlang.org/
- npm i -D typescript
- npx tsc --init 
- Alterar o target para ES2020 inicialmente.

npx tsc src/index.ts para converter o arquivo para Javascript

Após pode executar comando no terminal node src/index.js

## Capítulo 01 aula 04 - Criando aplicação

- Converter o arquivo index.ts para server.ts
instalar o fastify
npm i fastify

Criando um hello world

- Instalando npm i @types/node -D
- Rodando npx tsc src/server.ts para gerar o arquivo server.js 
- Após rodar o comando node src/server.js
- No terminal vai aparecer o HTTP Server Running!
- Abrir um browser e passar a requisição http://localhost:3000/hello

- Para agilizar o processo de execução instalar o npm i tsx -D converte o código para javascript e executar o node no javascript.

- Para testar executar o comando npx tsx src/server.ts
- Para ver o tempo de execução pode utilizar o time conforme comando a seguir:
- time node src/server.js = real
- time tsx src/server.ts = real 

- Utilizar tsx somente no ambiente de desenvolvimento.

- Criar um script de teste de desenvolvimento com tsx e utilizando o comando watch para atualizar a escuta do terminal após cada alteração no código.

## Capítulo 01 aula 04 - Configurando o ESLint

- https://eslint.org/
- npm i eslint -D
- npm init @eslint/config
- npm i @rocketseat/eslint-config -D

- Criar um arquivo eslintrc.json na raiz do projeto

## Capítulo 02 aula 01 - Estratégias de acesso ao banco de dados

- Trabalhar com:
- SQLite3 como banco de dados relacional - https://sqlite.org/index.html
- Knex como SQL query builder - https://knexjs.org/

## Capítulo 02 aula 02 - Configurando o Knex

- npm i knex
- npm i sqlite3


## Capítulo 02 aula 03 - Criando primeira migration

- Migrations serve para gerar um histórico do versão de tabelas e mudanças do banco de dados
- Uma migrations tem uma tabela que o banco de dado anota quais itens de desse histórico já teve executou/passou por.
- Para ajustar o erro no terminal, inserir no  arquivo database, após o método de configuração "useNullAsDefault: true,"
- Criar um arquivo knexfile.ts e dentro do arquivo é importar as configurações do banco
- Passar as configurações do arquivo database por parâmetro utilizando o config
- npm run knex -- migrate:make create-transactions
- no script "node --no-warnings --loader tsx ./node_modules/knex/bin/cli.js" incluir o comando no warning para não aparecer erro 

## Capítulo 02 aula 04 - Criando tabela de transações

- Up criar uma tabela, dow remove uma tabela
- Alterado o nome da migration para create-transactions
- Criar a tabela no up e excluir/drop no down
- rodar comando  "npm run knex -- migrate:latest" para gerar tabela
- MIGRATION NÃO PODE SER EDITADA. APÓS CRIADA NUNCA MAIS ELA SERÁ EDITADA
- Pode desfazer a migration. Cuidar para migration sendo criada em times de desenvolvimento
- Para desfazer uma migration que ainda não foi enviada utilizar o comando "npm run knex -- migrate:rollback"
- Altera/ajusta a criação do campo, ou tabela, etc.
- Roda novamente "npm run knex -- migrate:latest" para gerar nova tabela
- Para adicionar alguma coluna utilizar o comando "add", exemplo: "npm run knex -- migrate:make add-session-id-to-transactions"
- Com o comando "after" é possível definir após qual coluna posso incluir a nova coluna, *alguns bancos não aceitam esse comando.
- Para deletar a coluna utilizar o drop column do alter table
- Após codificar os dados da nova coluna utilizar novamente o comando "npm run knex -- migrate:latest"


## Capítulo 02 aula 05 - Realizando queries com Knex

- Populando um teste na rota para teste 
- Fazer uma busca na rota para teste

## Capítulo 02 aula 06 - Variáveis de ambiente

- Instalar a extensão .env/DotENV no VSCode
- Instalar npm i dotenv
- Configurar as variáveis de ambiente dentro do .env
- Criar um arquivo.env.example e colocar quais são as variáveis que serão utilizadas, somente a chave e não o valor.

## Capítulo 02 aula 07 - Tratando env com Zod

- Criar pasta env dentro de src
- Dentro incluir o arquivo index.ts
- https://zod.dev/
- Instalar o zod npm i zod
- Configurando todas as variáveis de ambiente pelo index.ts da pasta env dentro do src as variáveis se tornam todas tipadas

## Capítulo 03 aula 01 - Requisitos da aplicação

- Definindo as regras funcionais e as regras de negócio

## Capítulo 03 aula 02 - Plugins do Fastify

- Plugins é a forma de separar o pedaços da aplicação, exemplo separar as rotas em pasta e arquivos diferentes
- exportar funções e receber por parâmetros, por exemplo a função receber o "app"
- Todo o plugin no Fastify deve ser assíncrono
- No parâmetro app deve ser instânciado pelo fastify usando o comando FastiifyInstance

## Capítulo 03 aula 03 - Criação de transações

- 

## Capítulo 03 aula 04 - Tipagem do Knex

## Capítulo 03 aula 05 - Listagem das transações

## Capítulo 03 aula 06 - Resumo das transações


## Capítulo 03 aula 07 - Utilizando cookies no Fastify


## Capítulo 03 aula 08 - Validando existência do cookie


## Capítulo 03 aula 09 - Configurando um hook global

