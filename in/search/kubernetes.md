---
layout: docs
title: Search Kubernetes
---

<form onsubmit="return post();">
    <input type="text" id="search_box" />
    <input type="submit" value="Search" />
</form>

<script type="text/javascript">

var post = function() { 
    console.log("submit", arguments);
    var value = document.getElementById('search_box').value;
    var search = {
        pattern: value,
        repos: [
            "github.com/kubernetes/kubernetes",
            "github.com/golang/go"
        ]
    };
    window.location = "https://sourcegraph.com/?search=" + JSON.stringify(search); 
    return false; 
}


</script>