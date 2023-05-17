### Projeto 02

## Capítulo 01 aula 01 - Introdução

## Capítulo 01 aula 02 - Conhecendo o Fastfy

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

Utilizar tsx somente no ambiente de desenvolvimento.

Criar um script de teste de desenvolvimento



## Capítulo 01 aula 04 - Configurando o ESLint



