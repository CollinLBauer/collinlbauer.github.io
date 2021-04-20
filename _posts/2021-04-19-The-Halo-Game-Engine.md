---
layout: post
title: "Modding Halo: The Game Engine"
date: 2021-04-19
category: "portfolio"
---

At the end of my last post, I talked about how I picked up Blender so I could get into modding. *Modding* is the popular term for modifying an already released game by making changes or adding content, such as code, assets, etc., often through unofficial means. Modding is sometimes considered controversial as it is often done to circumvent either security or digital rights management software. But it is also an amazing source of expression for many video game communities, with Minecraft and Skyrim being two notable examples. Mods often extend the lifetime of a video game and its community by many, many years.

For this project, I have decided to use Halo: Combat Evolved as my starting point.


### Why Halo?

The first reason is a pretty obvious one. I need a project that I can be passionate about, and the Halo games are some of my favorites of all time. I played them a bunch as a teenager, and as a result, I know how the game engines work pretty well. Plus, it much easier for me to work with something that I have an attachment to.

Second, and perhaps more importantly, it is a surprisingly accessible family of game engines to learn. Almost every entry in the series is surprisingly well documented, thanks to tools released by the developers and efforts made by the community over the past twenty years. Furthermore, with the complete Master Chief Collection having recently been ported to PC, and with official modding tools coming out soon for the collection, there has never been a better time to get into this particular scene.

