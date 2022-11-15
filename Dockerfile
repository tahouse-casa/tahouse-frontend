# build environment
FROM node:16.14.2-alpine3.15 as builder
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
RUN npm install react-scripts@5.0.1 -g
COPY . .
RUN npm run build

# production environment
FROM nginx:1.23.2-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]