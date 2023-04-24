# Começa com uma imagem do node
FROM node:19-alpine3.16

# Especifica o diretório da imagem no qual todos os comandos serão executados
WORKDIR /usr/src/app

# Copia os arquivos do pacote e instala aas dependências
COPY package*.json ./
RUN npm install 

# Copia todos os arquivos da aplicação para a imagem
COPY . .

# O comando default a ser executado ao iniciar o conteiner 
CMD ["npm", "start"]

