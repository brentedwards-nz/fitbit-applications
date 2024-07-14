#!/bin/bash

echo "Run: source ./scripts/set_node.sh"

clear
source $NVM_DIR/nvm.sh;
NODE_VERSION=`nvm ls | grep v14 | grep lts | tr -d '[:blank:]' | awk 'BEGIN {FS="-";}{print $1}'`
echo "NODE_VERSION: $NODE_VERSION"

echo "================================"
echo "Setting node version: 'v14.21.3'"
echo "================================"
nvm use v14.21.3
echo ""

nvm ls

APP_NAME=$1
echo "================================"
echo ""

if [ -n "${APP_NAME}" ]; then
  echo "================================"
  echo "Creating new fitbit application: '$APP_NAME'"
  echo "================================"
  echo ""

  npx create-fitbit-app $APP_NAME
  cd $APP_NAME
  echo ""
  echo "================================"
  echo "Application '$APP_NAME' ready..."
  echo "================================"
  echo ""
else
  echo "Node ready..."
fi