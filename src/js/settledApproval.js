import 'Common/reset.css'
import 'Common/common.scss'

import 'Common/css/header.scss'
import 'Common/css/aside.scss'
import 'Common/js/header.js'
import 'Common/js/aside.js'


import 'Css/settledApproval.scss'


if(module.hot){
    module.hot.accept();
}

$(function(){
    console.log("入住审批" + apiPrefix);
})

$(function(){
    $('.tab-list').on('click', '.tab-item', function() {
        let $el = $(this);
        let index = $el.index();
        console.log($el.hasClass('active'));
        console.log( $('.tab-content').eq(index).show().siblings());
        if(!$el.hasClass('active')){
            $el.addClass('active').siblings().removeClass('active');
            $('.tab-content').eq(index).show().siblings().hide();
        }
    })
});


