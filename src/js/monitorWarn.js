import 'Common/reset.css'
import 'Common/common.scss'

import 'Common/css/header.scss'
import 'Common/css/aside.scss'
import 'Common/js/header.js'
import 'Common/js/aside.js'

if(module.hot){
    module.hot.accept();
}

$(function(){
    console.log("监控预警" + apiPrefix);
})