Coincidentally, as I started writing this series of blog posts, one of the Discord communities I recently joined, Halo CE Reclaimers, [just announced a map competition](https://discord.com/channels/228263208299790338/736703072679493632/832247874691006505)! The rules are pretty simple. There are three supplied maps that have been blocked out. Contestants are supposed to take one of those maps and do an "art pass" on it, making it look pretty and play well, while keeping the general layout the same. Submissions are due July 15th. *Joining the Discord server is required to view the full rules.*

I will talk more about the competition and various aspects of the Halo communities as time goes on, as there is plenty to talk about there. But for this post, I would like to focus on the game itself.

<br/>

## Blam!

Here are a few fun facts for you. Every single Halo title, from the original Combat Evolved to 343's Halo 5: Guardians, uses an evolution of the same base game engine. While this engine does not technically have an official name, it is [sometimes colloquially called the "Blam!" engine](https://c20.reclaimers.net/h1/engine/). This name comes from the use of the term "Blam!" on Bungie's official forums to censor profanity, something it still does today. Bungie also named the fictional substance used as ammo for their explosive Needler weapons *blamite*, but that's a different topic.

Halo's game engine was built specifically for Bungie's needs at the time. It has explicit support for the concepts of weapons, projectiles, vehicles, and so on - everything you'd expect from a sandbox shooter - and it builds on all of these through the use of *tags*, which are heavily data-driven definitions of these concepts. This makes it excellent at doing what it does, but rather terrible for developing other game genres. While the engine does support a rather primitive scripting in Haloscripts, it is incredibly limited, especially in earlier titles. That being said, its simplicity and data-driven design makes it fairly easy to learn, and perfect for my intents.

<br/>

## The Halo Editing Kit

The first Halo game was released as a launch title for the Xbox in 2001. It helped catapult the new console to popularity, and was the start of a legacy for both Xbox and Bungie. However, despite it originally being a console exclusive, the decision was eventually made to port the game to PC, and Gearbox Software was hired for the job.

The Gearbox port of Halo released in 2003 for Windows. It included full keyboard and mouse controls, graphics options, and importantly, online multiplayer, with 6 new multiplayer maps to showcase large online battles. But Gearbox snuck something even more important into this PC release: **Halo Custom Edition** and the **Halo Editing Kit**. Halo Custom Edition was a separate install from the base game that allowed users to install custom maps made by other players, and Halo Editing Kit was the set of tools to make those maps with.

Halo Editing Kit came with three primary programs. One is a simple collection of scripts for transitioning game data from one stage of development to another; the second is a powerful *tag* editor and manager; and the third is actually an in-engine level editor. Additionally, the kit comes with a number of resources from existing maps, including textures, weapons, vehicles, and so forth, stored in a series of special *tag* files, with internal references to dependencies and so forth. It also includes a handy tutorial that is really easy for beginners to follow.

Here's a quick breakdown of what each supplied program does.

### tool.exe

![what a tool](https://raw.githubusercontent.com/CollinLBauer/collinlbauer.github.io/master/images/halo/tools_tool.png)

The first tool is, oddly enough, called **tool**. *Tool* is essentially a massive collection of scripts, allowing developers to transition data from one state to another (like a 3D geometry export to a working map), apply effects and processes to different *tags* (such as generating lightmaps), and plenty of other things. It is incredibly versatile, and even offers useful debug information when things go wrong, such as generating error geometry if it detects something wrong, which can then be reimported and compared to the source model.

While *tool* is powerful, it does have flaws. Error geometry is not always useful, lightmaps are often slow and have issues, and there are just things that many modders want to do that it is not capable of. *Tool's* greatest sin is that it tries to do almost everything, and since it is a compiled executable, modders had to pick it apart slowly so they could create more flexible alternatives. More on that later.

### Guerilla

![tag warfare](https://raw.githubusercontent.com/CollinLBauer/collinlbauer.github.io/master/images/halo/tools_guerilla.png)

**Guerilla** is essentially the data manager of the kit. It is capable of opening and editing these *tag* files I keep on mentioning, which store data and properties for everything from particle systems, to sounds, to objectives and markers, to the level geometry itself. Almost every field can be edited and added to directly from *Guerilla*. Additionally, developers are able to add and remove references and dependencies between tags. This enables things like changing the type of bullet that a gun fires. One could, for example, make a sniper rifle shoot tank shells if they wanted to. But it has infinitely more uses than that.

The version of Guerilla that shipped with HEK did come with some drawbacks. While it can open and display all data from any tag, some fields are purposefully locked out and uneditable. Part of this is for safety reasons - it would be foolish to edit the level geometry with it, after all - it can sometimes inhibit more complex creations and optimizations.

### Sapien

![wiser than I](https://raw.githubusercontent.com/CollinLBauer/collinlbauer.github.io/master/images/halo/tools_sapien.png)

The final program is **Sapien**, which serves as the scenario and level editor. *Sapien* allows developers to insert objects directly into the game world via the view port, based off of the tags defined by *Guerilla*. From here, certain properties of these objects can be defined, such as world position and rotation, as well as if it belongs to a certain team, or only spawns for certain game types, et cetera. For singleplayer levels, AI actors may also be inserted and names assigned to them for scripting purposes.

Oh, and yes, Halo has its own custom scripting language. I currently do not know much about it or where and how to use it, but for now, just know that it exists. I will probably dedicate an entire post to scripting later down the line.

### Community-created tools

Over the years, a number of derivative programs have been created that either supplement or completely replace these three programs. *Tool* especially has seen a number of replacements, such as *LM_tool*, which optimizes the lightmap script. There is also a notable replacement for *Guerilla*, called *Mozzarilla*, which opens up the previously uneditable fields, and adds a number of additions for certain extensions to the Halo engine. I plan to explore these more in the future.


<br/>

## Halo 2 and beyond

As Bungie developed further Halo titles, they took their initial engine and refined it over time, making changes to things like physics, lighting, adding support for new concepts such as dual wielding weapons, new times of grenades and equipment, more advanced scripting, and so on. However, for the longest time there was no official way for an end user to access these tools and create custom content for newer Halo titles. 

The only notable exception to this is the Forge game mode, introduced in Halo 3. It allowed players to create variants of existing maps my changing the layout of scenery, weapons, vehicles, objective markers. In many ways, Forge essentially served as a "Sapien-lite", since it shared a lot of the same functionality, but with a much simpler toolset and a friendlier user interface.

![Forge](https://raw.githubusercontent.com/CollinLBauer/collinlbauer.github.io/master/images/halo/h3_forge.png)

Forge was incredibly popular, and helped bolster the Halo community and the success of the franchise through the Xbox 360 era. Every main Halo title since has shipped with some iteration of Forge. However, it offered no peeks under the hood, and changes were limited to what the developers intended.


### The Elephant in the Vista

Technically, Halo Custom Edition was not the only title to receive an editing kit. When Halo 2 was ported to Windows Vista, it also included its own editing kit, with evolutions of tool, Guerilla, and Sapien. This was great, because Halo 2 uses a much more powerful engine than its predecessor, with better lighting and a more realistic physic engine. But it came with one very big caveat.

Unlike in Custom Edition, Halo 2 Vista **did not support importing custom assets**. The kit provided had no way to add custom textures, models, sounds, etc., which meant that much less interesting content was developed for the game. Plus, the game required Windows Vista and Games for Windows Live, both of which were incredibly unpopular at the time. On top of that, it came out only four months before Halo 3 launched, which came with the aforementioned Forge mode, so interest in H2V suffered as a result. Nevertheless, the availability of these tools was important for documenting how the 2004 engine worked, and how much it had evolved since 2001.


<br/>

## The Master Chief Collection

![MCC drop](https://raw.githubusercontent.com/CollinLBauer/collinlbauer.github.io/master/images/halo/mcc.jpg)

It wasn't until many years later, in September of 2019, that Halo would see another official PC release, in the form of the **Master Chief Collection**, or MCC for short. For those who are unaware, MCC is a collection of almost every single mainline Halo game that originally released for the Xbox One. It has a rather...checkered history, which I will not be talking much about, but today it is widely considered the de facto way to play nearly ever Halo title. This means it has every game engine from Combat Evolved to Halo 4, including every campaign, every multiplayer map, and every Forge mode.

But it has *no official modding tools*. At least, not yet anyway.

That being said, because the game engines are the same, it is technically compatible with existing modding tools for the other titles, notably Halo Custom Edition. Porting from Custom Edition to MCC is possible, but requires some tweaking, since certain aspects have changed since the Gearbox port. This is also true for mods released for other Halo titles, but as the engines have evolved, and because MCC is still an evolving service, porting these mods is incredibly difficult and often a game of cat and mouse.

Luckily, there are individuals in the modding community that are much smarter than I, who have created an incredibly powerful tool, called **Assembly**.

### Assembly

![Spartans, assemble!](https://raw.githubusercontent.com/CollinLBauer/collinlbauer.github.io/master/images/halo/assembly.png)

*Assembly* is a unique tool that can open built maps from *multiple* Halo titles, not just one. It can do this because the file format used has remained incredibly consistent throughout the years, with most changes simply being additions, or occasionally reformatting. *Assembly* takes advantage of this by offering a unified UI for opening and editing tags, much like HEK's *Guerilla* does. It also allows duplicating or deleting tags, and exporting and importing tags between levels of the same engine. It is incredible how much support it offers for different versions of Halo engines, even beta releases. Finally, since *Assembly* works on already built maps, it has the ability to change a map while it is in use by directly injecting changes to the system's memory, which is extremely helpful for productivity.

### Future Modding Tools

*Assembly* is a testament to how devoted the Halo modding community is, but it can only do so much. At its core, *Assembly* is just a fancy [hex editor](https://en.wikipedia.org/wiki/Hex_editor). It has no means of creating tags from scratch, and everything must instead be created by modifying existing tags and assets. Secondly, adding one's own assets, such as textures, geometry, etc., is excruciatingly difficult and requires the use of several additional scripts and lots of trial and error.

Finally, there is no easy official way to share your mods once they are completed. Sure, websites such as [nexusmods](https://www.nexusmods.com/halothemasterchiefcollection/mods/trending/) exist, and the Halo Modding Discord is thriving, but there are still two glaring problems:
1. In order to add a mod, **existing parts of the game must be modified or replaced entirely**.
2. As MCC gets frequent updates, released mods are **prone to breaking**, and when they do, may need to be **completely recreated** in order to work with the update.

While modding for titles on the MCC collection is certainly possible, in its current state, it is rather unattractive. Thankfully, 343 Industries has announced that they [plan to create and release official modding tools some time down the line](https://web.archive.org/web/20200315124205/https://www.halowaypoint.com/en-us/news/modding-halo-a-community-tradition). There are even rumors that it will be [at least as powerful as HEK was](https://youtu.be/QJ2HVVSAxyc), if not better.

<br/>

...

<br/>

While I eventually plan to create custom assets for all Halo titles in the Master Chief Collection, especially Halo 3, there are very large barriers of entry in the way. So, until more details are released on the official tools for MCC, I will focus on learning and creating content for the first Halo, since the tools for it are very powerful and incredibly well documented. In my next post I will talk about my experiences learning the engine, and creating my first level.