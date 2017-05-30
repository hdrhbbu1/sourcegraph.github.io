var quoteSpeed = 5000;

$(function() {
    var quotes = $("#quotes .quote");
    if (quotes.length !== 0) {
        setTimeout(switchQuote, quoteSpeed, quotes);        
    }
});

var switchQuote = function(quotes) {
    var l = quotes.length,
        active = 0,
        next = 0;
    for (var i = 0; i < l; i++) {
        if($(quotes[i]).hasClass('active')) {
            active = i;
            break;
        }
    }
    next = active + 1 === l ? 0 : active + 1;
    $(quotes[active]).removeClass('active');
    $(quotes[next]).addClass('active');
    setTimeout(switchQuote, quoteSpeed, quotes);
};

/* For handling Development mode */
$(function() {
    var host = getParameterByName('host');
    if(host) {
        console.log(host, 'found');
        document.querySelectorAll('a[data-type="app-link"]').forEach(function(el) {
            console.log("app link", el);
            el.setAttribute("href", el.getAttribute("href").replace("https://sourcegraph.com", "http://" + host));
        });
    }
});
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}