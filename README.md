# Conversor de Código para Sintaxe do Robot Framework

Este projeto é uma API simples desenvolvida com Node.js e Express que utiliza o modelo GPT-4 da OpenAI para converter
códigos de automação em outras linguagens para a sintaxe do Robot Framework.

## Funcionalidades

- Recebe um código de automação como entrada via POST request.
- Utiliza a API do OpenAI para converter o código recebido para a sintaxe do Robot Framework.
- Retorna apenas o código convertido, sem comentários ou explicações adicionais.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) com [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [OpenAI API](https://platform.openai.com/)
- [dotenv](https://www.npmjs.com/package/dotenv) para o gerenciamento de variáveis de ambiente

## Como Configurar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/leoportogtr86/conversor-robot.git
   cd conversor-robot
   ```

2. **Instale as dependências:**

   Certifique-se de ter o Node.js instalado em sua máquina.

   ```bash
   npm install
   ```

3. **Configuração da chave da API:**

   Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API da OpenAI:

   ```bash
   OPENAI_API_KEY=sua-chave-da-api-aqui
   ```

4. **Execute o servidor:**

   ```bash
   npm run start
   ```

   O servidor estará disponível em `http://localhost:3001`.

## Como Usar

1. **Enviar uma requisição POST:**

   Envie uma requisição POST para `http://localhost:3001/api` com um corpo JSON contendo o código que deseja converter:

   ```json
   {
       "code": "seu código aqui"
   }
   ```

2. **Receba a resposta:**

   A resposta será o código formatado na sintaxe do Robot Framework.

