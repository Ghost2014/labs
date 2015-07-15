/**
 * Created by Ghost2015 on 2015/7/15.
 */
app.service('blog_service',function(){
    this.table = function()
    {
        return [
            {"id":1,"title":"可爱的大块头","writer":"娜塔莎·诺曼罗夫","date":"2015-07-15"},
            {"id":2,"title":"陈思进：金星为何租总统套房而不买房","writer":"陈思进","date":"2015-07-15"},
            {"id":3,"title":"优衣库不雅视频事件试出了谁的品味？","writer":"新浪新闻","date":"2015-07-15"},
            {"id":4,"title":"《大圣归来》怎成为分值最高的华语片","writer":"大圣归来","date":"2015-07-15"},
            {"id":5,"title":"你的“财商”为何败给骗子的“智商”","writer":"财商","date":"2015-07-15"},
            {"id":6,"title":"侯虹斌：胖一点的花木兰又伤害了谁","writer":"侯虹斌","date":"2015-07-15"},
            {"id":7,"title":"乔志峰：失物招领不妨学学“迪拜经验”","writer":"乔志峰","date":"2015-07-15"},
            {"id":8,"title":"蒋丰：“日本原产纸尿裤”隐藏的猫腻","writer":"蒋丰","date":"2015-07-15"},
        ];
    }
})