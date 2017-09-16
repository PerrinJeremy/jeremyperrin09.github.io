window.onload = function () {

    var element = document.getElementById('cn-button');

    element.onclick = function () {
        var d = document.getElementById("cn-wrapper").classList;
        if (d.contains("opened-nav")) {
            
               d.remove("opened-nav");
            
            } else {
            
               d.add("opened-nav");
            }
    }
}
