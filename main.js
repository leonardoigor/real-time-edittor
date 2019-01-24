function refresh()
{
    var text=document.getElementById("ed").value;
    document.getElementById("screen").srcdoc=text;
}

window.onload=function padraohtml()
{
    var part1="<!DOCTYPE html>"
    var part2="<html>";
    var part3="<head>";
    var part4="      <meta charset='UTF-8'/>";
    var part5="      <title>Page</title>";
    var part6="</head>";
    var part7="<body>";
    var part8="<!-- Conteúdo -->";
    var part9="</body>";
    var part10="</html>";
    
    var tex=document.getElementById("ed").value=(part1+"\n" +part2+"\n"+part3+"\n" +part4+"\n"+part5+"\n" + part6+"\n" + part7+"\n" + part8+"\n" + part9+"\n" + part10);
}