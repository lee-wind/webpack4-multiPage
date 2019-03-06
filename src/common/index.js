import 'Common/reset.css'
import 'Common/common.scss'

// import 'Common/flexible.js'

import 'Common/js/header.js'
import 'Common/js/aside.js'

let ip;

switch (process.NODE_ENV) {
    case 'development':
        console.log("本地");
        if(module.hot){
            module.hot.accept();
        }
        break;
    case 'test':
        console.log("测试");
        break;
    case 'prod':
        console.log("正式");
        break;
}
export default ip;