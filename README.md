## 依赖
npm install express -save
npm install react react-dom --save
npm install webpack webpack-cli webpack-node-externals --save-dev
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-function-bind --save-dev
// @babel/plugin-proposal-function-bind same as stage-0
npm install --save-dev npm-run-all

## 项目启动
npm run dev

## 同构 js事件
同步客户端和服务器端，如果不引入同构概念，node渲染的页面（renderToString）无法处理事件

## 同步 路由
npm install react-router-dom --save
客户端使用browserRouter
服务端使用staticRouter