---
layout: post
title: "Modding Halo: 20 Year Old Limitations"
date: 
category: "portfolio"
---

Halo is an old video game. As a result, it has a lot of arbitrary and archaic limitations set on the engine. These limitations are a result of the game designers imposing such limits so it can meet the confines of the platform it was built for (in this case, the original Xbox), and perhaps some assumptions made about how far the game engine would need to be pushed. I doubt Bungie had any idea that people would be crating new content for their game 20 years later. This blog post is going to take a closer look at those limitations, how Bungie and Gearbox worked around them at the time, and how modern mods are able to push Halo to its absolute limits.


## 50,000...ish


## What the heck is a "portal plane"?

In 3D video games, often times when a player is exploring the game world, they can only ever see a small portion of it at any given time. This is especially true in more modern and expansive titles like Grand Theft Auto 5 or Breath of the Wild. However, rendering every single small detail would be incredibly slow and inefficient, so instead, anything that the player is not looking at is effectively "culled" out of existence.

Culling is a very common practice. The general rule of thumb is that, if the player cannot see something, cull it out. But actually achieving this goal takes some trial and error. Modern game engines often do this automatically and systematically, dividing the game world into "chunks" and only rendering the chunks the player is looking at, and no more. A few years ago there was a pretty impressive demo showing how Horizon: Zero Dawn achieves this effect.

![](https://raw.githubusercontent.com/CollinLBauer/collinlbauer.github.io/master/images/halo/horizon_render.gif)

Obviously Bungie did not have this luxury in 2001. Instead, it uses a technique called portal-based occlusion, which first appeared in Quake, and is still used in modern engines such as [Unity](https://docs.unity3d.com/Manual/class-OcclusionPortal.html). The way these portals generally work is, when the engine compiles the geometry, it will use these portals to divide the geometry into different chunks, then decides which of these chunks to render based on what the engine thinks the player's viewport can see. Halo actually takes this a step further, and also uses these chunks for effects like sound proximity and weather effects. To aid in these decisions, two types of portals are used in Halo, the *+portal* and *+exactportal*. All portals are defined as part of the map geometry, then chunks calculated at compile time.

### +portal vs +exactportal

The *+portal* plane definition is the more generic of the two portal types. These typically cut through the entire map's geometry


### Quirks of portals

Making portals in Halo definitely requires some trial and error, and the effects of them are not very well documented. Bad portals can lead to *tool* compile errors, disappearing geometry, and even errors in sound and physics calculations in extreme cases.




## Coplanar-ness

One other thing to 


<br/>

## Community-created Improvisions

The community has created a number of fixes and workaraounds for a number of these engine limitations, which manifest themselves as either an extention to the base game engine, or a modification to how maps are compiled, or both. The three most prominent ones are **HAC 2**  