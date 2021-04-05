---
layout: post
title: "Stupid or Solid?"
date: 2021-04-04
edited: 2021-04-05
category: "462"
---

*This was originally assigned for February 18th. I'm playing some catch-up right now.*

<br/>

Currently, when I code, I try to be efficient about it, often to a fault. I want to implement my changes in the most correct way possible for the context it will exist in. But this leads to an issue where I might not know how to approach, or even attempt a problem, because I am too busy optimizing what little code I have. I pretend that my coding habits are not as STUPID as they really are.

One of the things we talk about in Computer Science is, surprise surprise, how to write better code. There are lots of different ways to improve our coding habits, that, in the context of the following readings, can be classified as either **STUPID**, or **SOLID**. These are both anagrams with the following meanings.


### STUPID

- Singleton
- Tight coupling
- Untestability
- Premature optimization
- Indescriptive naming
- Duplication

STUPID code is flawed code. It encompasses pitfalls in a developer's mindset, assumptions often made, and silly decisions in coding that I see all the time when teaching Intro to Programming, and have a bad habit of often falling into myself.

1. Singleton code is code (typically a class) that is only ever instantiated once, which then carries over into a global state for your entire program. While a common practice, singletons are generally frowned upon today.

2. Code with tight coupling cannot be easily compartmentalized or reused. This also makes testing single parts of a program very difficult.

3. Untestable code makes it nearly impossible to prove that your program works at all. This is usually caused by tight coupling. In my experience, not providing any meaningful output from your code also makes testing difficult.

4. Premature optimization is caused by wanting to make your code *good* before making sure it actually works in the first place. Code that is too optimized is often unreadable.

5. Names in coding should be meaningful. If someone is making a variable that stores the velocity of a moving object, `object_velocity` is much more legible than `x_234`. And please, don't name a variable `duck` unless it actually represents a duck.

6. Duplicate code segments should always be avoided. If you find yourself repeatedly entering the four lines of code, make a function for that code instead.


### SOLID

- SRP: Single Responsibility Principle
- OCP: Open/Closed Principle
- LSP: Liskov Substitution Principle
- ISP: Interface Segregation Principle
- DIP: Dependency Inversion Principle

The SOLID principles are a little more fancy, so let me dissect these a bit.

**1. Single Responsibility Principle is the concept that every class should have only one responsibility, and should only have one reason to change.**

For an example, consider an object in 3D Euclidian space. There as several dimensions it could have, depending on the type of shape, size, its location, etc. There are several ways to implement these, especially if talking about complex geometry from modelling software -- but I'll keep my example simple: a rectangular prism, with length, width, and height, and its X, Y, and Z positions in space.

A tightly coupled version of this rectangle would just store all of these as instance variables at the class level, but if we want to satisfy SRP instead, we should break this class down some. A much more loosely coupled version could simply store the length, width, and height dimensions, then either a position or a point object as the location. That position object would then store the X, Y and Z coordinates instead, which is a much more modular design. We could even go a step beyond by generalizing the 3D object to, instead of directly containing dimensions, contain *any* 3D shape as a polymorphic object, which stores its relevant dimensions, and so forth.

**2. The Open/Closed Principle states that software entities should be open for extension, but closed for modification.**

This is one of the main points of object oriented programming. Classes are coded for very defined, rigid purposes, which can then be extended by other classes to include more information as needed, like a Student class extending a Person class. Note every person needs a student ID because note very person is a student.

**3. The Liskov Substitution Principle states that "objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program."**

Fancy. But what do these fancy words mean?

The most layman explanation I can think of is that, to satisfy this principle, a subclass should not alter any predefined behaviors of its parent class. If it does, then the subclass cannot fully substitute the position of its parent class.

The example of the square and rectangle given from DevIQ makes sense here, because we assume we can independently set the width and height of any rectangle. However, if we change the width of a square, to enforce its squareness, we must also change its height, which violates this principle.

**4. The Interface Segregation Principle suggests that many small interfaces are better than one giant generalized interface.**

I find myself implementing interfaces quite often these days, but very rarely have I written them, so I have little experience here. What I will say is that, while coding in Java, and especially for Android, I constantly run into classes that implement four or five different interfaces. I have always wondered why, since it makes an already verbose language even less legible, but I guess I have my answer. More interfaces are better.

**5. Dependency Inversion means that high-level modules should not depend on low-level modules; both should depend on abstractions.**

It figures that the most abstract principle is the one about abstraction. I have no idea where to begin with this principle, because I am not sure how to interpret it. It looks like my understanding of this principle is largely linked to my experience with abstraction and interfaces. I assume I will understand this better as I create more of my own interfaces.


### So... How STUPID is my code?

Of the five STUPID points given, the one that I tend to violate the most is premature optimization. As stated earlier, I tend to want my code to best fit the context I am writing it for, which might be a good target, but one I should only aim for later when I can afford to (or when it is necessary). It is okay for code to be inefficient when first designing it.

Other than that, I generally avoid singletons, always make my code testable, give descriptive names for my variables, and generally avoid duplicate code. I *think* my code usually has loose coupling, but that might be a matter of opinion.

All that being said, I do not know that my code is necessarily SOLID either. While I generally follow the first two principles, the remaining three are rather murky.

- I have certainly violated the LSP at some point, and may be prone to in the future, though changing this habit does not seem too difficult.

- I have only rarely had to write my own interfaces, so I have had little opportunities to violate the ISP so far. Still, I will keep this concept in mind.

- Since my experience with interfaces is limited, so to is my experience with the DIP. This is a gap in my knowledge.

So, my coding may not be terrible, but I have a lot to learn. I am hoping that what I am missing today will come with experience tomorrow.

<br/>

Sources:
- [From STUPID to SOLID](https://williamdurand.fr/2013/07/30/from-stupid-to-solid-code/)
- [SOLID principles](https://deviq.com/principles/solid)

<br/>

...

<br/>

*On a personal note, anagrams bug me. Wording those fancy ideas together so they form the word "solid" is cute and all, but the anagrams inside of anagrams are particularly irksome. I already practiced some of these principles despite never hearing them describe in so many words, so reading them the first time made me feel more STUPID than I may actually be. This extends to my role as an instructor and tutor. I find myself having to break down similar concepts for my students and tutees quite frequently, when really, they could have simply been written in easier to digest terms.*


