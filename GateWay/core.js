var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function (event){
        if(event.shiftKey){
            alert("test");
        }
    });
}
