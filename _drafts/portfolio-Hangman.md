---
layout: post
title: "School Projects: Hangman"
date: 2019-08-21
category: "school"
---

Something about how I haven't written shit about school work outside of software engineering, but now I am, or something... Idk man I gotta think this paragraph through

This particular project was the final for CSCI 370 - Mobile App Development. My team members were Alex Wizes and Brandon Hardiman. The class was during Spring of 2021, and was completely online, like most classes during the pandemic. Unfortunately the GitHub repo we worked from is private, otherwise I would post the link here.

<br/>

## Hangman

I would not call call a game of hangman particularly innovative, but it was a good way for my team to flex our muscles. Our goal was to have a few different activity pages - a start activity, settings activity, winning and losing, and, of course, the game itself.

The majority of the project was written in Java on Android Studio. 

### The game

The hangman game starts with an empty hangman, a word (or phrase) to guess, and buttons to press for each letter. Each button may only be pressed once. If a guessed letter is correct, it is revealed in the word. If it is wrong, a piece of the hangman is drawn. Players win the game by guessing the complete word, and lose when the entire hangman is drawn.

![]()

The word to guess is random each time, and is pulled from an internal, prepopulated Room database. Settings affect the game by changing how many parts need to be drawn before a game over, if hints pop up, and whether it will allow phrases from the database.

### Settings activity

The settings screen contains options for difficulty and whether the player wants hints. These are saved via the Android shared preferences API.

![]()


### Game end activities

Depending on 

### How online affected the final product

Collaborating online no doubt made this project more difficult. Our communication suffered since we didn't regularly interact in person, leaving some features to be scrapped so we could finish with our available time. And, honestly, we probably would have picked a more interesting project than this if we could communicate in person.

<br/>

I contributed to the following portions:
- Settings activity
- Hangman activity
- Word bank SQL database 
- Integrating user preferences into the game