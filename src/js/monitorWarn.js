// import '@babel/polyfill'

import 'Common/reset.css'
import 'Common/common.scss'

import 'Common/css/header.scss'
import 'Common/css/aside.scss'
import 'Common/js/header.js'
import 'Common/js/aside.js'

import 'Css/monitorWarn.scss'

if(module.hot){
    module.hot.accept();
}

$(function(){
    console.log("监控预警" + apiPrefix);
    console.log([5, 6, 7].findIndex(item => item === 6));
})
