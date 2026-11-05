---
layout: assignment
unit: construction-of-data 
lang: en
title: "From sources to data"
cover:
documents:
  - 
tags:
outcomes:
  - Select descriptive categories and attributes that are appropriate for a specific research purpose
  - Organise information about people or objects into a table of records, attributes and values.
order: 3
---
We will now explore how data are produced to describe and study the world around us. Texts, people, animals, places and historical events can all be transformed into descriptive data. By creating such data, historians turn sources into structured representations that can be organised, searched and analysed. This process is both conceptual, involving research choices and categories, and technical, relying on tools such as spreadsheets and databases, which also introduce their own constraints.

<!-- more -->

<!-- briefing-student -->

### 3.a Designing descriptive categories | 25 mins 
<!-- section-contents -->
 
Let’s take a simple example: a “Wanted” poster of the kind that you might see in Westerns or comics (see figure below). Look carefully at the poster and the information it provides. 

![Wanted poster](/assets/images/construction-of-data/Wanted_Poster_marx_new.jpg)

Then think of the poster as a simple table that focuses on a given person and lists a number of characteristics in different columns with the purpose of identifying that person.

**Person table**

|Person ID|Attribute 1|Attribute 2|Attribute 3|Attribute 4|
|:---------|:---------|:--------|:-------|:--------|
|Person0001|Value1|Value2|Value3|Value4|

[Link to editable table: Person](/assets/docs/construction-of-data/person-table.pdf)

STEP 1
Fill in the table. For the attributes (the characteristics listed in the column headers, such as “First Name:”), refer to the poster. For the values (the actual dates and information entered in the columns, such as “Karl”), use your critical skills and get help from the image in the poster and research on the web.

<details>
<summary><strong>Need help? (click to expand)</strong></summary> 
In the above scaffold table, attribute 1 would be the person’s first name, attribute 2 would be the person’s last name, attribute 3 would be the gender, attribute 4 the place of birth and so on (please refer to the poster). Such a table would now describe a person, Karl Marx.
</details> 


STEP 2
By selecting specific attributes, we create *descriptive categories*. Obviously, our selection of attributes would be different if we wanted to describe the same person in another context, for example as an author, or if we were describing something else, like a place, a piece of art, an animal or a book. In other words, the selection of descriptive categories depends on the aim. In the case of the “Wanted” poster, the aim is to identify and catch a fugitive. For this reason, identifying a person’s favourite dessert, for example, might not be the most significant property, especially if we can only list a limited number of them on our Wanted poster.

Can you think of significant properties that would matter in this case but are not included on the poster?


<!-- section -->

### 3.b Creating descriptive data  | 40 mins
<!-- section-contents -->

When we want to describe and compare several historical personalities, objects or events, we can organise information in tables made of rows and columns. Each column represents a category or attribute – that is, a feature we want to record, such as a name, date, place or other characteristic. The top row of the table usually contains headers identifying these categories. Each subsequent row contains the information describing one individual entry, while the recorded information itself is called a value. Organised in tables, these categories and values form data collections that can be searched, sorted, extended and analysed with the help of digital tools such as spreadsheets or databases.

We can now expand our table to list several historical figures by adding further records to it:

|Person ID|first_name|last_name|year_of_birth|place_of_birth|author_of|gender|number_of_children|is_still_alive|
|:---------:|:--------:|:-------:|:--------:|:-------:|:--------:|:-----:|:---:|:---:|
|P0001|Karl|Value 2|Value 3| Value 4|Value 5|Value 6|Value 7|Value 8| 
|P0002|...|...|...|...|...|...|...|...|
|P0003|...|...|...|...|...|...|...|...|

[Link to editable table: Historical figures](/assets/docs/data-criticism/historical-persons-table.docx)

When we want to describe and compare several historical personalities, objects or events, we can organise information in tables made of rows and columns. Each column represents a category or attribute – that is, a feature we want to record, such as a name, date, place or other characteristic. The top row of the table usually contains headers identifying these categories. Each subsequent row contains the information describing one individual entry, while the recorded information itself is called a value. Organised in tables, these categories and values form data collections that can be searched, sorted, extended and analysed with the help of digital tools such as spreadsheets or databases.

We can now expand our table to list several historical figures by adding further records to it:

* Karl Marx
* Wilhelm Marx
* Eleanor Marx 
* Groucho Marx

Now that you have entered the data, let’s observe the different types of values and the issues they may raise.
* Compare the first and third columns after the ID: what types of values do you have in each?


<details>
<summary><strong>Need help? (click to expand)</strong></summary> 
While the values for the first two descriptive columns are clearly textual (often called a “string”, like a string of characters), the third is a number (often referred to as an “integer”, meaning a whole number). 
</details> 

