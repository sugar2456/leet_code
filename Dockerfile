FROM node:25-slim

WORKDIR /app

# TypeScriptプロジェクト用のパッケージをインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# TypeScriptをグローバルにインストール
RUN npm install -g typescript

# TypeScriptのコンパイルとアプリケーションの実行
CMD ["npm", "start"]