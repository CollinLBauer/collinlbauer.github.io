---
layout: post
title: "HW2: Responses"
date: 2019-08-25
---

{% comment %} 
    This is a Jekyll comment. It should NOT appear in the HTML source.
{% endcomment %}
<!-- This is an HTML comment. It SHOULD appear in the HTML source. -->


Today's assignment is to read and compare three different articles which
discuss coding languags and source control from different angles, and from
different points in time. These articles are "No Silver Bullet" by Frederick P.
Brooks, Jr. (April 1987), "Kode Vicious: Cherry-Picking and the Scientific
Method" by George V. Neville-Neil (August 2013), and "Why Google Stores
Billions of Lines of Code in a Single Repository" by Rachel Potvin and Josh
LevenBerg (July 2016).  

All articles focus on how increasingly complex code becomes over time, and the
many challenges that come with this complexity. *No Silver Bullet* in aprticuler 
goes into detail with on the many ways it affects software development:

    "Many of the classic problems of developing software products derive from
    this essential complexity and its nonlinear increases with size. From the
    complexity comes the difficulty of communication among team members, which
    leads to product flaws, cost overruns schedule delay. . ."

Brooks goes on to list many more difficulties including unreadaility, problems
invoking a function, which make programs "hard to use", security trapdoors, and
so on.

*Cherry Picking and the Scientific Method* by Neville-Neil, an article published 24 years after
the former, discusses source control, a method which helps handle many of the
aforementioned problems. In particular, it answers a writer's question on how to
regularly merge with the head of the tree to avoid "cherry picking" what changes
to merge from one's own development branch. In short, he says that merging often
is good practice, thus cherry picking can generally be avoid. Neville-Neil also
answers a question by a writer who wanted to know how and when a problem is
"fixed". This is a common issue in software, where bugs may be common when
actively developing. His answer was simply to use the scientific method, provide
a hypothesis, and test each fix thoroughly, and record these tests and their
results for future reference.

The third article is about how Google uses one giant repository for all of its
code. At first glance, this may seem borderline absurd, considering how large
Google is as a corporation, gut it allows them to stay organized between many
different facilities across the nation.  Potvin and LevenBerg discuss how Google
have a custom source control implementation of their "monolithic" repository.

All of the articles together are good references on what problems are often come
across by novice software engineers, and how to best tackle them. I will likely
refer to these articles in the future, so I have a reference on how to tackle

{% comment %}
    No Silver Bullet comments on how there will never be a single solution that saves time and redusces costs for everything.
    Cherry-picking focuses on when to merge your work into a branch in source control
    The third article discusses how Google has one massive repository for every one of its projects.
{% endcomment %}




### Articles

Brooks, “No Silver Bullet Essence and Accidents of Software Engineering,” in Computer, vol. 20, no. 4, pp. 10-19, April 1987. doi: 10.1109/MC.1987.1663532

Neville-Neil, “Kode Vicious: Cherry Picking and the Scientific Method,” in Communications of the ACM, vol. 56, no. 8, pp. 32-33, August 2013. doi: 10.1145/2492007.2492019

Potvin and LevenBerg, “Why Google Stores Billions of Lines of Code in a Single Repository,” in Communications of the ACM, vol. 59, no. 7, pp. 78-87, July 2016. DOI: https://doi.org/10.1145/2854146