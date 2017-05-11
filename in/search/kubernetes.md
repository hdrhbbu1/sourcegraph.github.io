---
layout: docs
title: Search Kubernetes
---

<form onsubmit="return post();">
    <input type="text" name="search" id="search_box" />
    <input type="submit" value="Search" />
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