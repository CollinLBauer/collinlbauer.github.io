---
layout: post
title: "What's Happening?"
date: 2021-02-10
category: "462"
---

### TOS assignments

The instructions for this post don't explicitly say to write about the book exercises. I did anyway, for fun.

#### 7.2.2 - The "diff" between `diff`s

As a fan of online games, I have read plenty of patch notes. If the `diff` command is an example this textbook's defninition of a patch, then I assume the patch notes I am used to are more of a "reader's digest" version of the full picture.

Actually...scratch that. It makes sense after doing more reading. The patch can actually be applied an unupdated codebase to update files in question. Patch notes are just that - notes describing the patch.

Anyway, I ran both versions of `diff` - with and without the `-u` flag - against the hello.c files. I agree with the author's statement that the unified diff is a lot more legible, and probably translates well by itself, but the minimal output of standard diff is obviously useful for scripting and applying patches to older code.

#### 7.9 `echo`, but backwards

It's pretty cool seeing the source code for unix commands, and it's particularly funny to build them from a Windows machine. Yay, WSL!

There's really not much to say here. I followed the instructions verbatim and everything worked. In practice, it will probably be rare that we ever apply a patch in this way, versus through modern source control, but it's nice seeing how this works fundamentally. I wonder if binary releases are patched the same way?

<br/>

### Software Reflections

This past year has been particularly influential on computing fields, so for my reflection, I decided to choose an article that was published in the thick of things to see how technology is actively shifting. The current issue of IEEE Software, Vol. 38, isssue 1, discusses some shifts in software design, particularly servers - or the lack thereof.

#### [Serverless Computing-Where Are We Now, and Where Are We Heading?](https://www-computer-org.nuncio.cofc.edu/csdl/magazine/so/2021/01/09305905/1pNkvj0oEnK)

This article was co-written by Davide Taibi, Josef Spilliner and Konrad Warwruch. In it, they discuss how many companies are deploying "serverless systems," which are built on a paradigm that allow them to deploy applications without dealing with certain infrastructure. The article discusses some unique problems these systems encounter, and how to address them.

The term "serverless" is a bit of a misnomer, because these applications do, in fact, run on servers, but these servers are those manageed and maintained by cloud providers, i.e. Amazon Web Services, Microsoft Azure, etc. This alone offloads a lot of work and concerns from the developers, as they no longer need to maintain server hardware, uptime, software, etc., and can focus on their apps istead.

Furthermore, serverless applications seem to run on dynamically allocated servers, which seem to trigger only when needed. When not in use, the resources for those servers are reallocated for other services. This is what makes them truly serverless.

The article specifically mentions Google Firebase, which is a "BaaS" (back end as a service) database. The FOSS project my team is working on, Habitica, uses Google Firebase. None of us really knew what it was going into it, but reading this article shed valuable light on the service.

It continues to discuss the many benefits of this serverless paradigm and the unique challenges they create. From my perspective, the benefits are pretty apparent, but the issues were neat to read about. Some potential issues included:
- testing and debugging: Many aspects of serverless environments cannot be reproduced locally, and must be deployed to actively test
- performance: Since serverless functions are not always active, they often have to go through a "cold start," which introduces time delays in some instances.
- Apparently, using serverless technologies requires adopting an "event-driven paradigm." I am unfamiliar with this term, but may do some further research. The article mentions it a lot.  
  *Edit: The paradigm refers to functions triggering on certain actions or "events", for example, on a button click. I have used this many times, just never heard the term before.*

Seeing as our team is apparently dancing with serverless technologies, it is good to learn a little bit more about the technology. I made sure to share my findings with them as well.
