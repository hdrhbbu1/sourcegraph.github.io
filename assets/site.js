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