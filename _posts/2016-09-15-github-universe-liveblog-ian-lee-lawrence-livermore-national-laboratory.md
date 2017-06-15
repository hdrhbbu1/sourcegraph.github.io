---
layout: post
title:  "GitHub Universe liveblog: “Open source for National Security”"
author: Beyang Liu
redirect_from:
  - /github-universe-liveblog-ian-lee-lawrence-livermore-national-laboratory-91af97f29659
---

[Ian Lee](https://twitter.com/ianlee1521) of Lawrence Livermore National Laboratory talks about how LLNL is using, producing, and encouraging open source in government ([slides here](https://speakerdeck.com/ianlee1521/developing-open-source-in-service-to-national-security)).

Open source software and national security — two topics you don’t hear together too often. But there’s a lot of work in government agencies being done right now — open source, inner source, and closed source.

{% include image.html url="/assets/blog-images/1*8LeAkNACLvgEnCXP-1qUBw.jpeg" description="" %}

Lawrence Livermore grew out of the aftermath of the Los Alamos Project, one of 17 Department of Energy national labs, one of 3 national labs that are responsible for reporting on the readiness state of the U.S. nuclear stockpile.

You also may have seen us on Star Trek Into Darkness. The warp core came from them.

We do a lot of closed source, but also a good amount of open source. They don’t want to reinvent all the great things that the open-source community has already created.

Over the past 20 years, they’ve had 3 out of the 16 #1 supercomputing systems. That’s a lot of computation power.

Because of their unique computing resources and needs, they’ve developed their own operating system: TOSS, the Tri-Lab Operating System. It’s based on Red Hat Linux with additions to support HPC (large, interconnected clusters):

*   Low Latency Interconnect: Infiniband
*   Parallel File System: Lustre
*   Resource Manager: SLURM

They work closely with the open communities whose tools they’re leveraging.

SLURM is a resource manager.

{% include image.html url="/assets/blog-images/1*jfhJ1CvpscXbwWI9bKrjhA.jpeg" description="" %}

Flux is a family of projects for site-customized resource management systems, an evolution of SLURM for more computing systems in 2016.

{% include image.html url="/assets/blog-images/1*C_MVa05r60r6Wj20l-l_Sw.jpeg" description="" %}

They ported ZFS to Linux. Traditional filesystems, like ext4, don’t scale for their workflows. ext4 only scales up to 16TB volumes. LLNL led the work to port ZFS to Linux. It’s now standard in Ubuntu, as easy as `apt-get install zfs`.

{% include image.html url="/assets/blog-images/1*YKfyv-MPvpdJ9omwdipNFQ.jpeg" description="" %}

SPACK: the supercomputing package manager (written in Python)

{% include image.html url="/assets/blog-images/1*WHnqVyIKytDcPuhFST2cFg.jpeg" description="" %}

ESGF: the first decentralized database (petabytes!) for handling climate science data.

What languages does LLNL use?

{% include image.html url="/assets/blog-images/1*yU1pnjwEHnIjeaZPZp32Ww.jpeg" description="" %}

They have a GitHub pages portal to help you explore their code. GitHub code search is okay, but it’s difficult to filter repositories in specific languages and specific purposes. So they’re building a portal to help people explore the code: [http://software.llnl.gov/](http://software.llnl.gov/).

{% include image.html url="/assets/blog-images/1*Bgvy4nN7VawWrWgelAXxpg.png" description="" %}