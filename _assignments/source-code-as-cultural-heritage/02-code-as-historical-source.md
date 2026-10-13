---
layout: assignment
unit: source-code-as-cultural-heritage 
lang: en
title: "Reading Code as Historical Source"
cover:
documents:
  - 
tags:
outcomes:
  - Apply source criticism methods to code, considering its technical function, textual content, historical context and archival transmission
order: 2
---
Understanding source code as a historical source means developing code literacy skills that bridge technical and cultural analysis. Source code is fundamentally a form of writing – a way for humans to communicate instructions, ideas and solutions to both computers and other humans. Like other written forms, it bears the marks of its author’s background, the conventions of its era and its cultural context. Programming languages function much like human languages in that they have their own grammar, style conventions and cultural associations that evolve across different communities and historical periods.

This analogy has its limits, however. Terms such as interpretation, syntax, grammar and correctness carry precise, often narrow technical meanings in computer science that do not map cleanly onto their use in historical or everyday language. In programming, an interpreter is software that executes source code directly, whereas for a historian, interpretation is a form of critical reading. Keeping this difference in mind matters throughout this lesson, since the same word can carry different meanings depending on which community is using it.

Approaching code as a historical source does not require you to become a programmer, but you will need to develop code literacy. This lesson develops that awareness without assuming prior programming experience, while recognising that code is not simply “text in another language” but a distinctive form of human expression with its own material and logical properties.

Code can also be misleading if read in isolation. A comment, naming choice or note left in the source may seem to speak for itself, but its meaning often depends on a context that the code itself cannot supply. Section 2.b works through a specific example of this: a comment in the Microsoft BASIC interpreter that, read on its own, invites a plausible but incorrect inference about how the program was written. Source code is valuable evidence, but it is not self-sufficient: like any historical source, it requires corroboration from other sources.


The relationship between historical analysis and technical understanding operates at several levels:

* **Reading code as cultural text** does not require programming expertise – you can analyse naming conventions, comments, documentation practices and embedded cultural references without being able to write or execute code yourself.
* **Understanding what code does** is aided by basic familiarity with programming concepts – not expertise, but a sufficient degree of literacy to recognise structures, follow logic and understand why certain choices were made.
* **Evaluating code's technical quality or reconstructing functionality** requires genuine programming knowledge at a level beyond what this lesson addresses.

This lesson focuses primarily on the first level while acknowledging that deeper engagement benefits from the second.

<!-- more -->

<!-- briefing-student -->

### 2.a A framework for source code criticism | 30 mins
<!-- section-contents -->

Source code has emerged as a valuable resource for humanities research, particularly in critical code studies, digital history and science and technology studies, since the early 2000s (see relevant references below). The focus is currently on the “extra-functional significance of computer source code” (Marino 2020), in other words what code can tell us beyond what it actually does. Current research treats programming languages as forms of creative writing, examining the cultural assumptions embedded in algorithms and investigating how software development practices reflect broader social and political contexts. This research reveals how seemingly neutral technical decisions actually reflect cultural biases, political assumptions and aesthetic preferences. By examining code as a form of cultural expression, scholars can explore questions about power, identity and creativity in digital environments.

Every type of historical source requires specific methods of analysis depending on its material and communicative properties. Source code is no different – the approach needs to be tailored to its particular characteristics. The historian’s fundamental questions remain the same: Who created this? When? For what purpose? Has it been altered? Can we trust it? How did it reach us? These questions remain essential when working with code, just as they are for manuscripts, photographs or oral testimonies.

What changes is where we find answers and what new questions the source itself raises. One such question concerns the abstraction level of the code being examined. As introduced in section 1, source code that is closer to the hardware, like assembly language, is less immediately legible than high-level languages, making certain authorial choices and cultural markers harder to read directly from the source. But this is not unlike other historical sources that require contextual mediation to yield their meaning. The historian’s response should be to bring the full range of historical methods to bear, comparing the code itself with whatever external sources are available to recover dimensions the artefact itself cannot supply.

#### Key Analytical Questions for Source Code as Historical Evidence

When approaching any piece of code, the following questions can guide your analysis. These are not sequential steps but concurrent concerns – a single element of code may illuminate several at once. This is not an exhaustive methodology but a starting point; the field of digital source criticism remains open, and specific sources may raise questions not anticipated here.

