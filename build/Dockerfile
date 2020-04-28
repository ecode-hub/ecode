FROM node:11.11-alpine as builder
WORKDIR /app
ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock
RUN yarn
ADD . /app
RUN yarn build

FROM nginx:stable
RUN mkdir -p web/logs
COPY --from=builder app/dist/ /web/dist/
ADD build/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80