var links = document.getElementsByTagName('a');


for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function (event){
        if(event.shiftKey){
            chrome.runtime.sendMessage({
                event: "link",
                url: this.href
            });
        }
    });
}



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        var linkHTML = request.html
        sendResponse({farewell: "goodbye"});
        console.log(linkHTML);


    }
)
