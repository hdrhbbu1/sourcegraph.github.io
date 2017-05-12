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
            "github.com/kubernetes/helm",
            "github.com/kubernetes/kops",
            "github.com/kubernetes/kube-aggregator",
            "github.com/kubernetes/apimachinery",
            "github.com/kubernetes/autoscaler",
            "github.com/kubernetes/heapster",
            "github.com/kubernetes/kube-state-metrics",
            "github.com/kubernetes/perf-tests",
            "github.com/kubernetes/dns",
            "github.com/kubernetes/gengo",
            "github.com/kubernetes/frakti",
            "github.com/kubernetes/git-sync",
            "github.com/kubernetes/kubectl",
            "github.com/kubernetes/metrics",
            "github.com/coreos/etcd",
            "github.com/kubernetes/client-go",
            "github.com/coreos/tectonic-installer",
            "github.com/coreos/prometheus-operator",
            "github.com/coreos/matchbox",
            "github.com/coreos/mantle",
            "github.com/coreos/flannel",
            "github.com/coreos/clair",
            "github.com/coreos/dex",
            "github.com/coreos/etcd-operator",
            "github.com/Mirantis/k8s-externalipcontroller",
            "github.com/sapcc/kube-parrot",
            "github.com/apprenda/kismatic",
            "github.com/coreos/tectonic-installer",
            "github.com/ElasticBox/elastickube",
            "github.com/rancher/rancher-cloud-controller-manager",
            "github.com/deis/steward"
        ]
    };
    window.location = "/?search=" + JSON.stringify(search); 
    return false; 
}

</script>