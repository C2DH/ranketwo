---
layout: assignment
unit: construction-of-data  
lang: en
title: "Understanding the relational database"
cover:
documents:
  - 
tags:
outcomes:
  - Understand a simple data model designed for historical sources
  - Recognise relationships and how they are implemented in a data model
  - Understand the transition from the abstract data model to the physical database
order: 4
---
The previous section highlighted the creation of single tables to describe one type of object. But historical sources usually involve many different kinds of objects at once – people, places, organisations, events, etc. – and various connections between these objects. Furthermore, if historians need to analyse hundreds or thousands of documents, the information may quickly become repetitive and complex to manage. When spreadsheets are no longer sufficient to effectively work with sources, relational databases come into play. Based on [specific software](https://en.wikipedia.org/wiki/Database#Database_management_system), databases were designed to organise large amounts of information while preserving the connections between the described objects.

This section focuses on the concept of data models and the principles underpinning their implementation, using a simple example of a historical source (a newspaper article). Technical notions are explained briefly, but mastering them in depth is beyond the scope of this lesson. Help can be found in the resources proposed in the reading suggestions.

<!-- more -->

<!-- briefing-student -->

### Instructions
<!-- section-contents -->

Look at the following source: Karl Marx. Whose Atrocities? New York Daily Tribune, 10 April 1857. [URL](https://www.marxists.org/archive/marx/works/1857/04/10.htm).

If you have a problem accessing the resource, please consult this [archived URL](https://web.archive.org/web/20260000000000*/https://www.marxists.org/archive/marx/works/1857/04/10.htm).

![Source: “Whose Atrocities?”](/assets/images/construction-of-data/source-full.jpg)
Figure

The source is a newspaper article by Karl Marx, published on 10 April 1857. For the purpose of this lesson, it will be considered as part of a collection of articles on UK policy towards China from which a database should be constructed. 

The image you see in the above figure represents the transcribed version of the article as published on the website [marxists.org](https://www.marxists.org/). This version is itself a digitisation of an edited volume published in 1951 assembling all articles on China authored by Marx in the *New York Daily Tribune*. The media archaeology that traces the different ontological levels of our source (web page, book chapter, newspaper article) can be traced in the screenshots below that display different captures taken from [Zotero](https://www.zotero.org/), the popular software for managing bibliographical information.

![Screenshot of Zotero entries](/assets/images/construction-of-data/zotero-entries.jpg)

The same source would look like this if captured in [Tropy](https://www.tropy.org/), the software specifically designed to manage archive photos:

![Screenshot of Tropy entry](/assets/images/construction-of-data/tropy-object.jpg)

The exercises in the following subsections use the source as specified at the beginning of the section (newspaper article) and provide specific instructions.

<!-- section -->

### 4.a Designing a data model | 35 mins  
<!-- section-contents -->
 
Designing a data model
Historians decide what information they want to record in a spreadsheet or database depending on their research question. This is the basis on which they select categories and determine which data they want to capture from a historical source. The selection of categories and the way they relate to each other is called a data model.

A data model defines how the information is divided and organised:

* Which types of information will be described as categories
* Which attributes will be recorded for each category
* How the different parts will relate and connect to each other

Different research questions require different data models. A model can follow a source-centred (or document-centred) approach, in which information is extracted about each object and connected to the source that mentioned it. By contrast, a method-centred approach represents only selected objects as entities and how they are related to each other. In theory, the research question comes first and the data model is built on the basis of it. In practice, however, designing a data model is more of an iterative process, moving back and forth between the initial research question, limitations imposed by the sources, such as ambiguities, and requirements related to the chosen analytical method.

Consider the source above.

Imagine you are researching British political figures involved in the UK’s policy on China in the 19th century.

1. Which types of information would you record? Define relevant descriptive categories.
2. What would be the essential information to extract for these categories? Define the attributes for each category.
3. Think of ways in which the categories you have defined relate to each other. Imagine arrows connecting them and try to find a verb for each arrow.
4. Think about which information in the article can be ignored.

Use a pencil and paper to draw your ideas.
Now look at the following image. This is what a data model for this source could look like. Ignore the technical details and focus instead on what you can understand.

![Scheme and connections](/assets/images/construction-of-data/database_scheme_simple.jpg)

1. Can you recognise types of information that represent descriptive categories based on the article?
2. Can you identify what kind of information is considered important based on the attributes of each category?
3. Can you understand how the categories are related? How would you interpret the arrows connecting them?

Building a data model in practice raises further questions, and the following subsections will focus on these from a conceptual point of view.

<!-- section -->

### 4.b  Extracting historical information from sources | 10 mins
<!-- section-contents -->
Before building a database, historians must identify the information they want to record. In this exercise, we are going to extract names, places, organisations and events from our historical sources. We are actually going to perform a simplified, non-automatised form of [named entity recognition (NER)](https://en.wikipedia.org/wiki/Named-entity_recognition).

Look at the source excerpt above.

* List all the people mentioned.
* List all the places mentioned.
* List all the organisations mentioned.
* List all the events mentioned.

Which entities were easiest to identify? Which were more ambiguous?

![first paragraphs](/assets/images/construction-of-data/source-zoom.jpg)

<!-- section -->

### 4.c Organising complex historical information |  mins
<!-- section-contents -->
Building a data model in practice raises further questions, such as how to handle a person known by several different names or titles or how to show that one person can be linked to several different jobs or roles (as with Karl’s many publications in Section 3). These are not flaws in your model, but design decisions every historian working with data has to make.

Imagine that you repeat the previous exercise for 500 newspaper articles. Suppose Lord Palmerston appears in 50 of the articles. Try to answer the following:

* How would you record the different political roles he held during the period covered by Marx’s articles?
* How would you handle the different titles used to refer to him?
* How would you group references such as “the Premier”, “his Lordship” and “Lord Palmerston” so that they are all recognised as referring to the same person without ambiguity?

Reflect on why a spreadsheet can become difficult to manage when information is repeated, ambiguous, uncertain or complex.

The database software itself doesn’t know that “Lord Palmerston” and “the Premier” are the same person – that decision is made by whoever builds the data model. Once it is made, though, the database enforces it: Palmerston exists only once, under a unique identifier, and every event, office or source that refers to him simply stores that one identifier instead of repeating his name each time.

<!-- section -->

### 4.d Implementing a data model in a relational database |  mins
<!-- section-contents -->
Databases are the main carrier for digital data. They can store a great variety of different types of data. But their true value comes from their ability to run queries over all of their content. By using queries, we can obtain specific information, evaluate the magnitude or duration of phenomena and detect patterns in the data.

To make all of this possible, relational databases rely on a few key principles. A relational database organises information into separate tables, each centred on the objects selected for the research, where every row represents one specific occurrence of the object. Every record needs a **primary key** – a unique identifier that distinguishes it from all others, even if names or descriptions are identical across sources. **Foreign keys** allow tables to reference each other, so that a person, a place or an organisation only needs to be described once and can then be linked to as many events or sources as needed. Where relationships are complex, for example if one person was involved in many events and/or we have to deal with one event involving many people, **junction tables** store the connections without duplicating data. Together, these mechanisms allow historians to ask questions that cut across many sources at once.

The key principles presented below are based on the specific case of the example database outlined in a separate section.

**Primary keys**. How do you make sure each row can always be distinguished from the others? Titles like “Earl of Clarendon” don’t help on their own – this is a hereditary title, so different men held it at different points in history. The name alone doesn’t tell you *which* Earl of Clarendon a source is talking about. A primary key solves this: it is a short code, invented once and never reused, that belongs to exactly one row, permanently. These identifiers should follow a consistent, systematic pattern – you cannot just use a label at random. In our example database, people are coded P001, P002, P003…, places follow their own pattern (L001, L002…) and events follow another pattern (E001, E002…). A consistent scheme like this makes it immediately clear which table an identifier belongs to and keeps the whole database manageable as it grows. Imagine trying to keep track of thousands of records with inconsistent *ad hoc* labels!

| person_id | name | source_id |
|---|---|---|
| P001 | Sir James Hogg | S001 |
| P002 | Lord Palmerston | S001 |
| P003 | Earl of Clarendon | S001 |

`P003` always means *this specific* Earl of Clarendon – the one described in our source –, no matter how many other Earls of Clarendon existed before or after him.

**Foreign keys**. Once every row has its own permanent ID, tables can be linked without repeating information. A foreign key is simply a primary key from one table copied into another table to point back to it. Instead of adding “Lord Palmerston, Premier of England” to every event he attended, we just write `P002`, and the database follows that pointer back to the full record for that person whenever needed.

| role_id | person_id | org_id | title |
|---|---|---|---|
| RO003 | P003 | O002 | Minister of Foreign Affairs |

Here,  `person_id` and `org_id` are foreign keys: they don’t describe the Role row itself but instead point to where the full details are found.

Check the example database in 4.e. Can you explain in your own words why `P003` in the Office table is a foreign key, not a primary key? What is the primary key of that Office row instead?

**Junction tables**. Some relationships cannot be stored with a simple foreign key. Take the Lord Mayor’s banquet (E002): both Palmerston (P002) and Clarendon (P003) took part in it. If you tried to add a person_id column to the Event table, you could only fit one person per event – there is no room for a second. If instead you tried adding an event_id column to the Person table, you would run into the same wall from the other side: Palmerston alone appears at several events, not just one. Junction tables solve this by giving the relationship itself its own table, with one row per pairing rather than per person or per event. A row like P002 – E002 simply states “Palmerston took part in the banquet”; a second row, P003 – E002, states “Clarendon took part in the banquet too” – both can exist side by side, without forcing either the Person or the Event table to hold more than one value per field. This is exactly what the Person–Event table does: every row links exactly one person to exactly one event, and as many rows as needed can share the same person_id or the same event_id. Together with primary and foreign keys, junction tables let historians ask questions that cut across many sources at once – “who attended which events, and when?” – in ways a single spreadsheet, with its one-row-per-record limit, cannot represent.

![Junction table Person-Event](/assets/images/construction-of-data/junction_table.jpg)

Of course, there are rules to follow when creating a database: primary keys cannot be empty, the types of data (textual, numerical, etc.) need to be specified and so on. But any software used to create a database (like the free [Libre Office Base](https://www.libreoffice.org/DISCOVER/BASE/)) will remind you of these rules to ensure that your database works. As the aim of this lesson is to explain what lies behind a database, please consult the references (Julien 2024) and (Cosovschi 2024) in the reading suggestions to learn more about implementing a data model.

<!-- section -->

### 4.e  |  mins
<!-- section-contents -->


<!-- section -->

### 4.f Linking the database |  mins
<!-- section-contents -->
So far, every relationship in our database has allowed at least one side to have several partners. But historians and archivists also regularly work with [authority records](https://en.wikipedia.org/wiki/Authority_control) – external, standardised vocabularies defined by cultural institutions.

[Wikidata](https://www.wikidata.org/), a free and open knowledge base, assigns exactly one unique identifier (a “QID”, e.g. `Q193656`) to each distinct real-world entity it describes. Linking our Person table to Wikidata gives a genuine **one-to-one relationship**: each Person in our database corresponds to at most one Wikidata entry, and each Wikidata entry we link corresponds to exactly one Person – never several.

**Identifier** (new table)

| person_id | wikidata_qid |
|---|---|
| P002 | Q193656 |

1. Go to [wikidata.org](https://www.wikidata.org/) and use the search bar at the top of the page.
2. Search for “Lord Palmerston” (or one of the other people from our source, e.g. “Earl of Clarendon”).
3. Open the corresponding entry. The QID appears directly under the title, in the form (Qxxxxxx), and also in the page’s URL.
4. Add the QID as a new row in the Identifier table above.

Which people from our source were easy to find on Wikidata? Were there any for which you were unsure whether you had found the right entry?

The relational model is not the only way to organise data. [NoSQL](https://en.wikipedia.org/wiki/NoSQL) databases (a loose family including document stores, key–value stores and graph databases) work without fixed tables and predefined columns: each record can have its own structure, providing more flexibility for heterogenous data or dynamic, evolving collections. A popular model that could also be used for the example used in this lesson is [RDF (Resource Description Framework)](https://en.wikipedia.org/wiki/Resource_Description_Framework): it does not use tables but expresses information in simple three-part statements consisting of subject–predicate–object (so-called “triples”). In our case, one triple would be `Palmerston` – `held office` – `Prime Minister`. Wikidata is based on this principle, and linking the Person table to a Wikidata QID is a first step towards an RDF-based linked-data model that connects data from various sources and in various formats.

![Types](/assets/images/construction-of-data/odb.jpg) 

<!-- section -->

### 4.g Extending the database |  mins
<!-- section-contents -->
This exercise builds on the previous subsections.

The article by Karl Marx provided at the beginning of section 4 refers to the Arrow Incident.

Consult the [Wikipedia article on the Second Opium War](https://en.wikipedia.org/wiki/Second_Opium_War) to learn more.

* Add the event to the Events table.
* Identify any additional people, organisations or places that should be included.
* Do you need new tables? Why?

<!-- section -->

### Reading/viewing suggestions
<!-- section-contents --> 
Nodegoat. What Is a Relational Database? Accessed 4 June 2026. https://nodegoat.net/blog.s/20/what-is-a-relational-database.

Cosovschi, Agustín. “From Sources to Data: Designing a Database for the Humanities and Social Sciences with Nodegoat”. *Programming Historian*, 29 February 2024. https://programminghistorian.org/en/lessons/designing-database-nodegoat.

Julien, Octave. Creating and using databases in medieval history: historiography, concepts and practice. Seminários do GIHM, April 2024, Porto, Portugal. ￿[halshs-04550456￿](https://shs.hal.science/halshs-04550456v1)

Robertson, Stephen. “The properties of digital history”. *History and Theory* 61 (4) (2022): 86‑106. [DOI](https://doi.org/10.1111/hith.12286).

Viale, Mattia. “From the Historical Source to a Database: A Short Story”. *Refashioning the Renaissance*, 21 November 2018. https://refashioningrenaissance.eu/from-the-historical-source-to-a-database/.


<!-- briefing-teacher -->
