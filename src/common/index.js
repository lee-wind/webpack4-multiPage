let apiPrefix;

switch (SERVER_ENV) {
    case 'development':
        console.log("本地");
        apiPrefix = "http://www.youku.com";
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
