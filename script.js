function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    var a =parseFloat(p)+ parseFloat((p * t * r) /100);
    var year = (parseInt(new Date().getFullYear()))+parseInt(t)

    if (p==""){
        alert("Please enter Principle")
        p.focus();
        return false;
    }
    if (p<=0){
        alert("Please enter a positive number ")
        p.focus();
        return false;
    }

    document.getElementById("result").innerHTML="If you deposit <mark>"+p+"</mark>,\<br\>at an interest rate of <mark>"+r+"</mark>%\<br\>You will receive an amount of <mark>"+a+"</mark>,\<br\>in the year <mark>"+year+"<mark/>\<br\>"


}
function show_value(x)
{
 var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
