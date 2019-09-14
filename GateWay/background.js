chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.event == "link") {
            $.ajax({
                url: request.url,
                data: { uname: "test" },
                type: "GET",
                headers: { "X-TOKEN": 'xxxxx' },
                success: function (data, status, xhr) { 
                    //alert(data);
                    var webHTML = data;
        
                    chrome.tabs.query({active: true, currentWindow: true}, function(){
                        chrome.tabs.sendMessage(sender.tab.id, {html: data}, function(response){
                            console.log(response.farewell);
                        });
                    });
                }
                
            });
        }
        sendResponse({farewell: "goodbye"});
    }
)



chrome.commands.onCommand.addListener(function(command) {

    //chrome.browserAction.setPopup(preview_popup.html)




    console.log('Command:', command);
    $.ajax({
        url: "https://www.nytimes.com/crosswords",
        data: { uname: "test" },
        type: "GET",
        headers: { "X-TOKEN": 'xxxxx' },
        success: function (data, status, xhr) { 
            alert(data);
            var webHTML = data;

            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {html: data}, function(response){
                    console.log(response.farewell);
                });
            });
        }
        
    });
  });