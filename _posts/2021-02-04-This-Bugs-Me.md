---
layout: post
title: "This bugs me"
date: 2021-02-04
---

### 6.4 - Habitica-Android's  Oldest Bug
Habitica's Android app has a lot of open issues, some dating back to 2015. The oldest bug that's still open was posted on November 3rd, 2016: [**Android Widget only supports top level of checklist dailies**](https://github.com/HabitRPG/habitica-android/issues/652).

It's a bit of a weird one. Habitica is a multiplatform app. It has a webapp, then one for both major mobile operating systems. They all share the same core features, but these features don't always have parity with each other per platform. In this case, the feature in question has to do wih dailies. Habitica lets you keep a list of daily tasks (which could actually be weekly or monthly, but I digress) for you to check off every day. These dailies also have optional sub-tasks in the form of checklists that you can add and check each one off individually as you complete them.

Here's where the issue comes in. The webapp will let users check them off, and it shows completion level as a fraction on the side. The Android app reflects these changes, but it doesn't let you check or uncheck items like in the webapp.

It seems this issue has evolved since it was first posted, as at the time, the original post said the daily couldn't be modified at all on the Android app, which the current version definitely can do, but just not this specific feature.

This issue has the following labels: 
- Help Wanted
- Priority: Minor
- Type: Bug
- Type: Enhancement

Habitica has a small dev base, and this is a very niche feature, so if I were to guess, they have probably been focused more on stability bugs and content for engagement (items, events, etc.).

### 6.5 - Habitica's Bug Tracker
Habitica uses GitHub Issues for its bug tracker, so no further account is needed! Worth noting however, is that they have other official channels for user-reported bugs. More on this below.

### 6.6.1 - Reproducing a bug
See 6.4's response. I actually reproduced that bug so I could write an accurate description and note differences.

### 6.7.1 - Bug Triage
Habitica has a few official channels for bug reports, the first one being email, the second being an in-app "guild" for user bug reports. It seems like bugs are taken from here, triaged, and then valid ones are posted to the GitHub tracker.

This being the case, it seems the triage step is largely inaccessible to new contributors. We are able to reproduce many bugs from the tracker and provide more insight on them, but they are already very well documented, including data on device used, OS version, app version, and other app-specific informtion.

I found a few bugs on the tracker, [like this one](https://github.com/HabitRPG/habitica-android/issues/1421), that were unconfirmed. I will attempt to reproduce them after recreating the proper conditions, which may take some time.