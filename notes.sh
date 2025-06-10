#!/bin/bash

# install dependencies
yarn

# run dev server
yarn start

# redux-toolkit
yarn add @reduxjs/toolkit

# stripe
yarn add @stripe/stripe-js @stripe/react-stripe-js

yarn add stripe dotenv

# netlify CLI
npm install -g netlify-cli

netlify
netlify login
netlify dev
