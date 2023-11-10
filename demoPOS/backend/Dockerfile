# start mongo first - readme_mongo_docker_standalone.md
# docker build -t react_backend .
# docker run --rm -e MONGO_HOST=172.17.0.2 -e MONGO_PORT=27017 -p 8081:8081 --name reactbackend react_backend
# docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mongo-dev
# docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' reactbackend
# docker-compose up
# docker-compose up -d
# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV ROOT_PATH=/usr/src/app/build 
COPY *.key ./build
EXPOSE 8081
CMD [ "node", "build/index.js" ]
