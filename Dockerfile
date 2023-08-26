FROM node:18-alpine as base

FROM base as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM base as prod

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=8080

COPY package.json yarn.lock ./

RUN yarn install --production

COPY --from=builder /app/dist ./

RUN addgroup -g 1001 -S nodejs
RUN adduser -S user99 -u 1001
RUN chown -R user99:nodejs /usr/src/app
USER user99

EXPOSE 8080

CMD [ "node", "/usr/src/app/main.js" ]
