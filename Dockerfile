# production environment
FROM nginx:1.23.2-alpine

COPY ./build /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
