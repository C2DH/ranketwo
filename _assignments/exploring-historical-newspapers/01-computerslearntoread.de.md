---
layout: assignment
unit: exploring-historical-newspapers
lang: de
title: "Digitalisierung und wie Computer lesen lernen"
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

Der Prozess der Digitalisierung beginnt mit dem Scannen einer physischen Zeitung, wobei von jeder Seite ein Bild erstellt wird. Da Bilder an sich nicht durchsuchbar sind, müssen die Buchstaben des Textes erkennbar gemacht werden. Dafür kommt eine Technik zum Einsatz, die als optische Zeichenerkennung (optical character recognition, OCR) bezeichnet wird. OCR-Software ist in der Lage, das Bild eines Zeichens zu verstehen und es in eine digitale Einheit umzuwandeln, die ein einzelnes Zeichen darstellt.

Dazu sind zwei Einzelschritte erforderlich:

1. Binarisierung der Farben des Bildes, d. h. die Umwandlung des Bildes einer Seite in nur zwei Farben: Schwarz und Weiß. Dadurch wird das Bild der Seite vereinfacht und der Kontrast zwischen dunklen und hellen Bereichen erhöht, sodass sich die einzelnen Zeichen vom Hintergrund der Seite abheben.
2. Klassifizierung der Buchstaben. Nachdem die einzelnen Buchstaben voneinander abgegrenzt wurden, müssen sie zu Wörtern zusammengesetzt werden. Dazu vergleicht die Software die erfassten Buchstaben zunächst mit bekannten Schriftarten und wählt die am besten passende Schriftart aus.

Folgende Merkmale können berücksichtigt werden:
- Handelt es sich um Buchstaben aus einem lateinischen oder arabischen Alphabet?
- Sind die Buchstaben _kursiv_ oder __fett__?
- Ist die Schriftart _Times New Roman_{:.font-times} oder _Comic Sans MS_{:.font-comic}?

Mithilfe eines ähnlichen Erkennungsmechanismus wird anschließend die Sprache identifiziert und die gefundenen Wörter werden mit einem entsprechenden Wörterbuch verglichen. Das Ergebnis der OCR-Verarbeitung ist ein transkribierter, maschinenlesbarer Text. Wir haben nun eine digitalisierte Zeitung: das Bild der Seite und ihren Text.


<!-- more -->

<!-- briefing-student -->

### Aufgaben
<!-- section-contents -->

