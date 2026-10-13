---
layout: assignment
unit: source-code-as-cultural-heritage 
lang: en
title: "Understanding why source code is recognised as digital heritage"
cover:
documents:
  - 
tags:
outcomes:
  - Understand source code as both a technical artefact and a form of cultural expression
  - Identify the key challenges in source code preservation as a form of digital heritage
order: 1
---
Every app, website and digital service we use today is built on layers of source code. At its most elementary level, source code consists of human-readable instructions that tell a computer what to do. But this technical function is never produced in a vacuum: it is embedded in technical, social and cultural contexts and shaped by the decisions, assumptions and constraints of the people and institutions who wrote it. This makes source code a valuable historical resource, a series of traces that historians can learn to read. The growing recognition of source code as cultural heritage raises questions about how it should be preserved and what transformations occur as working software becomes a historical artefact. 

<!-- more -->

<!-- briefing-student -->

### 1.a Source code: from technical function to cultural expression | 25 mins  
<!-- section-contents -->
 
Look at the image below. It is a piece of paper from 1978, containing a short handwritten text by computer scientist [Brian Kernighan](https://en.wikipedia.org/wiki/Brian_Kernighan), reproduced on dot-matrix computer paper. Before reading on, take a moment to consider: what do you think this document does? Who was it written for, a human or a machine?

![The famous “Hello, World!” program written in C by Brian Kernighan on dot-matrix computer paper, from The C Programming Language (1978)](/assets/images/code-as-heritage/Hello_World_Brian_Kernighan_1978.jpg "Hello World program by Brian Kernighan")
Figure 1 Brian Kernighan,“Hello, World!” program in C, handwritten and reproduced on dot-matrix computer paper. Published in *The C Programming Language*, 1978. *Credit: Brian Kernighan, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hello_World_Brian_Kernighan_1978.jpg)*

