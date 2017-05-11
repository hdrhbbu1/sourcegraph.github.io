---
layout: docs
title: Search Kubernetes
---
<!--onsubmit="return post();"-->
<form method="get" action="/">
    <input type="text" name="search" id="search_box" />
    <input type="submit" value="Search" />
</form>

<script type="text/javascript">

var post = function() { 
    return false;
    var value = document.getElementById('search_box').value;
    var search = {
        pattern: value,
        repos: [
            "github.com/kubernetes/kubernetes",
            "github.com/golang/go"
        ]
    };
    window.location = "/sourcegraph/checkup/fs.go?master&search=" + JSON.stringify(search); 
    return false; 
}

</script>