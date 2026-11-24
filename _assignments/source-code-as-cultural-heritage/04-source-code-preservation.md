---
layout: assignment
unit: source-code-as-cultural-heritage 
lang: en
title: "Preserving source code: initiatives and infrastructures"
cover:
documents:
  - 
tags:
outcomes:
  - Navigate through an institutional code archive and understand its organisational structure
  - Evaluate different preservation strategies 
order: 4
---
Having examined the challenges involved in code preservation and considered historical analysis techniques, we will now turn to actual archiving initiatives. Not all code can be preserved. The sheer volume of software produced today, from the infrastructure running much of the internet to a single script written for one afternoon’s task, forces institutions to make choices about what gets kept and on what basis. This section examines how different institutions, with different values, missions and audiences, have approached that challenge. Understanding these institutional contexts can help us interpret their choices and recognise what each approach captures and what it may miss.

<!-- more -->

<!-- briefing-student -->

### 4.a Two approaches to preservation: GitHub Archive Program and Internet Archive | 20 mins
<!-- section-contents -->
 
There are many approaches to software preservation. Different institutions, shaped by different contexts and values, have built different kinds of archives. Each approach has unique strengths and limitations that reflect its specific preservation goals and institutional mission. This section examines two such initiatives; a third, Software Heritage, is examined in the next section.

**GitHub Archive Program: A Corporate Initiative**

