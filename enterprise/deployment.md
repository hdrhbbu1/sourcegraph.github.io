---
layout: markdown
title: Enterprise deployment
subtitle: Self-contained, easy to update, and simple to manage
---

# Sourcegraph Enterprise technical specifications

Sourcegraph is a fast, intelligent code search and navigation platform. Sourcegraph Enterprise provides the same features as [Sourcegraph.com](https://sourcegraph.com) on your team's private code hosted on-premises or in a private cloud.

Sourcegraph Enterprise is designed to be self-contained, easy to update, and simple to manage. Using Kubernetes Helm, it can be deployed and updated with a single command.

Visit our [enterprise](/enterprise) page or <a class="intercom-toggle" href="#">contact us</a> to learn more about Sourcegraph Enterprise, scalability, and security.

## Services

A Sourcegraph instance is backed by several microservices:

- `frontend`: Serves the frontend (a JavaScript app) and provides HTTP and GraphQL API endpoints.
- `indexer`: Handles asynchronous code indexing jobs (does not require any external S3-like object storage).
- `gitserver`: Caches underlying git data and makes it accessible via internal API to other Sourcegraph services.
- `github-proxy`: Caching proxy to the GitHub API.
- `searcher`: Fast text-based search operations over repositories.
- `lsp-proxy`: Multiplexes frontend Code Intelligence requests to individual language servers.
- `xlang-${LANG}`: Individual language servers provide Code Intelligence over the Language Server Protocol (LSP).
- `redis`: Redis instance for persistent global caches.
- `postgres`: Postgres instance for user and organization metadata and some persisted indexes.

Typically, these are all run inside their own [Docker](https://www.docker.com/) containers, which are orchestrated by [Kubernetes](https://kubernetes.io/) and managed by [Helm](https://helm.sh/).
 
By default, Sourcegraph communicates with some external services, all of which can be turned off if desired:

- GitHub.com API for metadata about GitHub.com repositories. This can be turned off.
- Anonymized usage data sent to a secure usage data warehouse managed by Sourcegraph. This can be replaced with an on-premises [oklog](https://github.com/oklog/oklog)  instance, or turned off entirely.
- Fetching dependencies from package repositories like npm or Maven Central. If your developers do not download dependencies from a public package repository and instead rely on something like a private npm or Artifactory instance, you can restrict dependency fetching to those.

## Deployment

Sourcegraph is deployed on-premises via [Kubernetes](https://kubernetes.io/) and [Helm](https://helm.sh/). Helm is the Kubernetes package manager, and makes it easy to create and update the Kubernetes environment so that you can keep your local Sourcegraph instance up to date with the latest improvements shipped to Sourcegraph.com.

Deploying via Kubernetes makes it possible to run Sourcegraph on almost every major IaaS provider, including AWS, Google Cloud, DigitalOcean, and Microsoft Azure. The only hard requirement is a dedicated Kubernetes cluster into which you can install Helm. You can also run Sourcegraph on bare metal, though in this case you will have to manage your own Kubernetes cluster.

The rough deployment steps are as follows:
1. Set up your Kubernetes cluster.
    1. Create the Kubernetes cluster and make sure `KUBECONFIG` is set to the appropriate value.
    1. Add the secret that permits your cluster to pull images from the Sourcegraph Docker registry.<br>`kubectl create secret docker-registry ...`
    1. Set up the git SSH secret that permits Sourcegraph to clone from your git host.<br>`kubectl create secret generic gitserver-ssh ...`
    1. (AWS-only) Set up the AWS storage class.<br>`kubectl create -f aws-storage-class.yaml`
    1. Set any custom configuration (via a Kubernetes YAML file).
    1. Install Helm into the cluster.
1. Run `helm install ...` with the configuration you created above and the Helm charts provided by Sourcegraph.

### Upgrade

Upgrades are typically done with a single Helm command like `helm upgrade sourcegraph ...`. 

Sourcegraph makes new releases available to on-premises customers on a regular basis, plus bug fixes and patches on an as-needed basis. 

## Resource requirements

Resource requirements are flexible. Technically, a working Sourcegraph instance needs only one instance of each service to function properly. 
For performance reasons, you may want to run more than one instance of certain services. As a point of comparison, here is the resource utilization of one customer that hosts several thousand repositories on their Sourcegraph on-premises instance:

|   | # pods | CPUs per pod | Memory per pod (GB) |
| --- | ---: | ---: | ---: |
| frontend | 3 | 1 | 5 |
| gitserver | 1 | 4 | 8 |
| indexer | 1 | 1 | 1 |
| github-proxy | 1 | 1 | 1 |
| pgsql | 1 | 4 | 2 |
| prometheus | 1 | 4 | 8 |
| redis-cache | 1 | 1 | 6 |
| redis-store | 1 | 1 | 6 |
| searcher | 4 | 2 | 1 |
| lsp-proxy | 1 | 1 | 8 |
| xlang-go | 8 | 4 | 8 |
| xlang-go-bg | 1 | 4 | 8 |
| xlang-java | 4 | 4 | 8 |
| xlang-java-bg | 1 | 4 | 8 |
| **Total** | **29** | **36** | **78** |

## Stats and monitoring

Optionally, Sourcegraph can log usage and telemetry information to a [Prometheus](https://prometheus.io/) instance. Prometheus integrates with many monitoring and dashboard tools (e.g., [Grafana](https://grafana.com/)) and exposes a rich API for creating dashboards and alerts tied to the health of your Sourcegraph instance. Depending on your needs, you can either use the standard Prometheus and Grafana configuration provided by Sourcegraph, or set up a pipeline from Prometheus to the monitoring tool of your choice.

Optionally, Sourcegraph can also log anonymized frontend and extension usage data. This data is by default stored in a secure external usage data warehouse managed by Sourcegraph. Alternatively, this information can be directed to an [oklog](https://github.com/oklog/oklog) instance running in your on-premises Kubernetes cluster. This logging can also be turned off entirely. 

## Integrations and extensions

Sourcegraph provides your organization with both an internal website for reading, searching, and exploring code, similar to [Sourcegraph.com](https://sourcegraph.com), and several tools to bring Code Intelligence from Sourcegraph to your team wherever they read code. Our integrations include:

### Browser extensions and code host integrations
For on-premises code hosted on GitHub Enterprise, the popular [Sourcegraph Chrome extension](https://chrome.google.com/webstore/detail/sourcegraph-for-github/dgjhfomjieaadpoljlnidmbgkdffpack?hl=en) and [Sourcegraph Firefox extension](https://addons.mozilla.org/en-us/firefox/addon/sourcegraph-addon-for-github/) can be configured to communicate with your local Sourcegraph instance (rather than Sourcegraph.com), so that your users can get their benefits on your private code, too.

For companies using Phabricator or Bitbucket Server, Code Intelligence from Sourcegraph can be provided directly on those platforms to all users by being installed as an integration. Just like the browser extensions on GitHub.com, these integrations embed hover tooltips, jump-to-definition links, and more inside the Phabricator and Bitbucket Server code-viewing user interfaces. 

Sourcegraph can support several other on-premises code hosts and code reading platforms. If you have questions about another one, please [contact us](mailto:sales@sourcegraph.com).

### Editor extensions
Sourcegraph also offers extensions for popular editors such as Atom, VS Code, Sublime, IntelliJ, and more that can be configured to connect your users to your on-premises instance, rather than [Sourcegraph.com](https://sourcegraph.com). These extensions allow users to quickly jump to a line of code on your local Sourcegraph instance, to get a shareable link to any line of code, or to instantly execute a cross-repository search of text selected in their editor. Visit [Sourcegraph.com](https://sourcegraph.com) to find a full list of supported editors.

## Get started

<a class="intercom-toggle" href="#">Chat with a representative</a> or [email us](mailto:sales@sourcegraph.com) today to get code search and intelligence on your organization's on-premises code.

