// import '@babel/polyfill'

import settledApprovalArt from '../template/settledApproval.art'
import Pagination from 'Common/js/pagination.js'

import 'Common/reset.css'
import 'Common/common.scss'
import 'Common/css/header.scss'
import 'Common/css/aside.scss'
import 'Common/js/header.js'
import 'Common/js/aside.js'

import 'Common/css/pagination.scss'
import 'Css/settledApproval.scss'

//import '@babel/polyfill'

$(function(){
    console.log("入住审批" + apiPrefix);
})

$(function(){
    $('.tab-list').on('click', '.tab-item', function() {
        let $el = $(this);
        let index = $el.index();
        //console.log($el.hasClass('active'));
        //console.log( $('.tab-content').eq(index).show().siblings());
        if(!$el.hasClass('active')){
            $el.addClass('active').siblings().removeClass('active');
            $('.tab-content').eq(index).show().siblings().hide();
        }
    });
    $('.select-field').on('click', function(){
        $(this).next('.select-list').toggle();
    });
    $('.select-list').on('click', '.select-item', function(){
        let $selected = $(this).parent().prev().find('.selected');
        let $selectList = $(this).parent();
        $selected.find('.select-text').text($(this).find('.select-text').text());
        $selected.find('.select-value').text($(this).find('.select-value').text());
        $selectList.hide();
    });
    $('.agenda .search').on('click', function(){
        let page = 1;
        let pageSize = $('.agenda .select-field .select-text').text();
        console.log("搜索agenda: "+page+'，'+pageSize);
        getAgendaList(page, pageSize, 300);
        // console.log($('.selected .select-value').text());
    });
    $('.agenda .reset').on('click', function(){
        $('.agenda .select-field .select-text').text(10);
        $('.agenda .select-field .select-value').text(10);
        getAgendaList(1, 10, 100);
    });
    $('.done .search').on('click', function(){
        let page = 1;
        let pageSize = $('.done .select-field .select-text').text();
        console.log("搜索done: "+page+'，'+pageSize);
        getDoneList(page, pageSize, 500);
        // console.log($('.selected .select-value').text());
    });
    $('.done .reset').on('click', function(){
        $('.done .select-field .select-text').text(10);
        $('.done .select-field .select-value').text(10);
        getDoneList(1, 10, 250);
    });

    getAgendaList(1, 2, 100);
    getDoneList(1, 3, 90);
});

function getAgendaList(page, pageSize, total){
    const settledApproval = {
        agendaList: [{
            event: '服务商注册服务商注册服务商注册服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '12',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },]
    }
    const agendaList = settledApprovalArt(settledApproval);
    $('.agenda tbody').empty().append(agendaList);

    //console.log(Pagination);

    new Pagination({
        paginationContainer: '.agenda .pagination',
        page: page,
        pageSize: pageSize,
        totalNumber: total,
        //onclick: 'donePageSearch'
    });
    $(function(){
        $('.agenda .pagination a').on('click', function(){
            let page = $(this).attr('data-page');
            let pageSize = $('.agenda .select-field .select-text').text();
            console.log(page);
            console.log(pageSize);
            getAgendaList(page, pageSize, 200)
        })
    })
}
function getDoneList(page, pageSize, total){
    const settledApproval = {
        agendaList: [{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '12',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        },{
            event: '服务商注册',
            user: 'wind',
            organization: '深圳市黄昏有时有限公司',
            status: '待审核',
            time: '2018-10-10 09:56:21',
            id: '11',
        }]
    }
    const agendaList = settledApprovalArt(settledApproval);
    $('.done tbody').empty().append(agendaList);

    //console.log(Pagination);

    new Pagination({
        paginationContainer: '.done .pagination',
        page: page,
        pageSize: pageSize,
        totalNumber: total,
        //onclick: 'donePageSearch'
    });
    $(function(){
        $('.done .pagination a').on('click', function(){
            let page = $(this).attr('data-page');
            let pageSize = $('.done .select-field .select-text').text();
            console.log(page);
            console.log(pageSize);
            getDoneList(page, pageSize, 200)
        })
    })
}

if(module.hot){
    module.hot.accept();
}
