# webpack4-multiPage
webpack4多入口多出口(多页面配置)   

webpack4指南：https://webpack.js.org/guides  

webpack.dev: 本地  
webpack.prod: 正式  
webpack.test: 测试

DefinePlugin：创建全局常量  
HotModuleReplacementPlugin：热模块替换  
ProvidePlugin：自动导入模块  
copy-webpack-plugin：复制文件或目录  
resolve.alias创建文件路径别名  
mini-css-extract-plugin：提取CSS  
purifycss-webpack：去除未引用的CSS  
optimize-css-assets-webpack-plugin：压缩CSS  
terser-webpack-plugin：缩小JavaScript  
splitChunks：拆分、优化代码  
babel-plugin-transform-remove-console：移除所有的console.*调用  
@babel/polyfill：ES6转ES5(https://babeljs.io/docs/en/usage)  
@babel/preset-env：配置目标环境，还可配置按需加载@babel/polyfill  
@babel/plugin-transform-runtime+@babel/runtime：  
    1、避免@babel/polyfill全局污染,  
    2、重复使用Babel注入的helper程序git代码来节省代码(避免编译输出中的重复)  
postcss-loader：为CSS添加浏览器前缀  
art-template-loader：JavaScript模板引擎  
px2rem-loader：px自动转rem  


自我定制：
    styleAttrInHtml.js(自定义了一个loader)将Html中style属性中的px转rem  
    pagination.js(构造函数+原型链自定义了一个分页插件)  
    settledApproval.html中的.select标签用于模拟表单元素select(css实现三角形)
    
(需要注意：页面会出现CSS后渲染的情况，查资料说dev环境下\<style>是异步的，我暂时未有解决办法)

