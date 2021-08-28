#####################################
##           Dependencies          ##
#####################################
# Install dependencies only when needed
FROM node:lts-alpine AS deps

# get the node environment to use
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-production}

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app
# copy the package.json to install dependencies
COPY package*.json yarn* ./
RUN yarn install --frozen-lockfile

#####################################
##               Build             ##
#####################################
FROM node:lts-alpine as builder

# some projects will fail without this variable set to true
ARG SKIP_PREFLIGHT_CHECK
ENV SKIP_PREFLIGHT_CHECK ${SKIP_PREFLIGHT_CHECK:-false}
ARG DISABLE_ESLINT_PLUGIN
ENV DISABLE_ESLINT_PLUGIN ${DISABLE_ESLINT_PLUGIN:-false}
# App specific build time variables (not always needed)
ARG REACT_APP_API_URL
ARG REACT_APP_API_URL ${REACT_APP_API_URL:-http://localhost}

WORKDIR /app

# build app for production with minification
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

#####################################
##               Release           ##
#####################################
FROM nginx:stable-alpine as release

# get the node environment to use
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-development}

ENV PORT 3000
ENV HOST 0.0.0.0

EXPOSE ${PORT}
EXPOSE 3000 80

# use a custom template for nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# bring the built files from the previous step
COPY --from=builder /app/.next /usr/share/nginx/html

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
