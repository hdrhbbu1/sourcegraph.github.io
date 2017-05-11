---
layout: docs
title: Search Kubernetes
---
<!--onsubmit="return post();"-->
<form method="get" action="/sourcegraph/checkup/fs.go">
    <input type="text" name="search" id="search_box" />
    <input type="submit" value="Search" />
</form>

<form onsubmit="return post();">
    <input type="text" name="search" id="search_box" />
    <input type="submit" value="Search" />
</form>

<script type="text/javascript">

var post = function() { 
    var value = document.getElementById('search_box').value;
    var search = {
        pattern: value,
        repos: [
            "github.com/kubernetes/kubernetes",
            "github.com/golang/go"
        ]
    };
    window.location = "../sourcegraph/checkup/fs.go?master&search=" + JSON.stringify(search); 
    return false; 
}

</script>