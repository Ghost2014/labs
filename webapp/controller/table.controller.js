/**
 * Created by Ghost on 2015/7/17.
 * 报表控制器
 */
'use strict';
app.controller("table",["$scope",function($scope){
    var url = "demoData/data.json";
    $scope.tableOption = {
       // url:url,
        //resultTag:"res_collection",
        //columns: [
        //    {
        //        field: 'id',
        //        title:'<label class="i-checks i-isin-checks m-b-none"><input type="checkbox" name="btSelectAll" value=""><i></i></label>',
        //        align: 'center',
        //        width:"20%",
        //        formatter:function(value,row,index){
        //            return '<label class="i-checks i-isin-checks m-b-none"><input type="checkbox" name="btSelectItem" data-index="' + index + '" value=' + row.id + '><i></i></label>';
        //        }
        //    },
        //    {
        //        field: 'statusName',
        //        title: '状态',
        //        align: 'center',
        //        width:"20%",
        //        sortable: false,
        //        formatter: function(value, row){
        //            var statusName = "";
        //            for(var i=0;i<$scope.statusList.length;i++){
        //                if($scope.statusList[i].code == row.run_status){
        //                    statusName = $scope.statusList[i].name;
        //                }
        //            };
        //            return '<span class="label bg-info" style="font-size: 90%; font-weight: normal;">' + statusName + '</span>';
        //        }
        //    },
        //    {
        //        field: 'name',
        //        title: '设备名称',
        //        align: 'center',
        //        width:"20%",
        //        sortable: false,
        //        formatter: function(value, row){
        //            return '<a class="text-info" href="#/app/resou/dev_info/' + row.id + '" title="详细信息">' +  row.name + '</a>';
        //        }
        //    },
        //    {
        //        field: 'ip',
        //        title: '设备IP',
        //        align: 'center',
        //        width:"20%",
        //        sortable: false,
        //        formatter:function(value,row){
        //            return "<span>" + row.ip + "</span>";
        //        }
        //    },
        //    {
        //        field: 'type',
        //        title: '设备型号',
        //        width:"20%",
        //        align: 'center',
        //        sortable: false,
        //        formatter:function(value,row){
        //            return "<span>" + row.type + "</span>";
        //        }
        //    }
        //],

        columns: [
            {field:"id",title:"ID",align:"center",valign:"middle",sortable:false,width:"25%"},
            {field:"name",title:"姓名",align:"center",valign:"middle",sortable:false,width:"25%"},
            {field:"age",title:"年龄",align:"center",valign:"middle",sortable:false,width:"25%"},
            {field:"sex",title:"性别",align:"center",valign:"middle",sortable:false,width:"25%"},
        ],

        data : [
            {id:"1",name:"复仇者集合",age:34,sex:"女"}
        ]
    };
}]);