**Establishing provenance and authenticity:** Who wrote the code? When was it created? Where did it originate, and how did it reach us? Proprietary source code sometimes becomes available through unauthorised leaks. For example, in 2023, portions of Twitter’s source code were leaked on GitHub, revealing aspects of their recommendation algorithm ([Yu 2023](https://www.wowebsites.com/blog/2023/04/twitter-algorithm-code-leaked-and-released-an-explanation/)).

**Questioning the broader context:** When and why was this code written? What problem did it address, and for what audience? Understanding the broader purpose – whether the system is a game, a scientific calculation or a business application – is essential in guiding analysis. It is also worth considering what technological constraints existed at the time: memory limitations, processing speed and available hardware all influenced how programmers worked.

**Dependencies and networks:** What external code does a program rely on? Like citations in academic papers, dependencies reveal how programmers built upon existing work and participated in broader development communities. In 2016, a single developer removing 11 lines of code temporarily disrupted much of the Internet, revealing hidden dependencies in the software ecosystem ([Collins 2016](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code)).

**Linguistic and cultural markers:** Source code carries cultural fingerprints that reveal much about its creators and their context, though these markers are not neutral – they reflect broader power structures. Most programming languages use English-based syntax, even when created by non-English speakers ([Python](https://en.wikipedia.org/wiki/Python_(programming_language)) was initially developed in the Netherlands, [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)) in Japan). Programming language choices are fundamentally social decisions, shaped by personal networks and team familiarity rather than purely technical considerations ([Meyerovich and Rabkin 2013](https://dl.acm.org/doi/10.1145/2509136.2509515)). To explore these dynamics further, watch Gabrielle Hayden’s talk [“Language Hierarchies in Programming”](https://www.youtube.com/watch?v=kCZRauYfqvg) (approximately 20 minutes), which draws on feminist and post-colonial theory to analyse how biases about human languages appear in discussions of programming languages.

**Code structure and style:** Code has its own “writing style”. Well-structured, consistently formatted code often indicates professional settings with established coding standards; code that appears hastily written might reveal academic prototypes, emergency fixes or situations where speed was prioritised over elegance. The programmer’s background and training also leave traces – see the [MIT Coding and Comment Style guide](https://mitcommlab.mit.edu/broad/commkit/coding-and-comment-style/) for an example of professional conventions.

**Comments and documentation:** Comments are portions of text embedded within source code that the compiler or interpreter ignores during execution – the programmer’s personal notes and explanations. They can document team decisions, clarify complex logic, and sometimes include personal reflections or humour. They also signal the intended audience: sparse, technical comments assume expertise, while detailed explanations target beginners ([Emadamerho-Atori 2024](https://www.altexsoft.com/blog/how-to-write-code-documentation/)).

**Political dimensions and power structures:** Code never exists in a political vacuum – it reflects and shapes power relationships. Who has access to the code? What assumptions about users are embedded in its design? How does it distribute agency between users and systems? The ongoing dispute between France and India over Rafale fighter jet source code exemplifies how code embodies political power structures in defence technology ([Dasgupta 2025](https://www.india.com/business/what-is-source-code-why-is-it-crucial-for-fighter-planes-know-its-role-in-missile-integration-and-upgrades-7849472/)).

**What is absent or missing:** Sometimes what code doesn’t include reveals as much about historical context as what it does. What programming practices, security measures or accessibility features that we might expect today are missing? It is also important to identify any absences in the historical record itself. The systematic exclusion of the six women who programmed [ENIAC](https://en.wikipedia.org/wiki/ENIAC) from historical documentation for decades demonstrates how what is missing reveals as much as what is included ([Light 1999](https://rybn.org/human_computers/articles/when_computers_were_women.pdf)).

![Women programmers holding parts of early Army computers including ENIAC, EDVAC, ORDVAC, and BRLESC-I boards](/assets/images/source-code-as-cultural-heritage/women-holding-parts-of-the-first-four-army-computers.jpg "Women holding parts of the first four Army computers")

**Figure 3:** Four women programmers – Patsy Simmers, Gail Taylor, Milly Beck and Norma Stec – holding boards from early US Army computers (1962). *Credit: U.S. Army Photo 163-12-62, Public Domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Women_holding_parts_of_the_first_four_Army_computers.jpg)*

The following table summarizes these questions as a quick reference:

| Question | What to look for |
|---|---|
| Provenance and authenticity | Author, date, origin, chain of transmission |
| Broader context | Purpose, technological constraints, historical moment |
| Dependencies and networks | Reliance on external code, communities of practice |
| Linguistic and cultural markers | Language choice, syntax conventions, accessibility |
| Code structure and style | Formatting, organisation, development environment |
| Comments and documentation | Annotations, intended audience, working culture |
| Political dimensions | Access conditions, embedded assumptions, power relations |
| What is absent | Missing features, gaps in the historical record | 


<!-- section -->

### 2.b Applying source code criticism | 35 mins

<!-- section-contents -->

This section puts into practice the analytical framework introduced in 2.a. You will examine two related code artefacts from the history of personal computing, applying the key analytical questions to real historical sources. The two artefacts are deliberately connected – they belong to the same program lineage –, so that you can observe how code evolves over time and what that evolution reveals historically.

Previously, we introduced some key analytical aspects that historians can consider when examining code: establishing provenance, understanding context, reading linguistic and cultural markers, analysing comments and identifying what is absent. Now we apply these questions to a specific artefact.

> **A note before you begin:** We would encourage you to search the web at any point during this exercise to help identify the artefact and verify your hypotheses. Researching names, dates and technical terms you observe in the document is part of the analytical process, just as a historian might consult reference works while examining an unfamiliar source.

#### Artefact 1: The document

Examine the following digitised document carefully. Before reading further, spend five minutes observing the document. What clues can you identify about its origins, authors, purpose, and historical context?

![A historical code artefact](/assets/images/source-code-as-cultural-heritage/original-microsoft-source-code.jpg "A historical code artefact")

**Figure 4:** Original source code for Microsoft BASIC, written in 1975 by Bill Gates and Paul Allen with contributions from Monte Davidoff. *Source: Gates Notes, 2025.*

#### Exercise Part 1: Analysing the document

Examine the artefact and answer the following questions:

1. **Provenance and authenticity:** Who is credited as author? What dates appear? Where did this code originate, and how might it have reached us in this form?

2. **Linguistic and cultural markers:** Look at the document header and structure. Can you identify what programming language this is?

3. **Comments and documentation:** Examine how credit is attributed among the people mentioned. What does the language used – the tone and informality – reveal about early software culture and workplace dynamics?

4. **Material form and transmission:** What type of physical document is this? What printing technology produced it? What do the physical characteristics (paper format, margins, perforations) tell you about the technical environment of the time?
<html>
<details>
<summary><strong>Catch up: What is this artefact? (click to expand if you skipped the exercise)</strong></summary>

The image above is a photograph of the original source code for the Microsoft BASIC interpreter, written in 1975 by Bill Gates and Paul Allen (with contributions from Monte Davidoff). Despite its name, this document is not written in the BASIC language itself: it is an interpreter, written in Intel 8080 assembly language, that allows a computer to run programs written in BASIC. This program, developed for the Altair 8800 microcomputer, was the first product Microsoft ever sold and is considered a foundational artefact in the history of personal computing. The photograph was shared by Bill Gates on his blog in 2025 to mark the 50th anniversary of Microsoft.

BASIC itself predates this artefact by over a decade. The language was created in 1964 at Dartmouth College by John Kemeny and Thomas Kurtz as part of the Dartmouth Time-Sharing System, one of the first systems to let multiple users write and run programs interactively. A second date visible on the photograph, 6 September 1964, corresponds to this earlier moment: the launch of BASIC at Dartmouth, more than a decade before Gates and Allen wrote their own implementation for the Altair. Gates and Allen did not invent BASIC; they wrote their own implementation of it for a machine that had never run it before.


</details>
</html>

#### Artefact 2: The snippet

Now examine this second artefact. This is a short excerpt – a snippet – from the source code of [GW-BASIC](https://en.wikipedia.org/wiki/GW-BASIC), a version of [Microsoft BASIC](https://en.wikipedia.org/wiki/Microsoft_BASIC), written in assembly language, developed for IBM PC compatibles, dated 1983.

Though it was written eight years after the first artefact, this code is a direct descendant of the 1975 program – and, as you will see, it carries the memory of its origins in its comments.

```
; [ This translation created 10-Feb-83 by Version 4.3 ]

    .RADIX    8        ; To be safe

CSEG    SEGMENT PUBLIC 'CODESG'
    ASSUME    CS:CSEG

INCLUDE BINTRP.H

    TITLE    GWMAIN Copied from BINTRP.MAC

    .RADIX    10

COMMENT *

--------- ---- -- ---- ----- --- ---- -----
COPYRIGHT 1975 BY BILL GATES AND PAUL ALLEN
--------- ---- -- ---- ----- --- ---- -----

ORIGINALLY WRITTEN ON THE PDP-10 FROM
FEBRUARY 9 TO  APRIL 9 1975

BILL GATES WROTE A LOT OF STUFF.
PAUL ALLEN WROTE A LOT OF OTHER STUFF AND FAST CODE.
MONTE DAVIDOFF WROTE THE MATH PACKAGE (F4I.MAC).

*

    .XLIST
```

#### Exercise part 2: Comparing the artefacts

You now have two related documents in front of you: a photograph of a 1975 printout and a code file from 1983, published online in 2020 in a [GitHub](https://en.wikipedia.org/wiki/GitHub) repository – a platform for hosting and sharing code.

1. **What changed? What stayed the same?** Compare the two artefacts. What elements appear in both? What differences do you notice in the headers, dates, or content?

2. **Understanding multiple temporalities:** As discussed in Section 2.a, a single code artefact may contain traces of multiple moments. This code has travelled through time:
   - **1975:** Originally written for the Altair 8800 microcomputer
   - **1983:** Developed and adapted for IBM PC compatibles as GW-BASIC
   - **2020:** The 1983 version deposited in a public GitHub repository by Microsoft
   - **2025:** Photograph of the original 1975 printout shared on Gates Notes
   
   What does each moment add or transform? Why might code need to evolve as technical environments change? How does the same program lineage exist in different material forms — paper printout, magnetic storage, digital repository, photographic image?

#### Further exploring the context of creation

The examples you have examined belong to the lineage of Microsoft BASIC, the program that launched Microsoft as a company in 1975. Bill Gates and Paul Allen wrote the original interpreter for the Altair 8800, one of the first commercially successful personal computers. Over the following years, this code evolved and was adapted for multiple platforms, including the IBM PC and compatibles, where it became known as GW-BASIC. adapted for numerous platforms, including the IBM PC and compatibles, where it became known as GW-BASIC.

**Code evolution and lineage**

Comparing the 1975 printout with the 1983 code reveals something important about how code travels through time. The 1983 GW-BASIC is not simply a copy of the 1975 Altair BASIC: it is its descendant, adapted for different hardware. The 1975 version ran on the Altair 8800 (Intel 8080 processor), whereas the 1983 version was developed for IBM PC compatibles (Intel 8086/8088). The core logic and structure evolved from the original, but the code itself was transformed to work in a new technical environment.

Because both files are written in assembly language, adapting the first to produce the second required a substantial rewrite, not just a simple recompilation. Assembly code is written for a specific processor’s instruction set, and the 8080 code that ran on the Altair could not simply be moved onto an Intel 8086 without being reworked line by line. This machine specificity is itself a heritage question: preserving the GW-BASIC source does not guarantee that the same code would run, or even assemble, on different hardware.

This pattern of code being reused, adapted and developed across platforms and over decades is fundamental to software history. Programs are not static artefacts frozen at the moment of creation; they have lineages, descendants and branches. Understanding a piece of code often means tracing where it came from and what it became.


**How later code remembers its origins**

Notice how the 1983 code preserves the memory of its 1975 origins. The comments explicitly state: “ORIGINALLY WRITTEN ON THE PDP-10 FROM FEBRUARY 9 TO APRIL 9 1975”. This is the code documenting its own history, a form of self-referential provenance that historians can use to trace lineage.

As noted in the introduction to this section, a comment like this can be misleading if read on its own. Taken out of context, it might suggest the interpreter was written for a PDP-10 and later rewritten for the Altair’s Intel 8080 processor. In practice, Gates and Allen never had access to an actual Altair or 8080 chip while writing the code: Paul Allen built a software emulator of the 8080 that ran on Harvard’s PDP-10, and the two of them wrote and tested the interpreter on that emulator before it ever touched real Altair hardware. The comment is strictly accurate – the code was indeed written on a PDP-10 –, but understanding what it actually means requires an additional source outside the code itself.

Moreover, the memory is not perfectly preserved. Compare how the credits appear in each version:

**1975 version:**

```
BILL GATES WROTE THE RUNTIME STUFF.
PAUL ALLEN WROTE THE NON-RUNTIME STUFF.
MONTE DAVIDOFF WROTE THE MATH PACKAGE.
```

**1983 version:**

```
BILL GATES WROTE A LOT OF STUFF.
PAUL ALLEN WROTE A LOT OF OTHER STUFF AND FAST CODE.
MONTE DAVIDOFF WROTE THE MATH PACKAGE (F4I.MAC).
```

The meaning is similar, but the wording has shifted. The specific technical terms (“RUNTIME”, “NON-RUNTIME”) have been replaced with vaguer language (“A LOT OF STUFF”, “A LOT OF OTHER STUFF”). This is a small but telling reminder: when code evolves across versions, even the comments, which represent the human-readable parts intended to document the work, can change. As discussed in Section 2.a, historians must be aware of any changes that occur when code passes through different hands and contexts.

**Visit the GitHub repository**
Microsoft. 2020. GW-BASIC Source Code Repository. GitHub. https://github.com/microsoft/GW-BASIC

Microsoft published this code on GitHub in 2020 ([Microsoft, 2020](https://github.com/microsoft/GW-BASIC/blob/master/GWMAIN.ASM)). Take a moment to visit the [GW-BASIC repository](https://github.com/microsoft/GW-BASIC) on GitHub, and consider this as a republication rather than a simple upload. Why might Microsoft have chosen 2020, thirty-seven years after the code was written, to make it public? The repository’s own README offers one answer; further research online may bring others to light. Consulting sources beyond the artefact itself – including official statements, later commentary and related releases – is standard historical practice, not a departure from it.

When you examine the [commit history](https://github.com/microsoft/GW-BASIC/commits/master/), you will notice something unusual: the commit is dated to 1983 – not to 2020, when the code was actually uploaded. This is because git, the version-control tool GitHub is built on, allows whoever makes a commit to set its recorded date to any value, including one that predates the tool’s own existence: git did not exist in 1983. The commit metadata also lists an author whose name is unlikely to be one of the code’s original 1975 or 1983 authors, since that person is the Microsoft employee who performed the digitisation and upload, not Gates, Allen or Davidoff.

This distinction matters for how you read the repository: the commit date and author fields describe the act of republishing the code on GitHub, not the act of writing it. Treating them as though they describe the original creation would be an anachronism, the same kind of error a historian would make in treating a modern facsimile’s publication date as the date of the manuscript it reproduces. There is also no way to verify, from the repository alone, whether the deposited files are complete or unaltered relative to the original 1983 source; in principle, the upload could omit or modify material without this being visible in the code itself.

This gap between original creation and later republication is not unique to GW-BASIC. Code surfaces on the web through many channels: official corporate releases, personal repositories, abandonware archives, hobbyist preservation efforts and even unauthorised leaks. In many cases, the person uploading the code may not know when it was originally written, or may choose not record this detail. When you encounter historical code online, approach temporal metadata critically. Ask yourself: does this date reflect when the code was written, when it was uploaded, or something else entirely? The answer is not always obvious.

Finally, consider the question of reuse. The 1983 GW-BASIC source as deposited in GitHub is not accompanied by the build tools or compiler needed to turn it back into a running program. Is this code, as published, actually usable today, or is its value here primarily documentary? The distinction is itself worth reflecting on as a historian.

<!-- section -->


### Reading/viewing suggestions
<!-- section-contents --> 

Marino, Mark C. 2020. *Critical Code Studies*. Cambridge, MA: MIT Press. https://direct.mit.edu/books/monograph/4627/Critical-Code-Studies

Hayden, Gabrielle. 2022. 'Language Hierarchies in Programming'. YouTube video, approx. 20 min. https://www.youtube.com/watch?v=kCZRauYfqvg — Draws on feminist and post-colonial theory to analyze biases in discussions of programming languages.

Gates, Bill. 2025. 'Celebrating 50 Years of Microsoft'. *Gates Notes*. https://www.gatesnotes.com/home/home-page-topic/reader/microsoft-original-source-code

James, Mike. 2025. 'Bill Gates Shares The Code That Launched Microsoft'. *I Programmer*. https://www.i-programmer.info/news/82-heritage/17946-bill-gates-shares-the-code-that-launched-microsoft.html

<!-- briefing-teacher -->