The [GitHub Archive Program](https://archiveprogram.github.com/) represents a specific institutional logic. GitHub, owned by Microsoft since 2018, is a commercial platform where most of the world’s open-source development now takes place. The Archive Program, which includes the Arctic Code Vault, serves multiple purposes: genuine preservation, corporate social responsibility and platform legitimation. This is not criticism but context: understanding *who* preserves code and *why* shapes how we interpret preservation choices.

Launched in 2020, the program creates secure, long-term backups through multiple storage methods. Perhaps most striking is the [Arctic Code Vault](https://www.youtube.com/watch?v=0v9Rwqxa8eI), housed in an abandoned mine deep within the Svalbard Arctic archipelago, where code is stored in a facility designed to last centuries.

![GitHub Open Source Archive Box with AI-generated design](/assets/images/code-as-heritage/GitHub_Archive_Box.jpg "GitHub Archive Box")

**Figure 8:** Archival case for the GitHub Archive Program, containing 17,000 open-source repositories archived on hardened film. Design by Alex Maki-Jokela. *Credit: GitHub Archive Program, via [GitHub Archive Program](https://archiveprogram.github.com/greatest-hits/)*

![Interior of the Svalbard Global Seed Vault storage facility in the Arctic](/assets/images/code-as-heritage/Svalbard_seed_vault_IMG_8894.JPG "Svalbard Global Seed Vault entrance")

**Figure 9:** The Svalbard Global Seed Vault, Arctic Norway. The GitHub Arctic Code Vault is located nearby. *Credit: Bjoertvedt, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Svalbard_seed_vault_IMG_8894.JPG)*

**Internet Archive Software Collection: The Pioneering Spirit**

The Internet Archive, founded by Brewster Kahle in 1996, embodies the idealism of early internet culture, namely the belief that digital technology could democratise access to human knowledge. Its motto, “Universal Access to All Knowledge”, reflects this founding vision.

Rather than focusing primarily on preserving source code as text, the Internet Archive preserves the complete software experience: not just executable programs, but also their accompanying documentation, media and cultural artefacts, which can help users understand the historical context in which the software was actually used. This comprehensive collection ranges from early personal computer applications to classic arcade games, and offers emulated environments where users can actively experience the software functioning as it did decades ago ([Internet Archive 2025](https://archive.org/details/software)). A third initiative, examined in the next section, takes source code itself as its primary object of preservation.

![Staff at the Internet Archive warehouse sorting physical software materials for the software collection](/assets/images/code-as-heritage/Internet_Archive_software_collection_sorting.jpg "Internet Archive software collection sorting")

**Figure 10:** Archivists at the Internet Archive’s warehouse sorting physical software materials, 2018. *Credit: Jason Scott, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2018-03_Internet_Archive_software_collection_sorting.jpg)*g)*

This image is a reminder that heritage preservation involves physical labour and curatorial work, reflecting the human effort behind digitisation and archiving initiatives that is rarely visible in the final archive.

**Exercise: Exploring the GitHub Archive Program and Internet Archive**

In this structured activity, you will analyse two different approaches to software preservation, each with its own strengths and philosophies.

**Part 1: GitHub Archive Program**

Visit and carefully examine the home page of the GitHub Archive Program: [archiveprogram.github.com](archiveprogram.github.com)

**Guiding questions:**

1. Institutional profile: Who runs this initiative, and what does the site state as its mission? What categories of material does it describe archiving?
2. Compare and contrast: What core preservation goals does the GitHub Archive Program share with other preservation initiatives, and what fundamental differences can you identify in their preservation methodologies?
3. Environmental considerations: What specific properties of the Arctic location make it suitable for the Code Vault, and how does this physical storage strategy reflect GitHub’s thinking about different preservation timescales?

**Part 2: Internet Archive Software Collection**

Explore the Internet Archive Software Collection at [archive.org/details/software](archive.org/details/software).

For a specific example, examine: [archive.org/details/jsmess_engine_v2](archive.org/details/jsmess_engine_v2).
 

**Critical analysis questions:**

1. Institutional profile: Who founded the Internet Archive, and what is its self-stated mission? What does  his suggest about its priorities compared to a corporate program like the GitHub initiative?
2. Preservation philosophy: What aspects of software history does the Internet Archive approach to software preservation appear to prioritise?
3. Historical significance: Browse the main categories visible on the home page and identify distinct types of software preserved there. Reflect on why preserving such a wide range of software types, from early computer programs to web-based applications, can contribute to our understanding of technological and cultural evolution.

<!-- section -->

### 4.b Software Heritage: mission, scope and infrastructure | 40 mins
<!-- section-contents -->
[Software Heritage](https://www.softwareheritage.org/) is a non-profit foundation with academic, government and industry partners that emerged from academic research culture. It was founded in France in 2016 by Roberto Di Cosmo (a computer science professor) with institutional support from the National Institute for Research in Computer Science and Automation (Inria) and is rooted in scholarly values such as comprehensive collection, rigorous documentation, persistent citation through identifiers, and open access. Its organisational model prioritises long-term preservation over commercial considerations. Think of it as a library that aims to collect all publicly available books – Software Heritage does this for open source code, though it cannot include proprietary code that is legally protected. By preserving the complete landscape of software development, it aims to provide future researchers with access to a much broader basis of historical evidence than a more selective approach would allow. For a detailed introduction to navigating Software Heritage, see the Programming Historian lesson [Préserver les logiciels de recherche](https://programminghistorian.org/fr/lecons/preserver-logiciels-recherche) (in French).

![Software Heritage browse interface showing the Apollo-11 repository structure](/assets/images/code-as-heritage/Software_Heritage_Apollo11_Browse.jpg "Software Heritage: Apollo-11 repository directory structure")

**Figure 11:** The Software Heritage browse interface displaying the Apollo-11 repository. *Source: [archive.softwareheritage.org](https://archive.softwareheritage.org/browse/origin/directory/?origin_url=https://github.com/chrislgarry/Apollo-11)*

Note that the Apollo 11 repository visible here is itself a transcribed and reconstructed version of the original 1960s code – a “reborn-digital” artefact that has gone through multiple preservation stages before being archived by Software Heritage. This illustrates how preservation archives capture not just original code, but the accumulated transformations and scholarly work involved in making historical code accessible to contemporary researchers.

**Exercise: Understanding the Development of Software Heritage**

To understand how Software Heritage developed into a major preservation initiative, examine the following resources:

**1. December 2016 – six-month retrospective:**  
[softwareheritage.org/2016/12/30/we-have-come-a-long-way](https://www.softwareheritage.org/2016/12/30/we-have-come-a-long-way/)

This post, written six months after the public launch, looks back at the project’s origins and early development.

**2. 2019 Paris Call (read pages 1-2 only):**  
[unesdoc.unesco.org/ark:/48223/pf0000366715](https://unesdoc.unesco.org/ark:/48223/pf0000366715)

This declaration, signed by over 40 international experts following a UNESCO/Inria meeting, frames source code as heritage.

**3. January 2022 – five-year report:**  
[softwareheritage.org/2022/01/05/software-heritage-in-2021-five-years-already](https://www.softwareheritage.org/2022/01/05/software-heritage-in-2021-five-years-already/)

This report summarises the growth of the initiative over five years.

**Guided reflection questions:**

1. When and where did the project originate, and what institutional support enabled it to move forward?
2. How is source code framed in the Paris Call?
3. How has the project evolved by 2022 in terms of institutional support, technical infrastructure, and preservation achievements?

**Exercise: Navigating Software Heritage**

This exercise guides you through the Software Heritage archive. Begin at the homepage: www.softwareheritage.org

**Step 1: Quick analysis:** As you examine the website, identify and take notes on how the platform communicates these three key aspects:

* Its heritage mission (What problem is it trying to solve? Why preserve code?)
* Community engagement opportunities (How can visitors contribute to this preservation effort?)
* The types and categories of code that fall within the scope of the Software Heritage preservation strategy

**Step 2: Exploring features:** Next, navigate to the features page: www.softwareheritage.org/software-heritage-features/. In your notes, categorise which features specifically address:

* Searchability and discovery (How do researchers find what they need?) 
* Long-term preservation strategies (How does the archive ensure code remains accessible decades from now?)

**Critical thinking questions:** After your exploration, consider these deeper questions:

1. How does organising the archive into layers, with individual files, the history of changes to those files and the projects they belong to, correspond to the kinds of questions you would ask when applying source criticism to a piece of code? Which layer would you start with if you were investigating the provenance of a specific artefact?
2. (Optional) Persistent identifiers ensure that a reference to a piece of code continues to point to the same content even if the code moves or the platform changes. Why might this matter for historical scholarship that cites code as evidence?



<!-- section -->

### 4.c Comparing Approaches Across Institutions | 10 mins
<!-- section-contents -->

Having examined all three initiatives – the GitHub Archive Program, Internet Archive and Software Heritage –, we can now situate them alongside one another. Each has unique strengths and limitations that reflect its specific preservation goals and institutional mission.

**Comparing approaches**

To understand the different approaches to software preservation, consider this analogy: If software were a book, these preservation strategies would focus on different aspects:

1. Source code preservation (Software Heritage): Preserves the “manuscript” (human-readable instructions and collaborative development processes)
2. Archive storage (GitHub Arctic Vault): Creates secure “vaults” that protect against catastrophic loss
3. Executable preservation (Internet Archive): Maintains the “reading experience” (how users actually interacted with the software)

Each approach preserves a unique dimension of software as cultural heritage, and together they provide a more comprehensive historical record ([Matthews *et al.* 2010](https://www.ijdc.net/index.php/ijdc/article/view/145/210)).

| Initiative | Institutional basis | Primary values | Preservation focus |
|------------|-------------------|----------------|-------------------|
| **Software Heritage** | Academic/research | Comprehensiveness, citation, scholarly access | Source code as text |
| **GitHub Archive Program** | Corporate/commercial | Platform legitimation, selective preservation, visibility | Source code as curated snapshots |
| **Internet Archive** | Non-profit/pioneer | Universal access, experiential preservation | Software as experience |

**Comparative reflection:** How do these three approaches – comprehensive source code archiving, secure long-term storage and executable preservation – address different aspects of code as heritage? Which aspects might still be missing from current preservation efforts? And consider what happens after preservation: even successfully archived code may need to be decoded, rebuilt or run again decades later, in a technical context very different from the one in which it was written. What further challenges might that raise?

<!-- section -->

### Reading/viewing suggestions
<!-- section-contents --> 

Di Cosmo, Roberto, and Stefano Zacchiroli. 2017. . “Software Heritage: Why and How to Preserve Software Source Code”. *Proceedings of the 14th International Conference on Digital Preservation (iPRES 2017)*. https://www.softwareheritage.org/wp-content/uploads/2020/01/ipres-2017-swh.pdf

Matthews, Brian, Arif Shaon, Juan Bicarregui, and Catherine Jones. 2010. “A Framework for Software Preservation”. *International Journal of Digital Curation* 5 (1): 91–105. https://doi.org/10.2218/ijdc.v5i1.145

GitHub. 2020. *GitHub Arctic Code Vault*. YouTube video, 3:55. https://www.youtube.com/watch?v=0v9Rwqxa8eI
 
**Other Preservation Initiatives in the United States of America**

Computer History Museum. *Software Preservation Group*. https://softwarepreservation.computerhistory.org/

Software Preservation Network. https://www.softwarepreservationnetwork.org/

Yale University Library. *Software Preservation and Emulation*. Research Guide. https://guides.library.yale.edu/softwarepreservationandemulation


<!-- briefing-teacher -->
