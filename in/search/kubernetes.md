---
layout: search
title: Search Kubernetes
subtitle: Search code across Kubernetes and 34 of the most popular Kubernetes repos
callToActionTitle: Try it on your private code
callToActionText: Sign up
callToActionLink: /signup
---

<form class="cf search-form">
    <div class="search-input">
        <input type="text" name="search" id="search_box" placeholder="Search..." />
        <div class="filters">
            <div class="whole-word filter-icon" id="whole-word"><div class="inner-icon"></div></div>
            <div class="case-sensitive filter-icon" id="case-sensitive"><div class="inner-icon"></div></div>
            <div class="regex filter-icon" id="regex"><div class="inner-icon"></div></div>
        </div>
    </div>
    <input type="submit" value="Search" id="search_submit" />
    <input type="hidden" id="navigation" name="submit" value="" />
</form>
<span class="search-help">Try searching &quot;this thing&quot; or &quot;that&quot;</span>

<script type="text/javascript">

var handleCheck = function(e, el) {
    var set = null;
    if(this.className.indexOf('checked') === -1) {
        this.className += ' checked';
        set = true;
    } else {
        this.className = this.className.replace('checked', '');
        set = false;
    }
    if(this.id === "whole-word") {
        search.wholeWord = set;
    }
    if(this.id === "case-sensitive") {
        search.caseSensitive = set;
    }
    if(this.id === "regex") {
        search.regex = set;
    }
};

document.getElementById('whole-word').addEventListener('click', handleCheck);
document.getElementById('case-sensitive').addEventListener('click', handleCheck);
document.getElementById('regex').addEventListener('click', handleCheck);

var search = {
    pattern: null,
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

document.getElementById('search_box').onkeyup = function() {
    search.pattern = this.value;
    return false; 
}

var updateNav = function() {
    document.getElementById('navigation').value = `?search=${JSON.stringify(search)}`;
}

</script>