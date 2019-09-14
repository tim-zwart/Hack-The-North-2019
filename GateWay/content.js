var links = document.getElementsByTagName('a');


// Shift then hover to open preview
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function (event){
        this.classList.add("currentlyHovered");        
    });
}

// Remove hovered class when no longer hovering
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseout', function (event) {
        this.classList.remove("currentlyHovered");
    });
}

// Can also hover then shift
document.addEventListener ("keydown", function (zEvent) {
    var items = document.getElementsByClassName("currentlyHovered");
    if (zEvent.shiftKey && items.length == 1) {
        alert("Preview");
        chrome.runtime.sendMessage({
            event: "link",
            url: this.href
        });
    }
} );


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        var linkHTML = request.html
        sendResponse({farewell: "goodbye"});
        console.log(linkHTML);


    }
)
