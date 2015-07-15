/**
 * Created by Ghost2015 on 2015/7/15.
 */

var oNav = document.getElementById('nav');
var oLi = oNav.getElementsByTagName('li');
var hash = window.location.hash.substring(2);
window.onhashchange = function()
{
    window.location.reload();
}
for(var i=0;i<oLi.length;i++)
{
    oLi[i].className = "";
    if(oLi[i].dataset.sref === hash)
    {
        oLi[i].className = "active";
    }
}