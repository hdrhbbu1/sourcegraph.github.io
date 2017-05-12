---
layout: search
title: Search Kubernetes
subtitle: Search code across webpack and 75 of the most popular webpack plugins
callToActionTitle: Try it on your private code
callToActionText: Sign up
callToActionLink: /signup
---

<form onsubmit="return post();" class="cf">
    <div class="search-input">
        <input type="text" name="search" id="search_box" />
        <div class="word-match filter-icon"><div class="inner-icon"></div></div>
        <div class="case-sensitive filter-icon"><div class="inner-icon"></div></div>
        <div class="regex filter-icon"><div class="inner-icon"></div></div>
    </div>
    <input type="submit" value="Search" id="search_submit" />
</form>

<script type="text/javascript">

var post = function() { 
    var value = document.getElementById('search_box').value;
    var search = {
        pattern: value,
        repositories: [
            "github.com/kubernetes/kubernetes",
            "github.com/golang/go"
        ]
    };
    window.location = "/?search=" + JSON.stringify(search); 
    return false; 
}

</script>