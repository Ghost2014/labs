/**
 * Created by Ghost2015 on 2015/7/15.
 */
app.service('Index_service',function(){
    this.table = function()
    {
        return [
            {"id":1,"name":"绿巨人(浩克)","sex":"男","age":"34","county":"美国"},
            {"id":2,"name":"托尼·斯塔克","sex":"男","age":"34","county":"美国"},
            {"id":3,"name":"娜塔莎·诺曼罗夫","sex":"女","age":"40","county":"苏联"},
            {"id":4,"name":"史蒂夫·罗杰斯","sex":"男","age":"34","county":"美国"},
            {"id":5,"name":"巴顿","sex":"男","age":"34","county":"美国"},
            {"id":6,"name":"索尔·奥丁","sex":"男","age":"234","county":"阿斯基德"},
        ];
    }
})