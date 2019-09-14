chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        var linkHTML = request.html
        sendResponse({farewell: "goodbye"});
        alert(linkHTML);
    }
)