* Observe the attribute in the third column: what additional values would you have to add if the attribute was “date” rather than “year”? How would you express these values based on what you learned in 1.c?
* What type of values could you enter in the fourth column?

<details>
<summary><strong>Need help? (click to expand)</strong></summary> 
The fourth column could be a string again, but it could also be a geo-coordinate, like a GPS location. In addition, it is unclear if this column refers to countries, cities, regions, villages or even specific buildings.
</details> 

* What kind of issues could you encounter with the fifth column? 
<details>
<summary><strong>Need help? (click to expand)</strong></summary> 
Our first historic person, Karl, was rather productive and was the author of several works. This is not a question related to the aim; it is a structural problem, in that one person can be linked to many works. This is what we call a one-to-many relationship. Squeezing several titles into a single cell (separated by commas, for example) might look like a solution, but it makes the data hard to search, sort or count reliably. The best solution is to give authored works their own table and link it back to the person. We will see how to do this in Section 4.
</details> 

* Do you think that the sixth column could create specific questions as to the values you would enter? In what ways do you think you could express these values (text, other)?

<details>
<summary><strong>Need help? (click to expand)</strong></summary> 
In this column, the values could be pre-defined: would you define two or more types of values? Whatever you decide, would these values be textual or integers? Think in terms of <a href="https://en.wikipedia.org/wiki/Coding_(social_sciences)">coding data</a>.
</details>

* What values can you enter in the eighth column? 

<details>
<summary><strong>Need help? (click to expand)</strong></summary> 
The eighth column can only hold a “yes” or “no” answer (in most computational contexts, this is expressed in “Boolean” values: `true` or `false`).
</details>

What you have encountered here is called [data types](https://en.wikipedia.org/wiki/Data_type). Like the descriptive categories that you should select before you begin collecting data, you also need to think of the appropriate data types for each of them.

<!-- section -->

### 3.c  Creating datasets | 30 mins
<!-- section-contents -->

Historians do not record all possible information. The categories they choose depend on the questions they want to ask and the comparisons they want to make. This means that different attributes can be employed in datasets for different purposes.

Remember the video animation: out of all the things available in her grandmother’s house, Lea is not interested in the vase or the mirror but in specific objects that she considers to hold special memories. In subsection 1.a, your first task was to note down the objects Lea enumerates in the video as findings. Use this list to put yourself into Lea’s shoes: her purpose is to create an inventory of her findings.

1. Imagine an Object table to describe each of the objects enumerated in the video (one object per row).
2. Which attributes would you create for each of the objects enumerated (one attribute per column)?

<details>
<summary><strong>Need help? (click to expand)</strong></summary> 

If your purpose is to create an *inventory* that will give a quick indication of what exists and where, a few basic attributes are enough:

| object_id | object_type | location_found | condition |
|---|---|---|---|
| 1 | floppy disk | grandmother’s desk drawer | unreadable, rusted casing |

If your purpose is instead to *document* the object in detail – for example, to preserve or analyse it later – you need more attributes:

| object_id | object_type | material | dimensions | label_text | condition_notes | digitised |
|---|---|---|---|---|---|---|
| 1 | floppy disk | plastic, magnetic film | 3.5 inch | “Photos 1998” (handwritten) | rusted casing, label partially faded | no |

Notice how the same object requires a different set of properties depending on your purpose.
</details>

Critically thinking about data assembled by somebody else is crucial if we want to employ these data in our research. We always need to evaluate them to identify potential biases, shortcomings or problematic choices of categories. And to ensure that other people using our data can do the same thing, we need to document why we have chosen a specific category or value and why we might have changed our mind later on so that our decisions remain traceable. This enables other researchers to look for complementary sources from a different archive or compare our data with another type of source (like oral history or photographs) to check, enhance or even criticise the conclusions that our dataset might suggest as a result of the selected data model.

<!-- section -->

### Reading/viewing suggestions
<!-- section-contents --> 

Lemercier, Claire, and Claire Zalc. 2019. *Quantitative Methods in the Humanities: An Introduction*. Translated by Arthur Goldhammer. Charlottesville: University of Virginia Press.

Roberts, Spencer W. Spreadsheets for Historians – Spencer W. Roberts. 12 August 2014. [https://swroberts.ca/scholarship/spreadsheets-for-historians/](https://swroberts.ca/scholarship/spreadsheets-for-historians/)

Rogers, Jonathan. LibGuides: Working with Quantitative Data: Home. Accessed 2 June 2026. [https://libguides.law.ucla.edu/data/home](https://libguides.law.ucla.edu/data/home).


<!-- briefing-teacher -->
