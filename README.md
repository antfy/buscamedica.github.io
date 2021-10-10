# buscamedica.github.io

### link para acesso:
https://antfy.github.io/buscamedica.github.io/

### tutorial "TensorFlow.js Training in Node.js" usado:
https://codelabs.developers.google.com/codelabs/tensorflowjs-nodejs-codelab#0

#### para acessar versão customizada:

##### setup
1. criar uma pasta chamada ./testbuscamedica

##### setup - FRONT END
2. baixar index.html, css, js, img, csv e adicionar todos na pasta 'testbuscamedica'

##### setup - NODE.JS
3. baixar o package.json, webpack.config.js e colocar na pasta 'testbuscamedica'
4. no terminal, fazer o comando (https://codelabs.developers.google.com/codelabs/tensorflowjs-nodejs-codelab#2): <br/>
      $ npm install
5. no terminal, fazer o comando (https://github.com/tensorflow/tfjs/tree/master/tfjs-node): <br/>
      $ npm install @tensorflow/tfjs-node <br/>
     (or) <br/>
      $ yarn add @tensorflow/tfjs-node <br/>
_obs: até o momento devem estar os seguintes arquivos no seu 'testbuscamedica': <br/>
node_modules, package.json, package-lock.json, webpack.config.js <br/>
index.html, css, js, img, csv_
6. baixar doctor_type, server.js, client.js e colocar na pasta 'testbuscamedica'
 
 ##### rodar
7. abrir no google chrome http://localhost:8080/
8. em um terminal, fazer comando (): <br/>
      $ npm run start-client <br/>
_obs: aparentemente você pode ignorar o passo 9. porque os passos seguintes funcionam independetemente_
9. em outro terminal, fazer comando (): <br/>
      $ npm run start-server <br/>
_obs: provavelmente vai lançar um erro nesse comando... eu ignorei por enquanto_
10. abrir o inspect element da página e ir para o console
11. mudar o grau de alguns sintomas e clicar no botão "buscar"
12. observar no console se está rodando os epochs - depois de 100 epochs deve aparecer um alert na página com a resposta da previsão 
