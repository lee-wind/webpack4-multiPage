let apiPrefix;

switch (SERVER_ENV) {
    case 'development':
        console.log("本地");
        apiPrefix = "http://118.126.95.244:8080";
        break;
    case 'test':
        apiPrefix = "http://www.bilibili.com";
        console.log("测试");
        break;
    case 'production':
        apiPrefix = "http://www.baidu.com";
        console.log("正式");
        break;
}

export default apiPrefix;