Der Kanal Computerphile, auf dem Informatikinhalte für ein nicht fachkundiges Publikum vermittelt werden, hat 2017 ein Interview mit dem OCR-Experten Professor Steve Simske veröffentlicht, in dem er die Grundprinzipien von OCR-Software erläutert. Im folgenden Abschnitt erklärt Professor Simske, wie die Klassifizierung von Schriftarten funktioniert: Sehen Sie sich [diese Passage ab 10:10 bis 12:47 an](https://youtu.be/ZNrteLp_SvY?t=610){:target="_blank"}

<!-- section -->

### 1.a Schrifterkennung | 20 Min
<!-- section-contents -->

Das Grundprinzip der Klassifizierung: Was ist nötig, damit ein Wort einer bestimmten Schriftart zugeordnet werden kann? Wählen Sie zwei der vier unten aufgeführten Elemente aus.
- Eine Bibliothek von Schriftarten zum Vergleich mit dem gescannten Bild der Buchstaben
- Der beste Durchschnittswert der Übereinstimmungen einzelner Buchstaben mit einer bestimmten Schriftart
- Eine genaue Übereinstimmung jedes Buchstabens mit einer Schriftart
- Eine manuelle Validierung jedes Wortes


<!-- section -->

### 1.b OCR und gotische Schrift
<!-- section-contents -->

Einige Schriftarten sind schwieriger zu verarbeiten als andere. Eine immer wieder auftretende Problematik bei historischen Texten ist die Erkennung von Texten in gotischer Schrift. Rufen Sie [den Artikel „Vereine und Sport“, _Luxemburger Wort_, Dienstag, 16. Juli 1925, S. 4](https://viewer.eluxemburgensia.lu/ark:70795/bnfbxq/pages/4/articles/DTL105){:target="_blank"} auf und vergleichen Sie das Faksimile mit dem OCR-Text:
- Was können Sie zu den Unterschieden in der OCR-Ausgabe des Wortes „Chorale“ in lateinischer und gotischer Schrift im gleichen Text sagen?
- Finden Sie im Text zwei weitere Wörter, die in gotischer Schrift mit einem großen „C“ beginnen: Welcher Buchstabe wurde daraus gemacht?

<!-- section -->

### 1.c Verbesserung der OCR-Qualität
<!-- section-contents -->

Hier sehen Sie das gescannte Bild der Titelseite der Neuen Zürcher Zeitung (NZZ), die am 26.10.1793 in Zürich, Schweiz, erschien. Darin wird über den Prozess und die Hinrichtung von Marie Antoinette, der Witwe von Ludwig XVI., im Oktober 1793 berichtet.

<img src="../../assets/images/zurich.png" width="600">

Das Archiv der NZZ wurde 2005 zum ersten Mal vollständig digitalisiert. Dabei wurden die Mikrofilme der Zeitungen eingescannt und anschließend mit OCR bearbeitet. Das Ergebnis dieses Prozesses war nicht perfekt, insbesondere bei früheren Texten, die noch in gotischer Schrift veröffentlicht wurden.

Im Rahmen des impresso-Projekts, auf das im Clip dieser Lektion Bezug genommen wird, haben Phillip Ströbel und Simon Clematide von der Universität Zürich mit Software experimentiert, die für die Erkennung von handschriftlichem Text entwickelt wurde, um so die Qualität der OCR für gotische Schriften zu verbessern.

Die beiden Ergebnisse der OCR sehen Sie unten. Vergleichen Sie sie und beantworten Sie die Fragen.


|**A. Erste Zeilen des Artikels auf der Titelseite der NZZ vom 26.10.1793**|

<img src="../../assets/images/fragment-zurich.png" width="600">

| **B. OCR-Ausgabe von 2005** |
| Prozeß der Marie Antoinette. Nachdem dieselbe am i g. Weinm. alten StvlS, oder am rz. des ersten Monat« im 2,en Jahre der Republik neuen KaleuderstplS, in den Audienzsaal eingesührt wurde, und sie sich auf den Sessel niedergelassen hatte- fragte sie der Präsident: Wie sie heisse? „ Ich nenne mich, antwortete sie, Marie Antoinette von Lotharingen. Oestreich re. — Wer seyd ihr ?. Ich bin dir Wittwr Ludwig Capet«, ehemaligen Königs der Frauzo« seu.— Wie alt? Z8 Jahre. — Nun wurde von demGe-richtsschreiber die Auklagsakte vorgelesen. Darin» heißt e«,daß aus den dem Tribunale rnhandengestellten Schriften erhellet 'Daß gleich den Messalinen Brunehaut, Fredegoude»nd Medizi«, die man einstKöniainnea von Frankreich genannt habe, und deren verhaßte Namennie au« de» Jahrbüchern der Geschichte werden vertilgt werde» , Marie Antoinette , Ludwig Capets Wittwr, feit ihrem Aufenthalte inFrankreich die Plage und Blotfaugeriun der Franzosen gewesen; daß sie" noch vor der glücklichen Revoluzion |
| **Verbesserte OCR-Ausgabe von 20199** |
| Prozeß der Marie Antoinette. Nachdem dieselbe am 15. Weinm. alten Styls, oder am 23. des ersten Monats im 2ten Jahre der Republik neuen Kalenderstyls, in den Audienzsaal eingeführt wurde, und sie sich auf den Sessel niedergelassen hatte, fragte sie der Präsident: Wie sie heisse? „ Ich nenne mich, antwortete sie, Marie Antoinette von Lotharingen- Oestreich ic. — Wer seyd ihr ?. Ich bin die Wittwe Ludwig Capets, ehemaligen Königs der Franzosen.— Wie alt? 38 Jahre. — Nun wurde von dem Gerichtsschreiber die Anklagsakte vorgelesen. Darinn heißt es, daß aus en dem Tribunale zuhandengestellten Schriften erhelle: Daß gleich den Messalinen Brunehaut, Fredegonde und Medizis, die man einst Königinnen von Frankreich genaunt habe, und deren verhaßte Namen nie aus den Jahrbüchern der Geschichte werden vertilgt werden, Marie Antoinette, Ludwig Capets Wittwe, seit ihrem Aufenthalte in Frankreich die Plage und Blutsaugerinn der Franzosen gewesen; daß sie noch vor der glückichen Revoluzion |

- Wie wurde das Wort „Wittwe“ 2005 und 2019 erkannt?
- Welche Unterschiede fallen Ihnen bei der Erkennung von Zahlen zwischen den Ergebnissen von 2005 und 2019 auf?
Schauen Sie sich nun die manuelle Transkription desselben Textes an und vergleichen Sie die Zahlen mit der Erkennung in den Ergebnissen von 2005 und 2019.

| **A. Manuelle Transkription** |
| Prozeß der Marie Antoinette. Nachdem dieselbe am 15. Weinm. alten Styls, oder am 23. des ersten Monats im 2tem Jahre der Republik neuen Kalenderstyls, in den Audienzsaal eingeführt wurde, und sie sich auf dem Sessel niederlassen hatte, fragte sie der Präsident: Wie sie heisse? “Ich nenne mich, antwortete Sie, Marie Antoinette von Lotharingen-Oestreich - Wer seyd ihr? Ich bin die Wittwe Ludwig Capets, ehemaligen König der Franzosen. - Wie alt? 38 Jahre. - Nun wurde von dem Gerichtsschreiber die Anklagsakte vorgelesen. Darinn heißt es daß aus den dem Tribunale zuhandengestellten Schriften erhelle: Daß gleich den Messalinen Brunehaus, Fredegonde und Medizis, die man einst Königin von Frankreich genannt habe, und deren verhaßte Namen nie aus den Jahrbüchern der Geschichte werden vertilgt werden, Marie Antoinette, Ludwig Capets Wittwe, seit ihrem Aufenthalte in Frankreich die Plage und Blutsaugerinn der Franzosen gewesen: daß sie noch der glücklichen Revoluzion, |

- • Hätten Sie diesen Artikel anhand der ersten OCR finden können, wenn Sie mit den folgenden Stichworten gesucht hätten:  „Marie Antoinette“, „Revolution“? Begründen Sie Ihre Antworten für beide Fälle.

<!-- section -->



### Empfehlungen Lektüre/Videos
<!-- section-contents -->


*Einen technischen und historischen Überblick sowie Informationen über einige Anwendungsgebiete der optischen Zeichenerkennung finden Sie im*  
- Wikipedia._“Texterkennung”_. Zuletzt geändert am 26. April 2023. [https://de.wikipedia.org/wiki/Texterkennung](https://de.wikipedia.org/w/index.php?title=Texterkennung&oldid=233184299){:target="_blank"}

*Um zu verstehen, wie OCR Zeichen und Wörter identifiziert (bekannt als Mustererkennung), schauen Sie sich diesen Abschnitt an:*
- Sharda, Aryaman. “How Does Optical Character Recognition (OCR) Work.” 21. November 2017. Lehrvideo, 01:30. [Youtube-Video](https://www.youtube.com/watch?v=cAkklvGE5io){:target="_blank"}

*Eine ausführlichere Erklärung der einzelnen Schritte der optischen Zeichenerkennung erhalten Sie in diesem Interview mit Professor Steve Simske:*
- Riley, Sean. “Optical Character Recognition (OCR).” 4. Juli 2017. Computerphile. Lehrvideo, 14:15. [Youtube-Video](https://www.youtube.com/watch?v=ZNrteLp_SvY){:target="_blank"}

*Informationen über das Prinzip der Binarisierung ab 2:29:*
- Riley, Sean. “Optical Character Recognition (OCR).” July 4, 2017. Computerphile. Educational video, 14:15. [Youtube-Video](https://youtu.be/ZNrteLp_SvY?t=149){:target="_blank"}

*Hier finden Sie ab 3:55 Informationen über die einzelne verbundene Komponente (oder einen Buchstaben) ab 3:55:*
- Riley, Sean. “Optical Character Recognition (OCR).” 4. Juli 2017. Computerphile. Lehrvideo, 14:15.[Youtube-Video](https://youtu.be/ZNrteLp_SvY?t=235){:target="_blank"}

*Informationen zur Erkennung der in einem Text verwendeten Arten von Buchstaben bzw. zur Klassifizierung der Schriftarten ab 7:27:* 
- Riley, Sean. “Optical Character Recognition (OCR).” 4. Juli 2017. Computerphile. Lehrvideo, 14:15. [Youtube-Video](https://youtu.be/ZNrteLp_SvY?t=446){:target="_blank"}


<!-- briefing-teacher -->
