FROM nginx:1.21.6-alpine

COPY build /usr/share/nginx/html

#RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker build . -t 66567575/uf767fg767yyu && docker push 66567575/uf767fg767yyu
