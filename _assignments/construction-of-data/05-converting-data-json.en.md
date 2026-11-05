---
layout: assignment
unit: construction-of-data 
lang: en
title: "Converting data: the example of JSON format"
cover:
documents:
  - 
tags:
outcomes:
  - Understand the principle and aims of converting data between formats.
  - Convert a CSV table into another structured format and validate the result using JSON as a worked example.
order: 5
---
Historians increasingly work with digital tools that require data in specific formats. A format represents the way data are encoded, stored and displayed; it can be important for how data can be used, exchanged and shared. The format is reflected in the extension of the data file (for example `.csv`).

When working with digital tools, structured formats make it easier to exchange data between information systems. Structured formats use standardised rules regarding the architecture and form of the data they contain, commonly called the data schema.

For example, in assignment 3, we worked with data in the form of a table. Tabular data are best stored, displayed, used and shared in [CSV (comma-separated values)](https://en.wikipedia.org/wiki/Comma-separated_values) format. Tables are extremely useful, but data often need to be converted from one format to another.

Why is this useful?

* Different tools require different formats (for example web applications)
* Some formats are better suited to storing and exchanging large volumes of data
* Some formats allow more complex structures than tables

All data formats are based on a simple principle: they employ a small set of agreed-upon rules (a syntax) for marking the beginning and end of one piece of information after another, allowing the data to be read by machines and expanded or manipulated as long as the rules are known to the specific software and system. 

Several formats are commonly used in digital humanities and digital history. XML (Extensible Markup Language) is mainly used to annotate text or describe layout (it underlies all Microsoft Word documents). Most formats, for example [JSON (JavaScript Object Notation)](https://www.json.org/json-en.html), can be adapted to store and structure any sort of information. We will work with JSON in the following sections of this lesson because it is widely used and works well for the hierarchical data often employed by historians.

JSON is designed to:
* represent structured data in a way that computers can easily process
* allow more flexible organisation of information (for example nested data)

In this assignment, you will learn how to convert your tabular data into JSON and explore what this format makes possible.

<!-- more -->

<!-- briefing-student -->

### 5.a Recognising structure in JSON  | 20 mins  
<!-- section-contents -->
 
Look at the following dataset describing Karl Marx:

```json
{
   "firstName":"Karl Heinrich",
   "lastName":"Marx",
   "birth":{
      "date":"1818-05-05",
      "place":"Trier, Prussia (now Germany)"
   },
   "death":{
      "date":"1883-03-14",
      "place":"London, England"
   },
   "gender":"male",
   "nationality":"German",
   "occupations":[
      "Philosopher",
      "Economist",
      "Sociologist",
      "Historian",
      "Political Theorist"
   ],
   "knownFor":[
      {
         "title":"The Communist Manifesto",
         "year":1848,
         "coAuthor":"Friedrich Engels"
      },
      {
         "title":"Das Kapital",
         "year":1867,
         "volumes":3
      }
   ]
}
```

Now work through the following questions:

1. Identify different kinds of elements in the data:

* Where do you see text values?
* Where do you see numbers?
* Where do you see lists?

2. Compare this JSON data with your table:

* What information is the same?
* What is organised differently?

3. Look at the structure:

* Where do you see groups of information inside other groups?
* Why might this be useful for describing historical data?

Write down your observations before moving on.

If you need help, check below. 


| **Type**    | **What it means**                                          | **Example in JSON**                                            | **Formatting notes**                                                                                |
| ----------- | ---------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **string**  | A piece of text, always in double quotation marks.                  | `"firstName": "Karl"`                                          | Always use **double quotation marks `"..."`** for text (not single quotation marks).                                  |
| **integer** | A whole number (no quotation marks).                                | `"year": 1867`                                                 | No quotation marks around numbers.                                                                           |
| **number**  | A number that can have decimals.                           | `"rating": 4.5`                                                | Same rule: no quotes.                                                                               |
| **boolean** | A truth value: `true` or `false`.                          | `"isAlive": false`                                             | Must be lower case (`true`, not `True`).                                                             |
| **null**    | No value (empty).                                          | `"middleName": null`                                           | Must be lower case `null`.                                                                           |
| **object**  | A collection of key–value pairs inside curly braces `{ }`. | `"birth": { "date": "1818-05-05", "place": "Trier" }`          | Keys and values are separated by a colon `:`. Multiple entries are separated by commas.             |
| **array**   | A list of values inside square brackets `[ ]`.             | `"occupations": ["Philosopher", "Economist", "Revolutionary"]` | Values are separated by commas. Arrays can contain strings, numbers, objects or even other arrays. |


<!-- section -->

### 5.b  Understanding how JSON organises data | 10 mins
<!-- section-contents -->
Based on what you observed, here are some key principles of JSON:

**Basic structure**

* Data is organised into key–value pairs
  * "firstName": "Karl Heinrich"

* Different containers (or “drawers” or “boxes”) are used to structure data:
  * `{  }` (curly brackets) → objects (group related information)
  * `[  ]` (square brackets) → arrays (lists of values)
  * `" "` (quotation marks) → text values

**Syntax**

* Entries are separated by commas `,`
* Keys and text values must use double quotation marks
* Information can be organised hierarchically because, unlike tables, JSON allows nested structures
* Indentation is used to make nested structures easier to read by humans
* Commas must be placed correctly

Now go back to the previous exercise and look again at the structure to see if you understand better.  

<!-- section -->

### 5.c Creating your own JSON | 35 mins
<!-- section-contents -->
Now convert your own table into JSON.

Use the table you created earlier in assignment 3.b. 

Rewrite this table in JSON using:
* key–value pairs
* at least one list (`[ ]`)
* at least one nested object (`{ }`)

If you need help, you can check the [JSON user documentation](https://json-schema.org/learn/getting-started-step-by-step).

Validate your JSON to check if your work is correctly formatted:

Paste your JSON into a validator: https://jsonchecker.com/

Try to identify and fix errors yourself before using automatic correction tools. 


Reflect on the following aspects: 

* What was difficult when converting your table into JSON?
* What kinds of errors did you make?
* In what situations might JSON be more useful than a table?
* What are the limits of JSON for historical data?

Converting a table into JSON by hand is useful to get a sense of these differences directly. Luckily, when working on a real project there is software to do this task for you, which also helps to avoid errors when typing brackets and quotation marks yourself. However, it is important to understand what actually changes in the process: a table forces every record into a set of columns, so something like Karl Marx’s several publications either needs a separate linked table (as in Section 4) or a cell containing several values (which raises the problems of separators and is not good for readability). With a format like JSON we can simply list them under one single entry because of the nested structure. On the other hand, tables allow us to quickly sort and filter our records, or to spot a missing value at a glance. Neither format is “better”: the choice depends on the characteristics of our data and whether it is more regular or nested and variable in form.

<!-- section -->

### 5.d Exploring JSON rules  | 30 mins
<!-- section-contents -->
*This sub-assignment is of advanced difficulty for beginners*. 

Some JSON datasets follow more formal rules called a data schema, which define:
* What fields exist
* What kind of values they contain

Explore the [JSON schema](https://json-schema.org/learn).

After reading [what a schema is](https://json-schema.org/understanding-json-schema/about), try to imagine when you might need to write your own schema and when it would be better to rely on the official JSON schema (or another schema used by a large community).

For historians and humanities scholars it is wise to use a schema that is established by others. However, you can of course write your own schema. We recommend [this comprehensive tutorial](https://json-schema.org/learn). If you’re not sure or don’t have time, you might as well use one of the many online schema generators listed in the reading suggestions below.

<!-- section -->

### 5.e Critiquing data formats | 20 mins
<!-- section-contents -->
In real life, historians rarely convert data from one format to another by hand as there are dedicated tools to do it for them. But it is crucial to understand what is actually happening during such a conversion, because this allows us to critically assess a dataset we did not assemble ourselves. Only if we know what it means to build a dataset by converting information extracted from sources into a structured format can we notice if details or context are adequately represented or have been lost along the way.

In the previous exercises, you worked with different ways of structuring and representing data. This final step invites you to reflect more critically on the formats you use.


Consider the formats you have used in this assignment (JSON, CSV table).

1. Can these formats be opened and edited with different software tools?
2. Would someone else easily be able to reuse your data?
3. What problems might arise if the software you used becomes unavailable?


As with encoding, the format of a data file is something we can think about critically.

* Some file formats are proprietary: they can only be opened or edited with specific software.
* Other formats are open: their structure is publicly documented and they can be used by many different tools.

Some formats are also easier to convert or exchange than others.

If you want your data to be easier to reuse and share, it is often advisable to use open formats.

Examples:
- Tables → comma-separated values (`.csv`)
- Text → Markdown (`.md`)
- Structured data → JSON (`.json`)

Reflect on the following:

- Why might historians prefer open formats?
- Are there situations where proprietary formats might still be useful?


You can find a list of open formats here:
https://en.wikipedia.org/wiki/List_of_open_file_formats

<!-- section -->


### Reading/viewing suggestions
<!-- section-contents --> 

*Online JSON schema generators*

JSON Forge. JSON Schema Generator https://www.jsonforge.com/tools/schema-generator

JSON Swiss https://jsonswiss.com/

Introducing JSON https://www.json.org/json-en.html


<!-- briefing-teacher -->
