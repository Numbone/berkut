FROM node:18 as builder

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app

RUN cd /app && npm install
COPY . /app

ARG VITE_API_URL
ENV VITE_API_URL ${VITE_API_URL}

RUN cd /app && npm run build

FROM nginx:1.14.2-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]