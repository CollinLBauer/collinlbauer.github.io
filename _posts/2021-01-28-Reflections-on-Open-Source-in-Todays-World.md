---
layout: post
title: "Reflections on Open Source in Today's World"
date: 2021-01-28
---

For this blog post we had to look for two articles from [opensource.com](https://opensource.com/) to read and reflect on. Here are my reflections.

<br/>

### [Program hardware from the Linux command line](https://opensource.com/article/20/9/hardware-command-line)

In this article, an anonymous author under the pseudonym Alan Smithee explains how to code for an Internet of Things (IoT) device by coding for a barebones operating system called RT-Thread. Alan explains how the OS can either run native C code, or code from a command-line shell, both by using the command-line component called FinSH. Throught the article, Alan describes some basic knowledge required for coding to such a device, such as GNU's command-line standards and how the reader should organize such commands and parse them in C.

Within this article, the author identifies themself as a developer of FinSH, but offers no other personal information. Given that this was posted on a websiter promoting open source practices, it comes as no surprise that they mention using this tutorial to port common Linux-based applications to RT-Thread. It would seem that they wrote this article to promote their software and encourage developers to deploy it on their devices, but I am very curious why they decided to stay anonymous.

<br/>

### [Learn Python by creating a video game](https://opensource.com/article/20/10/learn-python-ebook)

This article is the first part of what appears to be a series of articles written by Seth Kenlon of Red Hat for an eBook of sorts. In this article, Seth describes some basics for getting started in Python, how to set up an environment for this tutorial, and how to get started with this particular Python package, Pygame. Being a tutorial, it gives a step-by-step guide for everything the reader may need to do, such as installing Python, setting up the virtual environment, installing the Pygame package with pip, and some starter code. It then passes off the reader to either read the next article in the series, or download the complete eBook.

I took a glance at the further articles, and Seth did an excellent job explaining a lot of the concepts deployed. There were some gaps in knowledge that the article doesn't mention; for example, the articles expect the reader to already know how to work in the command line, and the examples were all ran from Bash. However, the article tried to defer to further reading when it thought necessary, such as for setting up a virtual environment for Python.

<br/>

### Reflections

In general, it seems a large proportion of the articles on this website are aimed at teaching others. This ranges from teaching newcomers simple coding concepts, often framed as video games, to teaching more advanced concepts, like programming for IoT devices. They expect some level of knowledge, but it seems like the articles are trying to be as welcoming as possible for potential readers.

Opensource.com is self-described as "a premier, daily publication focused on open source and Linux tutorials, stories, and resources." It was founded by and is actively supported by Red Hat. I've always found them to be an interesting company, seeing as they work in open source technologies, yet make a large portion of their profit by selling services and technical support for those same technologies.

On the surface it seems rather ironic. If their software can easily be downloaded and compiled yourself for free (like CentOS is to RHEL), how can they operate as a business? This is speculation, but perhaps some of that is due to goodwill they've built up over the years. Some anecdotal conversations I've had with professionals in the field suggest that they purchase some such software specifically because they enjoy the work they put in open source.