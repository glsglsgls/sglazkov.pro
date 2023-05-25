FROM nginx:1.24.0-alpine as runtime
ENV WORKDIR=/srv/www
COPY ./src/index.html $WORKDIR
COPY nginx.conf /etc/nginx
# USER nginx
