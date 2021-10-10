# buscamedica.github.io

### link para acesso:
https://antfy.github.io/buscamedica.github.io/

### tutorial "TensorFlow.js Training in Node.js" usado:
https://codelabs.developers.google.com/codelabs/tensorflowjs-nodejs-codelab#0

#### para acessar versão customizada:

##### setup
1. FRONT END
  a. baixar index.html, css, js, img, csv
2. NODE.JS
  a. criar uma pasta chamada ./testbuscamedica
  b. baixar o package.json, webpack.config.js e colocar na pasta 'testbuscamedica'
  c. no terminal, fazer o comando (https://codelabs.developers.google.com/codelabs/tensorflowjs-nodejs-codelab#2):
    npm install
  d. no terminal, fazer o comando (https://github.com/tensorflow/tfjs/tree/master/tfjs-node):
    <npm install @tensorflow/tfjs-node
    (or)
    yarn add @tensorflow/tfjs-node>
  e. baixar doctor_type, server.js, client.js e colocar na pasta 'testbuscamedica'
 
 ##### rodar
 3. abrir no google chorme http://localhost:8080/
 4. em um terminal, fazer comando ():
    npm run start-client
 5. em outro terminal, fazer comando ():
    npm run start-server
 obs: provavelmente vai lançar um erro... eu ignorei por enquanto
 6. abrir o inspect element da página e ir para o console
 7. mudar o grau de alguns sintomas e clicar no botão "buscar"
 8. observar no console se está rodando os epochs - depois de 100 epochs deve aparecer um alert na página com a resposta da previsão
   
