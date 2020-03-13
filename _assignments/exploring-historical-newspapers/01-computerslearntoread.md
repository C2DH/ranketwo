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
order: 1
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

### Instructions
<!-- section-contents -->

Computerphile, a channel dedicated to explaining computer science topics to a lay audience, published an interview with Professor Steve Simske, an expert on OCR, in 2017, in which he explains the underlying principles of OCR software. In the following excerpt he explains how the classification of fonts works:
Watch [this passage from 10’10’’ to 12’47'](https://youtu.be/ZNrteLp_SvY?t=610){:target="_blank"}

<!-- section -->

### 1.a Font recognition  | 20 Min
<!-- section-contents -->

- What is the core principle of classification? 
- What is needed for a word to be matched with a particular font? (choose two elements from the four below)

- A library of fonts to compare to the scanned image of the letters  
- The best average of matches of individual letters to a particular font
- An exact match for each letter to a font 
- A manual validation of each word

<!-- section -->

### 1.b OCR and Gothic font
<!-- section-contents -->

Some fonts are more difficult to process than others. A recurring difficulty that arises with historical texts is the recognition of texts in Gothic font. 
Open [this link](http://www.eluxemburgensia.lu/BnlViewer/view/index.html?lang=fr#panel:pa|issue:1160880|article:DTL31){:target="_blank"} and compare the facsimile with the OCR text: 

- What can you say about the variation in OCR output of the word “chorale” between the Latin and Gothic font in the same text?
- Find two other words in the text that start with a capital “C” in Gothic: what letter have they been turned into? 

<!-- section -->

### 1.c Improvement of OCR quality
<!-- section-contents -->

This is the scanned image of the front page of the Neue Zürcher Zeitung (NZZ) published on 26.10.1793 in Zürich, Switzerland. It reports on the trial and execution of Louis XVI’s widow Marie Antoinette in October 1793.

![zurich-newspaper.png](../../assets/images/zurich.png)

The archives of the NZZ were entirely digitised for the first time in 2005, using the microfilms of newspapers to produce scans that were then OCRed. The result of this process proved to be imperfect, especially for earlier texts that were published in Gothic font.

As part of the impresso project, referred to in the clip of this lesson, Phillip Ströbel and Simon Clematide from the University of Zurich have experimented with software developed to recognise handwritten text to improve the quality of the OCR on Gothic fonts. 

The two outputs of the OCR are shown below. Compare them and answer the questions. 

|A. First lines of the front page article of the 26.10.1793 issue of the NZZ|

![fragment-zurich.png](../../assets/images/fragment-zurich.png)

|B. OCR output in 2005|
|Prozeß der Marie Antoinette. Nachdem dieselbe am i g. Weinm. alten StvlS, oder am rz. des ersten Monat« im 2,en Jahre der Republik neuen KaleuderstplS, in den Audienzsaal eingesührt wurde, und sie sich auf den Sessel niedergelassen hatte- fragte sie der Präsident: Wie sie heisse? „ Ich nenne mich, antwortete sie, Marie Antoinette von Lotharingen. Oestreich re. — Wer seyd ihr ?. Ich bin dir Wittwr Ludwig Capet«, ehemaligen Königs der Frauzo« seu.— Wie alt? Z8 Jahre. — Nun wurde von demGe-richtsschreiber die Auklagsakte vorgelesen. Darin» heißt e«,daß aus den dem Tribunale rnhandengestellten Schriften erhellet 'Daß gleich den Messalinen Brunehaut, Fredegoude»nd Medizi«, die man einstKöniainnea von Frankreich genannt habe, und deren verhaßte Namennie au« de» Jahrbüchern der Geschichte werden vertilgt werde» , Marie Antoinette , Ludwig Capets Wittwr, feit ihrem Aufenthalte inFrankreich die Plage und Blotfaugeriun der Franzosen gewesen; daß sie" noch vor der glücklichen Revoluzion |
|improved OCR output in 2019|
|Prozeß der Marie Antoinette. Nachdem dieselbe am 15. Weinm. alten Styls, oder am 23. des ersten Monats im 2ten Jahre der Republik neuen Kalenderstyls, in den Audienzsaal eingeführt wurde, und sie sich auf den Sessel niedergelassen hatte, fragte sie der Präsident: Wie sie heisse? „ Ich nenne mich, antwortete sie, Marie Antoinette von Lotharingen- Oestreich ic. — Wer seyd ihr ?. Ich bin die Wittwe Ludwig Capets, ehemaligen Königs der Franzosen.— Wie alt? 38 Jahre. — Nun wurde von dem Gerichtsschreiber die Anklagsakte vorgelesen. Darinn heißt es, daß aus en dem Tribunale zuhandengestellten Schriften erhelle: Daß gleich den Messalinen Brunehaut, Fredegonde und Medizis, die man einst Königinnen von Frankreich genaunt habe, und deren verhaßte Namen nie aus den Jahrbüchern der Geschichte werden vertilgt werden, Marie Antoinette, Ludwig Capets Wittwe, seit ihrem Aufenthalte in Frankreich die Plage und Blutsaugerinn der Franzosen gewesen; daß sie noch vor der glückichen Revoluzion|

How was the word “Wittwe” recognised in 2005 and 2019? 
What differences do you notice in the recognition of numbers between the 2005 and 2019 outputs?
Now have a look at the manual transcription of the same passage, and compare this to how the numbers were recognised in the 2005 and 2019 outputs.

|A. Manual Transcription|
|Prozeß der Marie Antoinette. Nachdem dieselbe am 15. Weinm. alten Styls, oder am 23. des ersten Monats im 2tem Jahre der Republik neuen Kalenderstyls, in den Audienzsaal eingeführt wurde, und sie sich auf dem Sessel niederlassen hatte, fragte sie der Präsident: Wie sie heisse? “Ich nenne mich, antwortete Sie, Marie Antoinette von Lotharingen-Oestreich - Wer seyd ihr? Ich bin die Wittwe Ludwig Capets, ehemaligen König der Franzosen. - Wie alt? 38 Jahre. - Nun wurde von dem Gerichtsschreiber die Anklagsakte vorgelesen. Darinn heißt es daß aus den dem Tribunale zuhandengestellten Schriften erhelle: Daß gleich den Messalinen Brunehaus, Fredegonde und Medizis, die man einst Königin von Frankreich genannt habe, und deren verhaßte Namen nie aus den Jahrbüchern der Geschichte werden vertilgt werden, Marie Antoinette, Ludwig Capets Wittwe, seit ihrem Aufenthalte in Frankreich die Plage und Blutsaugerinn der Franzosen gewesen: daß sie noch der glücklichen Revoluzion,|

Would you have been able to find this article on the basis of the first OCR if you had searched with the following keywords? (explain why for each case)
“Marie Antoinette”
“Revolution”

<!-- section -->







### Reading/viewing suggestions
<!-- section-contents -->

<!-- briefing-teacher --> 






