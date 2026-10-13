---
layout: assignment
unit: source-code-as-cultural-heritage 
lang: en
title: "The journey of the Apollo code: preservation, heritagisation and hidden histories"
cover:
documents:
  - 
tags:
outcomes:
  - Engage with the materiality, technicality and embedded cultural references of code for the purposes of historical analysis
order: 3
---


<!-- more -->

<!-- briefing-student -->

### 3.a The original artefact: reading the paper listing | 30 mins  
<!-- section-contents -->
 
The preservation of Apollo’s source code represents a rare exception in software history. Source code from the 1960s presents particular challenges: very little has survived, and what has often did so by accident. The Apollo Guidance Computer software survived because paper listings ended up in institutional collections, primarily the MIT Museum, and because dedicated individuals later undertook the task of digitisation and transcription. Yet even when source code survives, it doesn’t carry everything with it – paper listings document technical decisions but not the conditions in which they were made, the labour that produced them or the institutional dynamics that shaped the project.

![Original source code page 731 of Luminary 099 from Apollo 11, showing the beginning of the BURN_BABY_BURN master ignition routine](/assets/images/code-as-heritage/apollo-11-luminary-099-page-731.jpg "Page 731 of Luminary 099: BURN_BABY_BURN--MASTER_IGNITION_ROUTINE")

**Figure 6:** Page 731 of the Luminary 099 source code listing for Apollo 11's Lunar Module Guidance Computer, 14 July 1969. *Source: [ibiblio.org Apollo Archive](http://www.ibiblio.org/apollo/ScansForConversion/Luminary099/), digitised from MIT Museum collections.*

This is a page from the printed source code listing for the Apollo 11 Lunar Module software. Before examining the digitised version, consider what the original paper document reveals:

**Physical characteristics:**

- Continuous-feed paper with perforated edges, typical of 1960s computer printouts
- Monospace typeface produced by a line printer
- Page numbers printed on the document itself (Page 731)
- Assembly language notation as it appeared when the code was compiled on 14 July 1969

The columns of abbreviated instructions may seem impenetrable at first – this is assembly language, the level of hierarchy introduced in section 1 that sits directly above machine code. But as you will see, much of what matters historically on this page requires no assembly knowledge to read.

**What is visible without technical expertise:**

- The routine name at the bottom: `BURN, BABY, BURN -- MASTER IGNITION ROUTINE`
- A timestamp – a machine-generated record of the exact time the code was compiled (here: `16:27 JULY 14, 1969`) – and a program identifier in the header area
- Columns of abbreviated instructions and numeric codes


**Exercise part 1: First encounter with the artefact**

Examine Figure 6 carefully. Without any programming knowledge, reflect on the following questions:

- What types of information can you extract from this page? (Consider dates, names, structure, formatting)
- What questions does the artefact raise that it cannot answer? (Consider authorship, purpose, context)
- How does the physical format of continuous-feed paper shape what was preserved?
- Now consider the limits of this page on its own. It tells you a great deal about who made it, when, and how it was produced, but not everything you would need to know if you wanted to understand exactly how the code made the computer behave. What kind of additional information about the machine itself would you need for that deeper level of understanding?

This exercise demonstrates a key principle and the limitations of that principle. Without technical expertise, historians can still extract real information from a piece of code: dates, names, structure and the material conditions in which it was produced. But extracting this information is not the same as fully understanding what the code did once it ran. That deeper level of interpretation would require knowledge of the machine itself, something this page alone cannot supply.

<!-- section -->

### 3.b Hidden Histories: Gender and Invisible Labour | 30 mins
<!-- section-contents -->

The code alone does not reveal who produced it, in what conditions, or what that labour cost. To learn about those aspects, historians need other sources, such as oral history.

![Margaret Hamilton standing beside software code listings for the Apollo program](/assets/images/code-as-heritage/Margaret_Hamilton_-_restoration.jpg "Margaret Hamilton with Apollo source code, 1969")

**Figure 7:** [Margaret Hamilton](https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer), director of MIT’s Software Engineering Division, beside the Apollo program's source code listings, 1969. *Credit: Draper Laboratory, Public Domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Margaret_Hamilton_-_restoration.jpg)*

Margaret Hamilton directed the team at the MIT Instrumentation Laboratory that produced the Apollo software. She is also credited with coining the term “software engineering”. The stacks of printed code beside her – roughly her own height – illustrate the sheer physical scale of software projects in the 1960s, when code existed primarily as printed documentation.

**Exercise: Code and invisible labour**

In 2004, the Computer History Museum conducted an oral history interview with Hamilton. The following excerpts are drawn directly from that transcript. Read them, then watch the interview ([Margaret Hamilton oral history, Computer History Museum, 2004](https://www.youtube.com/watch?v=6bVRytYSTEk)) to explore further.

On working in exclusively male environments:

> *“It was all men. All men and me.”*

On bringing her daughter to the laboratory to work nights and weekends, and a colleague’s reaction:

> *“He said how can you work here when you have a baby at home [...]. He wasn’t used to having a woman there number one, and number two with a child.”*

On coining the term “software engineering” and how it was received:

> *“The engineers thought it was funny. There’s margaret again, with her software engineering. You know it was funny.”*

On the gender pay gap:

> *“I found out that some men were making twice as much as women, for no reason, but excuses were given out, like, well because women get married, their husband will support them so they don’t need us.”*

Her own framing of these experiences:

> *“I didn’t think of it as men and women. It wasn’t fair”*

Considering the excerpts above, reflect on:

- What aspects of Hamilton’s experience and contribution do not appear anywhere in the code itself.
- How her testimony complements what the paper listing (Figure 6) can tell us about the Apollo project.
- What this suggests about the types of sources historians need to use alongside code artefacts.

These details about gender dynamics, professional recognition and the practical conditions of technical labour do not appear in the code itself. The programming profession became increasingly masculinised during the 1960s and 1970s: although women had played a significant role in the early days of programming, the professionalisation of the field involved constructing a gendered professional identity that marginalised women’s contributions ([Ensmenger 2010](https://mitpress.mit.edu/9780262517966/the-computer-boys-take-over/)). 

Hamilton’s testimony provides a first-person account of navigating these dynamics during one of the period’s most prominent software projects. Her account shows how oral history interviews with software pioneers can serve as essential sources for computing history, capturing dimensions of experience that no other source, however well preserved, can supply on its own. The [Computer History Museum](https://computerhistory.org/) and [NASA History Office](https://www.nasa.gov/history/history-office/) hold collections of such interviews that provide indispensable context for interpreting archival materials.


<!-- section -->

### 3.c From paper to digital: questions of reconstruction | 30 mins
<!-- section-contents -->

The paper listings held at the MIT Museum are not what most people encounter today when they access the Apollo code. The version available online is a digital reconstruction that has been transcribed, formatted and hosted on platforms that did not exist in 1969. For historians, this raises a familiar methodological concern: when we work with a copy or transcription rather than an original, we need to understand the chain of transmission. Who produced the version we are consulting? Under what circumstances? What transformations occurred along the way?

Today, the Apollo 11 source code is accessible on [GitHub](https://en.wikipedia.org/wiki/GitHub), a platform used for hosting and sharing code. Examine the header of the file `BURN_BABY_BURN--MASTER_IGNITION_ROUTINE.agc`:

**Source:** https://github.com/chrislgarry/Apollo-11/blob/master/Luminary099/BURN_BABY_BURN--MASTER_IGNITION_ROUTINE.agc

```
# Copyright:  Public domain.
# Filename: BURN_BABY_BURN--MASTER_IGNITION_ROUTINE.agc
# Purpose:  Part of the source code for Luminary 1A build 099.
#   It is part of the source code for the Lunar Module's (LM)
#   Apollo Guidance Computer (AGC), for Apollo 11.
# Assembler:  yaYUL
# Contact:  Ron Burkey <info@sandroid.org>.
# Website:  www.ibiblio.org/apollo.
# Pages:  731-751
# Mod history:  2009-05-19 RSB  Adapted from the corresponding
#       Luminary131 file, using page
#       images from Luminary 1A.
#   2009-06-07 RSB  Corrected 3 typos.
#   2009-07-23 RSB  Added Onno's notes on the naming
#       of this function, which he got from
#       Don Eyles.
#
# This source code has been transcribed or otherwise adapted from
# digitized images of a hardcopy from the MIT Museum.  The digitization
# was performed by Paul Fjeld, and arranged for by Deborah Douglas of
# the Museum.  Many thanks to both.  The images (with suitable reduction
# in storage size and consequent reduction in image quality as well) are
# available online at www.ibiblio.org/apollo.  If for some reason you
# find that the images are illegible, contact me at info@sandroid.org
# about getting access to the (much) higher-quality images which Paul
# actually created.
#
# Notations on the hardcopy document read, in part:
#
# Assemble revision 001 of AGC program LMY99 by NASA 2021112-061
# 16:27 JULY 14, 1969
# Page 731
## At the get-together of the AGC developers celebrating the 40th anniversary
## of the first moonwalk, Don Eyles (one of the authors of this routine along
## with Peter Adler) has related to us a little interesting history behind the
## naming of the routine.
##
## It traces back to 1965 and the Los Angeles riots, and was inspired
## by disc jockey extraordinaire and radio station owner Magnificent Montague.
## Magnificent Montague used the phrase "Burn, baby! BURN!" when spinning the
## hottest new records. Magnificent Montague was the charismatic voice of
## soul music in Chicago, New York, and Los Angeles from the mid-1950s to
## the mid-1960s.
# BURN, BABY, BURN -- MASTER IGNITION ROUTINE
```

**Exercise: Tracing the code’s journey**

Using the header above, answer the following questions:

- Who digitised the original paper listings? Who transcribed them into text files?
- What institution held the source material?
- What changes were made to the files after initial transcription, and when?
- How does the header distinguish between original 1969 content and later additions?
- The routine is named BURN_BABY_BURN. Based on the `##` comments in the header, where does this name come from? What does the presence of this cultural reference in mission-critical code suggest about the working environment of 1960s aerospace programming? What does it reveal about the types of sources historians need to interpret code artefacts?

<details>
<summary><strong>Understanding the Header Layers (click to expand)</strong></summary>

The header is a palimpsest – a document where different historical moments coexist, each requiring distinct analytical attention:

**Original historical content (1969):**
- The routine name: `BURN, BABY, BURN -- MASTER IGNITION ROUTINE`
- The assembly timestamp: `16:27 JULY 14, 1969`
- The program identifier: `AGC program LMY99 by NASA`

**Reconstruction and transcription metadata (2009):**
- Transcriber identification: `Ron Burkey <info@sandroid.org>`
- Modification history: dates, initials (RSB), specific changes
- Source documentation: “transcribed or otherwise adapted from digitized images of a hardcopy from the MIT Museum”
- Provenance chain: Paul Fjeld (digitisation), Deborah Douglas (MIT Museum), ibiblio.org

**Added historical context (2009, from oral history):**
- The Magnificent Montague story, added July 2009
- Attribution: “Onno’s notes... which he got from Don Eyles”
- The 40th anniversary gathering as source

This transparency is itself a marker of careful heritagisation – the archive documents its own construction. *Editor’s note: the markers for inserting comments may vary depending on the file format and the programming or markup language, but this is beyond the scope of the current lesson.*

The BURN_BABY_BURN routine name is not an anomaly. Software development has historically incorporated humour, wordplay and cultural references as part of its working culture. The name can be traced back to the phrase used by disc jockey Magnificent Montague on the Los Angeles radio station KGFJ, which became associated with the Watts uprising of August 1965. It is therefore a reference that carried multiple resonances: musical intensity, social upheaval and the literal burning of rocket fuel. Crucially, this meaning would be invisible without Don Eyles’ testimony at a 2009 reunion of AGC developers – it is an example of how oral history can unlock what code alone cannot reveal ([Tiwari et al. 2024](https://doi.org/10.1109/ICSE-SEIS.2024.12); [Montague and Baker 2003](https://mitpress.mit.edu/9780262517966/the-computer-boys-take-over/)).


</details>

The Apollo code’s journey from creation to online accessibility can be mapped as a chain of transmission. Each stage enabled certain forms of access while introducing specific transformations:

| Stage | Approximate date | Form | What was preserved | What was transformed |
|-------|------------------|------|-------------------|---------------------|
| Original creation | 1966-1969 | Punched cards, magnetic tape | Working software in development environment | — |
| Assembly printout | July 1969 | Paper listings | Human-readable source code | Executability lost |
| Archival deposit | 1970s-2000s | Paper in MIT Museum | Physical artefact | Institutional context, tacit knowledge |
| Digitisation | 2003-2009 | Scanned images | Visual record of pages | Some image quality, materiality |
| Transcription | 2009 | Text files (.agc) | Searchable, executable (via emulator) text | Transcriber's interpretative decisions introduced |
| Platform publication | 2009-present | GitHub repository | Version-controlled, publicly accessible code | Embedded in platform infrastructure |
| Heritage archiving | 2016-present | Software Heritage | Persistent, citable archive | — |

Transmission is never neutral. Each stage enabled certain forms of access – digitisation made the code viewable without visiting MIT; transcription made it searchable and executable via emulators – while also introducing changes. The modification history (“Corrected 3 typos”) shows that even careful transcription involves decisions that alter the artefact. What emerges from this process is what scholars call a “reborn-digital” object, an artefact that originated in a non-digital form, was lost or became inaccessible, and has been reconstituted through digitisation and reconstruction into a new digital existence ([Ernst 2013](https://www.upress.umn.edu/book-division/books/digital-memory-and-the-archive)). This Apollo case thus demonstrates both what code preservation makes possible and why historians must bring multiple source types to bear: the paper listing, oral history and digital reconstruction each reveal dimensions the others cannot.

<!-- section -->

### Reading/viewing suggestions
<!-- section-contents --> 



<!-- briefing-teacher -->
