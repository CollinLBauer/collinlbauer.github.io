---
layout: post
title: "Modding Halo: The Game Engine"
date: 
category: "portfolio"
---

At the end of my last post, I talked about how I picked up Blender so I could get into modding. *Modding* is the popular term for modifying an already released game by making changes or adding content, such as code, assets, etc., often through unofficial means. Modding is sometimes considered controversial as it is often done to circumvent either security or digital rights management software. But it is also an amazing source of expression for many video game communities, with Minecraft and Skyrim being two notable examples. Mods often extend the lifetime of a video game and its community by many, many years.

For this project, I have decided to use Halo: Combat Evolved as my starting point.


### Why Halo?

The first reason is a pretty obvious one. I need a project that I can be passionate about, and the Halo games are some of my favorite of all time. I played them a bunch as a teenager, and as a result, I know how the game engines work pretty well. Plus it much easier for me to work with something that I have an attachment to.

Second, and perhaps more importantly, it is a surprisingly accessible family of game engines to learn. Almost every entry in the seriesis surprisingly well documented, thanks to tools released by the devlopers and efforts made by the community over the past twenty years. Furthermore, with the complete Master Chief Collection having recently been ported to PC, and with official modding tools coming out soon for the collection, there has never been a better time to get into this particular scene.


<br/>

## Blam!

Here are a few fun facts for you. Every single Halo title, from the original Combat Evolved to 343's Halo 5: Guardians, uses an evolution of the same base game engine. While this engine does not technically have an official, fancy name, it is [sometimes colloquially called the "Blam!" engine](https://c20.reclaimers.net/h1/engine/). This name comes from the use of the term "Blam!" on Bungie's official forums to censor profanity, something it still does today. Bungie also named the fictional substance used as ammo for their explosive Needler weapons *blamite*, but that's a different topic.

Halo's game engine was built specifically for Bungie's needs at the time. It has explicit support for the concepts of weapons, projectiles, vehicles, and so on - everything you'd expect from a sandbox shooter - and it builds on all of these through the use of *tags*, which are heavily data-driven definitions of these concepts. This makes it excellent at doing what it does, but rather terrible for developing other game genres. While the engine does support a rather primitive scripting in Haloscripts, it is incredibly limited, especially in earlier titles. That being said, its simplicity and data-driven design makes it fairly easy to learn, and perfect for my intents.

<br/>

## The Halo Editing Kit

The first Halo game was released as a launch title for the Xbox in 2001. It helped catapult the new console to popularity, and was the start of a legacy for both Xbox and Bungie. However, despite it originally being a console exclusive, the decision was eventually made to port the game to PC, and Gearbox Software was hired for the job.

The Gearbox port of Halo released in 2003 for Windows. It included full keyboard and mouse controls, graphcis options, and importantly, online multiplayer, with 6 new multiplayer maps to showcase large online battles. But Gearbox snuck something even more important into this PC release: **Halo Custom Edition** and the **Halo Editing Kit**. Halo Custom Edition was a separate install from the base game that allowed users to install custom maps made by other players, and Halo Editing Kit was the set of tools to make those maps with.

Halo Editing Kit came with three primary tools. One is a simple collection of scripts for transitioning game data from one stage of development to another; the second is a powerful tag editor and manager; and the third is actually an in-engine level editor. Additionally, the kit comes with a number of resources from existing maps, including textures, 

### tool.exe

![]()

### Guerilla

![]()

### Sapien

![]()

### Community-created tools

In addition to these

![]()

<br/>

## Halo 2 and beyond

As Bungie developed further Halo titles, they took their initial engine and refined it over time, making changes to things like physics, lighting, adding support for new concepts such as dual wielding weapons, new times of grenades and equipment, more advanced scripting, and so on. However, for the longest time there was no official way for an end user to access these tools and create custom content for newer Halo titles. 

The only notable excpetion to this is the Forge gametype, introduced in Halo 3. It allowed players to create variants of existing maps my changing the layout of scenery, weapons, vehicles, objective markers. In many ways, Forge essentially served as a "Sapien-lite", since it shared a lot of the same functionality, but with a much simpler toolset and a friendlier user interface.

![Forge]()

Forge was incredibly popular, and helped bolster the Halo community and the success of the franchise through the Xbox 360 era. Every main Halo title since has shipped with some iteration of Forge. However, it offered no peeks under the hood, and 


### The Elephant in the Vista

Technically, Halo Custom Edition was not the only title to receive an editing kit. When Halo 2 was ported to Windows Vista, it also included its own editing kit, with evolutions of tool, Guerilla, and Sapien. This was great, because Halo 2 uses a much more powerful engine than its predecessor, with better lighting and a more realistic physic engine.

![Halo 2 Sapien]()

But it came with one very big caveat. Unlike in Custom Edition, Halo 2 Vista **did not support importing custom assets**. The kit provided had no way to add custom textures, models, sounds, etc., which meant that much less interesting content was developed for the game. Plus the game required Windows Vista and Games for Windows Live, both of which were incredibly unpopular at the time, so interest in H2V was pretty low to begin with. Nevertheless, the availability of these tools was important for documenting how the 2004 engine worked, and how much it had evolved since 2001.

### Master Chief Collection


### Assemblly

![]()

### Future Modding Tools

Assembly is an incredibly powerful tool, and a testament to how devoted the Halo modding community is, but it can only do so much. Assembly has no means of creating tags from scratch, and everything must instead be created by modifying existing tags and assets. Secondly, adding one's own assets, such as textures, geomgetry, etc., is excruciatingly difficult and requires the use of several additional scripts and lots of trial and error.

Finally, there is no easy official way to share your mods once they are completed. Sure, websites such as [nexusmods](https://www.nexusmods.com/halothemasterchiefcollection/mods/trending/) exist, and the Halo Modding Discord is thriving, but there are still two glaring problems:
1. In order to add a mod, **existing parts of the game must be modified or replaced entirely**.
2. As MCC gets frequent updates, released mods are **prone to breaking**, and when they do, may need to be **completely recreated** in order to work with the update.

While modding for titles on the MCC collection is certainly possible, in its current state, it is rather unattractive. Thankfully, 343 Industries has announced that they [plan to create and release official modding tools some time down the line](https://web.archive.org/web/20200315124205/https://www.halowaypoint.com/en-us/news/modding-halo-a-community-tradition). There are even rumors that it will be [at least as powerful as HEK was](https://youtu.be/QJ2HVVSAxyc), if not better.

<br/>

While I eventually plan to create custom assets for all Halo titles in the Master Chief Collection, especially Halo 3, there are very large barriers of entry in the way. So, until more details are released on the official tools for MCC, I wil focus on learning and creating content for the first Halo, since the tools for it are very powerful and because it has plenty of documentation. In my next post I will talk about my experiences learning the engine and creating my first level.