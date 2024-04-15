ARG NODE_IMAGE=node:16.14-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init curl bash

RUN curl -L https://unpkg.com/@pnpm/self-installer | node

RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN pnpm install
COPY --chown=node:node . .

FROM dependencies AS build
RUN node ace build --production

FROM base AS production
ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=0.0.0.0
COPY --chown=node:node ./package*.json ./
RUN pnpm install --production
COPY --chown=node:node --from=build /home/node/app/build .
EXPOSE $PORT
CMD [ "dumb-init", "node", "server.js" ]