Now try to execute the same piece of code yourself. Click on the link and press `Run`: [W3Schools editor](https://www.w3schools.com/cpp/trycpp.asp?filename=demo_helloworld) 

You’ve just executed a program that has been reproduced by generations of programmers. The phrase “Hello, World!” has become a classic first output, symbolising the first step in learning any new programming language.

<details>
<summary><strong>Background: “Hello, World!” tradition</strong></summary>
If you have ever opened a programming tutorial, textbook or online course, you have likely encountered “Hello, World!” – a simple program that displays these two words on the screen. This modest example has become a shared tradition, in part because it is one of the shortest programs that actually produces a visible result, making it an efficient first example when introducing any programming language. The <a href="https://rosettacode.org/wiki/Hello_world/Text">Rosetta Code repository</a> documents the historical persistence and cultural significance of this tradition with a collection of implementations of “Hello, World!” in over 300 programming languages, organised chronologically from early mainframe languages to contemporary ones.

But where did this tradition come from? It can be traced back to Brian Kernighan, who first documented it in a 1972 Bell Labs memorandum titled A Tutorial Introduction to the Language B. It gained widespread adoption through The C Programming Language (1978), co-authored by Kernighan and Dennis Ritchie, one of the most influential programming textbooks ever published ([Wikipedia: “Hello, World!” program](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)). The persistence of this tradition across five decades and hundreds of programming languages shows that programming, like any human practice, develops shared traditions. The appearance of “Hello, World!” in contemporary Python tutorials reveals a direct historical lineage from Kernighan’s 1972 memorandum and a form of cultural transmission preserved in code.
</details>

<!-- section -->

### 1.b 
<!-- section-contents -->

Examine the following document from the *Source Code Exhibition*: [OPTIMIZING THE FUTURE: the Fortran Source Code of the Latin American World Model](https://www.sourcecode-exhibition.softwareheritage.org/optimizing-the-future-the-fortran-source-code-of-the-latin-american-world-model/)

The [Latin American World Model (LAWM)](https://encyclopedia.pub/entry/31189) was developed in the 1970s by a multidisciplinary Argentinian team as an explicit political response to Western-dominated global models of development. Its source code, preserved as a printed sheet, is written in [Fortran](https://en.wikipedia.org/wiki/Fortran), one of the earliest programming languages, developed in 1957 for scientific computing.

Approach it as you would any unfamiliar archival document. You do not need to understand the source code line by line. Fortran was developed by IBM in the 1950s and became the standard language for large-scale scientific computing internationally; keep this in mind when considering the second question below. Reflect on the following:

* What does the layout and formatting of this document tell you about how it was produced and used? For example, pay attention to typed annotations, institutional markings or corrections that might reveal how the document circulated among the people who produced it.
* What does the choice of Fortran – a standardised and widely used language – suggest about the intended audience and about the position of the LAWM team relative to the institutional context in which Fortran was developed?
* What does it mean, in terms of accessibility and preservation, that this code was preserved as a printed sheet rather than as an executable file?

This example helps us understand an essential tension in computing: while source code is ultimately designed to be executed on a machine, it is also fundamentally a form of human communication that bears witness to its historical context and contains valuable traces of the past.

This tension points to something that sets source code apart from most other historical documents. A letter, photograph or printed pamphlet can still be read on the page regardless of whether the technology that produced it survives. Source code is different: it exists to control a machine, and doing so depends on a specific execution context, a compiler, an interpreter, a particular hardware architecture that may no longer exist. Digital preservation has long recognised this as a paradox: the very steps that keep a digital object usable – migrating it to new formats, emulating its original environment or running it on different hardware – also change the object itself, but leaving it untouched raises the risk of losing access to it altogether (Chen 2001). For historians, this means that questions of preservation and interpretation cannot be fully separated: how a piece of code has survived shapes what can still be read from it.

Code is not the only kind of formal, symbolic writing historians study; mathematical notation and double-entry bookkeeping, for instance, are also systems of inscription that combine strict formal rules with traces of the people and institutions that produced them. Source code shares this family resemblance, even as its dependence on a machine to execute it sets it apart.

This vulnerability is not abstract. Source code is facing what has been called a digital dark age (Silva 2022), in other words the possible loss of vast amounts of digital information. Three factors are driving this risk. Technological obsolescence occurs when the hardware and software a program depends on become outdated. Platform changes occur when the services hosting code shut down or change significantly. And digital storage media are physically fragile, degrading over time in ways that paper archives generally do not. Section 1.c examines what this fragility has meant in practice by looking at the history of video game preservation.

<!-- section -->

### 1.c The fragility of code: understanding the challenges involved in digital preservation – 20 mins
<!-- section-contents -->

The preceding section introduced the general risks that threaten the survival of source code: technological obsolescence, platform change and the physical fragility of storage media. This section examines what those risks have meant in practice, by looking at the history of video game preservation.

Let us examine this aspect from the perspective of video games. 

> A 2023 study by the Video Game History Foundation and the Software Preservation Network measured the scale of this loss. The study found that 87 percent of classic video games released in the United States before 2010 are no longer commercially available. The situation is even more severe for early games: less than 3 percent of titles released before 1985 have been reissued. The period from roughly 1977 to 1985 marked the emergence of home computing and the first generation of commercial video games; these availability rates are nonetheless comparable to the survival rates of American silent films (14 percent) and pre-World War II audio recordings (10 percent) ([Video Game History Foundation 2023](https://gamehistory.org/study-explainer/)).

Many classic video games survive only as reverse-engineered approximations after their original code was lost through corporate restructuring, technological changes or simple neglect. Reverse engineering is the process of deconstructing a digital object, whether finished or unfinished, to understand its design and composition in the absence of full access to the original source code or documentation. It enables programmers to recreate software functionality, but the resulting code is an approximation rather than the historical original. For a more detailed introduction to reverse engineering as a method for historical research, see the *Programming Historian* lesson [Reverse Engineering Born-Digital Artefacts: A Beginner’s Guide](https://programminghistorian.org/en/lessons/reverse-engineering-born-digital-artefacts) (Demleitner and Gammenthaler 2026).

Look at the image below. You are looking at a storage medium from 1984. It contains a complete software program – a video game called Jet Set Willy, popular in the early home computing era. Before reading on, consider the following questions: What do you think is stored on this cassette? And what do you think might be missing from it?

![Original cassette tape of Jet Set Willy for the Commodore 64, showing the game label on a standard audio cassette](/assets/images/code-as-heritage/Jet_Set_Willy_Cassette.jpg "Jet Set Willy cassette tape")

**Figure 2:** Original cassette tape of *Jet Set Willy* (Commodore 64 version, 1984). *Source: “The Ultimate Tape Archive” collection, [Internet Archive](https://archive.org/details/uta_Jet_Set_Willy_1984_Software_Projects_387).* 

Jet Set Willy was a platform game originally created by Matthew Smith for the [ZX Spectrum](https://en.wikipedia.org/wiki/ZX_Spectrum) personal computer and then ported to other platforms. 

In that early home computing era of the late 1970s to mid-1980s, software with game data could be stored on audio cassettes, as well as other data carriers such as floppy disks or cartridges, and users would load the game by playing the tape into their computer. Crucially, what cassettes preserved was the executable code, the machine-readable version of the program, and not the source code originally written by the programmer. Source code, with its human-readable logic, comments and variable names, typically remained with the developer or publisher. When companies went bankrupt, restructured or simply failed to archive their materials, this source code was often lost. What researchers can recover from surviving cassettes is a [reconstruction of how the program functions](https://en.wikipedia.org/wiki/Reverse_engineering), not the original code as written. Nowadays, the game can be played [on a browser-based emulator (directly in your browser) on the Internet Archive](https://archive.org/details/Jet_Set_Willy_1984_Software_Projects), which runs a preserved tape image of the original executable code rather than a reverse-engineered reconstruction.

Now you will compare and analyse two perspectives on video code preservation. Read both articles carefully to identify their approaches to digital heritage preservation and the challenges they address. *Estimated reading time: 15-20 minutes*

* [I tried to find a way to preserve code for 69 years (this is not a joke)](https://museumofscreens.wordpress.com/2022/12/09/how-to-preserve-code-for-69-years-this-is-not-a-joke/) 
* [Vanishing Culture: Recovering Lost Software](https://blog.archive.org/2025/05/07/vanishing-culture-recovering-lost-software/)

Questions for reflection:

1. Identify common elements: What shared goals, concerns and types of code do both articles discuss?
2. Analyse preservation challenges: What specific technical and cultural obstacles do both authors encounter in their preservation efforts?
3. Compare methodological approaches: How do their different approaches reflect the broader challenge of code preservation? 

<details>
<summary><strong>Need help? (click to expand)</strong></summary> 
Like games, early web applications, mobile apps and desktop software that fundamentally shaped our computer interactions have also disappeared, taking with them vital evidence of the evolution of digital culture  ([Kirschenbaum, Ovenden, and Redwine 2010](https://www.clir.org/pubs/reports/pub149/)). This loss goes far beyond individual programs, affecting entire development ecosystems. As programming languages become obsolete and development tools disappear, specialised knowledge about how to work with these particular systems is gradually scattered as communities evolve and move on to newer technologies ([Shustek 2006](https://ieeexplore.ieee.org/document/4042496)). The resulting impact is both technical and cultural: we lose valuable access to the creative processes that developers used, the collaborative practices they established, the innovative solutions they created, and even the humour embedded by programming teams. All these aspects reflect significant periods in computing history and provide unique insights into computing culture that descriptive historical sources alone could never capture.
</details>

<!-- section -->

### 1.d How source code gained official recognition as cultural heritage | 20 mins  
<!-- section-contents -->

The institutional recognition of source code as cultural heritage began with the [2003 UNESCO Charter on the Preservation of Digital Heritage](https://unesdoc.unesco.org/ark:/48223/pf0000179529), which represented a significant milestone. The Charter formally acknowledged that born-digital materials – content that originates in digital form – constitute an important part of our cultural legacy. These materials include databases, websites, software and other digital content that have never existed in physical form.

Why was this recognition important? By officially affirming the historical and cultural value of digital materials, UNESCO effectively placed them on an equal footing with traditional forms of heritage like monuments and artefacts, highlighting their significance for future generations.

However, it did not explicitly address source code preservation ([UNESCO 2009](https://unesdoc.unesco.org/ark:/48223/pf0000179529)). That changed in 2023, when UNESCO formally recognised the importance of preserving software source code as digital heritage for sustainable development, acknowledging its value across education, research and cultural preservation ([UNESCO 2023](https://www.unesco.org/en/articles/positioning-software-source-code-digital-heritage-sustainable-development)).


Please read the two documents below.

These documents show how digital heritage recognition has developed over time and highlight the challenges involved in preservation. They provide important historical context and reflect contemporary attitudes to source code preservation.

* [Charter on the Preservation of the Digital Heritage (2003)](https://unesdoc.unesco.org/ark:/48223/pf0000179529) – Focus on definitions and scope (articles 1-3)
* [Positioning Software Source Code as Digital Heritage for Sustainable Development (2023)](https://www.unesco.org/en/articles/positioning-software-source-code-digital-heritage-sustainable-development)


Questions for reflection:

1. How does the 2003 Charter define digital heritage, and where might source code fit within this definition? Consider the language used and the types of materials mentioned.
2. Looking at the 2023 UNESCO article, what specific arguments are presented for treating source code as heritage? How has this perspective evolved over the twenty years since the original Charter?
3. What specific benefits does code preservation offer to society, and in which fields (legacy, research, etc.) is it recognized as having particular value?


<!-- section -->


### Reading/viewing suggestions
<!-- section-contents --> 

Chen, Su-shing. 2001. “The Paradox of Digital Preservation”. *Computer* 34 (3): 24–28.

De Mol, Liesbeth, Maarten Bullynck. What's in a name? Origins, transpositions and transformations of the triptych Algorithm -Code -Program. J. Abbate and S. Dick. Abstractions and embodiments. New histories of computing and society, Johns Hopkins, 2022. ⟨hal-03081203v3⟩ https://hal.science/hal-03081203 

Abelson, Harold, and Gerald Jay Sussman. 1996. *Structure and Interpretation of Computer Programs*. 2nd ed. Cambridge, MA: MIT Press. https://sarabander.github.io/sicp/html/index.xhtml

Tanenbaum, Andrew S. 2012. *Structured Computer Organization*. 6th ed. Upper Saddle River, NJ: Pearson. 

Petzold, Charles. 1999. Code: *The Hidden Language of Computer Hardware and Software*. Redmond, WA: Microsoft Press. 

Knuth, Donald. 1984. “Literate Programming”. *The Computer Journal* 27 (2): 97–111. https://www.cs.tufts.edu/~nr/cs257/archive/literate-programming/01-knuth-lp.pdf 


**Digital Heritage Theory:**

Musiani, Francesca, and Valérie Schafer. 2016. “Digital Heritage and Heritagization”. *RESET: Recherches en Sciences Sociales sur Internet* 6. https://doi.org/10.4000/reset.806

**Digital Preservation Challenges**

Conway, Paul. 1996. *Preservation in the Digital World*. Commission on Preservation and Access. https://www.clir.org/pubs/reports/pub154/

Shustek, Len. 2006. “What Should We Collect to Preserve the History of Software?” *IEEE Annals of the History of Computing* 28 (4): 112–111. https://doi.org/10.1109/MAHC.2006.78


**On Jet Set Willy**
Aycock, John, Andrew Reinhard, and Archaeogaming. 2017. “Copy Protection in Jet Set Willy: Developing Methodology for Retrogame Archaeology”. *Internet Archaeology* 45. https://doi.org/10.11141/ia.45.2

Internet Archive. *Jet Set Willy* (Commodore 64, 1984). Playable in browser-based emulator. https://archive.org/details/Jet_Set_Willy_1984_Software_Projects

<!-- briefing-teacher -->
