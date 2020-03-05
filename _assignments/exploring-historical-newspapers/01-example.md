---
layout: assignment
unit: exploring-historical-newspapers
lang: en
title: "Digitisation and how computers learn to read?"
cover:
tags:
  - media history
  - web research
  - conversion from analogue to digital
requirements: Fast WIFI connection, computer or laptop, application on laptop or computer to view video,
learning outcomes:
  - Understand the process of digitisation and optical character recognition 
documents:
order: 1
outcomes:
 - Understand the process of digitisation and optical character recognition 
---

Digitisation facilitates access to historical newspapers, but at the same time it introduces hurdles: searching for articles on a given topic can be hindered by mistakes that have been made when applying, for example, optical character recognition (OCR).

The process of digitisation begins by scanning a physical newspaper in order to produce an image of each page. Since images as such are not searchable, the letters in the text have to be made recognisable. This is done through a technique known as optical character recognition (OCR), with software that is able to understand the meaning of the image of a character and turn it into a digital entity that represents a single character. 

For this to happen, two sub-steps have to be taken:   

1. Binarisation of the image’s colours, i.e. the transformation of the image of a page into just two colours: black and white. This simplifies the image of the page and increases the contrast between dark and light sections, thereby making the individual characters stand out from the page background. 

2. Classification of the letters. After the individual characters have been delineated, they have to be assembled into words. In order to do so, the software first compares the captured letters to known fonts and selects the font that is most likely to fit.

It considers these features:  
- Are these letters from a Latin alphabet or an Arabic one? 
- Are the letters in italic or bold? 
- Is the font Times New Roman or Comic Sans MS? 

A similar detection mechanism then identifies the language and compares the words that are found to a corresponding dictionary. The output of the OCR processing is a transcribed machine readable text. We now have a digitised newspaper: the image of the page and its text.


<!-- more -->

<!-- briefing-student -->

### 1.a Font recognition  | 20 Min
<!-- section-contents -->

Computerphile, a channel dedicated to explaining computer science topics to a lay audience,  published an interview with Professor Steve Simske, an expert on OCR, in 2017, in which he explains the underlying principles of OCR software. In the following excerpt he explains how the classification of fonts works:




