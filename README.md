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

## 同构 路由
npm install react-router-dom --save
客户端使用browserRouter
服务端使用staticRouter

1. react18 需要使用 hydrateRoot
`import { hydrateRoot } from 'react-dom/client'`
![react 18 document](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis)

2. Route 必须包裹在 Routes 当中
`import { Routes, Route } from 'react-router-dom'`

## 同构 Redux
npm install react-redux redux --save
1. 同构客户端和服务端
2. 通过注水和脱水，可以在服务器端初始化 redux的值

## 同构 样式
npm i isomorphic-style-loader
npm install css-loader postcss-loader style-loader -D

css-loader 需要使用3.6.0以下的版本，不然styles._getCss()打印出来是[object module]
并且webpack中需要开启modules