# 一个React SSR模板

基于create-react-app

自己升级babel7

服务端代码改造

# TODO

感觉可以把express的代码和构建服务端react代码分开

比如：在`webpack`构建完`target: node`的react代码回调里再`app.listen`，这样就避免了express的代码被构建

当然这样的话`import`都要换成`require`