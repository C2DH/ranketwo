---
layout: assignment
unit: transformation
lang: de
title: "Screenshots und Bilderkennungssoftware"  
cover:
tags:
outcomes:
  - Erlernen, wie digitale Technologie zum Kopieren von Bildern eingesetzt wird und wie dabei automatisch Metadaten (Informationen über die erstellte Kopie) erzeugt werden
  - Erlernen der Grundprinzipien der Bilderkennung und deren Beitrag zum Übergang von textbasierten zu multimodalen Kommunikationsformen
  - Erlernen, wie man Quellenkritik auf eine digitale Darstellung eines Objekts anwendet, das online veröffentlicht wurde
documents:
  - the-metadata-librarian-explains-metadata-video
order: 1
---
Alle soeben gezeigten Bilder im Clip „Transformation“ stammen aus einer anderen Quelle. Sie wurden kopiert und mithilfe von Technologien, mit denen sich Bilder „transformieren“ und abrufen lassen, in einen neuen Kontext eingefügt. Bei dieser Aufgabe geht es um Bilderkennungssoftware, auch bekannt als Computer Vision. Zuerst werden Sie lernen, wie Sie einen Screenshot eines Bildes erstellen und die zugehörigen Metadaten untersuchen können. Anschließend lernen Sie, mithilfe von Software herauszufinden, woher ein Bild im Internet ursprünglich stammt. Zum Abschluss analysieren Sie das Bild mithilfe von Tools zur digitalen Quellenkritik. Damit können Sie den Ursprung des Bildes bis zu seiner Veröffentlichung in Form einer digitalen Darstellung innerhalb einer Online-Umgebung zurückverfolgen und alle Änderungen dokumentieren, die bis zu seiner jüngsten Form am Bild vorgenommen wurden.

[card](the-metadata-librarian-explains-metadata-video)

<!-- more -->

<!-- briefing-student -->

### 1.a Screenshots untersuchen | 35 minutes
<!-- section-contents -->

Ein Screenshot (mitunter auch als Bildschirmfoto oder, in den Anfangszeiten des Internets, als Bildschirmausdruck bezeichnet) kann als revolutionär erachtet werden. Die Leichtigkeit, mit der man ein Bild kopieren und einfügen, in einem anderen Kontext verwenden und mit anderen teilen kann, befeuert die Verwendung und Verbreitung von Bildern im Internet. Dies gilt insbesondere für nicht urheberrechtlich geschützte Bilder. Im ersten Schritt zur Erforschung der Bilderkennung sollen Sie mit Ihrem Laptop zwei Screenshots von Bildern Ihrer Wahl aus der Animation „Transformation“ erstellen.

- Sehen Sie sich zunächst erneut den Videoclip „Transformation“ an. Halten Sie das Video an einer beliebigen Stelle an (z. B. bei Minute 0:28 oder 2:03) und machen Sie einen Screenshot von einem scharfen Bild eines Objekts oder einer Person im angehaltenen Clip. (Klicken Sie [hier](https://lifehacker.com/how-to-take-a-screenshot-or-picture-of-whats-on-your-co-5825771){:target="_blank"}, um zu erfahren, wie Sie einen Screenshot auf einem Mac- oder Windows-Computer erstellen).

Bei Mac-Nutzern werden die Screenshots automatisch auf dem Desktop angezeigt. Bei Windows-Nutzern werden die Screenshots in einem Ordner namens „Screenshots“ im „Bilder“-Ordner angezeigt. Kopieren Sie diese Screenshots in die beiden Felder Ihres Antwortformulars (dieses wird dieser Lektion in Kürze hinzugefügt und kann dann heruntergeladen werden).

Bei der Aufnahme der Screenshots werden automatisch Informationen, sogenannte Metadaten, darüber generiert. Metadaten, ein Begriff, der wörtlich übersetzt „Daten über Daten“ bedeutet, sind Informationen über das betreffende Objekt. Es handelt sich um ein Konzept, das für die Verwaltung digitaler Inhalte (einschließlich Fotos, Texten, Audio- oder Videodateien, Tweets oder 3D-Objekten) von zentraler Bedeutung ist. Bei digital erstellten Bildern wird diese Art von Metadaten als Exif-Daten bezeichnet, wobei Exif für „Exchangeable Image File Format“ steht. Diese Datei enthält Informationen über das Bild wie die Anzahl der Pixel, die Anzahl der Bytes, das Farbschema, das Erstellungsdatum und das Format des Bildes.

- Sehen Sie sich das Video [The Metadata Librarian Explains Metadata](https://youtu.be/ABF2FvSPVYE) der Metadaten-Bibliothekarin Mary Rose von den Edwardsville Libraries der Southern Illinois University an, in dem sie Ihnen anhand der Beschriftung von Speiseresten im Kühlschrank eine Einführung in das Konzept der Metadaten gibt.

Sehen Sie sich nun die Metadaten des ersten der beiden Screenshots an, die Sie erstellt haben.
- Klicken Sie [hier](../../assets/pdf/SS_Exif.data.in.Mac.and.Windows.pdf){:target="_blank"}, um zu einer PDF-Datei mit einer Übersicht über alle Metadatenfelder zu gelangen. Darin erfahren Sie auch, wie man auf sie zugreift und was sie bedeuten. In der PDF-Datei finden Sie alle wichtigen Felder für Metadateninformationen aus den nachstehenden Tabellen.
- Füllen Sie für den ersten Ihrer beiden Screenshots lediglich die markierten Metadatenfelder aus – entweder in der Mac- oder der Windows-Version – und nehmen Sie die übrigen gängigen Metadaten zur Kenntnis.

{:.table.border.table-sm.text-bold-highlight}
| Mac OS-Metadaten | Feststellung |
|-----------------|------------|
| **Art**
| **Größe**
| Ort
| Erstellt
| Geändert
| Zuletzt geöffnet
| **Bildgröße**
| **Farbraum**
| **Farbprofil**
| **Alpha-Kanal**
| **Name & Suffix**
| Kommentare
| **Öffnen mit**
| Vorschau (kleinere Version des Screenshots)
| Freigaberechte 

{:.table.border.table-sm.text-sm.text-bold-highlight}
| Windows-Metadaten | Feststellung |
|-----------------|------------|
| **Dateityp**
| **Öffnen mit**
| Ort
| **Größe**
| Größe auf Datenträger
| Erstellt
| Geändert
| Letzter Zugriff 
| Attribute
| **Objektname**
| Berechtigungen
| Aufnahmedatum
| **Abmessungen**
| **Breite**
| **Höhe**
| **Bittiefe**
| **Name**
| Ordnerpfad
| Attribute
| Offlinestatus
| Freigegeben für 
| Besitzer

- Prüfen Sie, ob die von Ihnen ermittelten Metadaten korrekt waren. Nutzen Sie dazu das Online-Tool [Metadata2Go](https://www.metadata2go.com), mit dem Sie die Exif- und Metadaten eines Bildes leichter ermitteln und überprüfen können und das darüber hinaus Erklärungen zu einer Reihe von Metadatenkategorien oder -feldern liefert, mit denen Sie möglicherweise nicht vertraut sind.

<!-- section -->

### 1.b Bilderkennungstools erkunden | 50 min
<!-- section-contents -->

Der Zweck von Bilderkennungssoftware besteht darin, Systemen beizubringen, Muster in Bildern auf die gleiche Weise zu erkennen wie der Mensch. Die Software wird mithilfe von Daten trainiert, die es ihr ermöglichen, eine Art Vorhersagemodell zu erstellen. Dieses Modell definiert eine Reihe von Bedingungen, die erfüllt sein müssen, und übersetzt diese in Pixelwerte, sodass die Software unterschiedliche Bilder erkennen kann, indem sie nach der größtmöglichen Ähnlichkeit mit dem sucht, was sie gelernt und gespeichert hat. Wir werden uns nun zwei Online-Bilderkennungsdienste ansehen: einen relativ bekannten, [Bild mit Google suchen](https://www.google.com/imghp?hl=de){:target="_blank"}, et un moins connu, [Tineye](https://tineye.com){:target="_blank"}, und einen weniger bekannten Dienst, Tineye.

Für diese Aufgabe wählen Sie den zweiten der beiden Screenshots aus, die Sie in Aufgabe 1a aufgenommen haben (d. h. nicht den, dessen Metadaten Sie bereits analysiert haben), um mithilfe zweier Bilderkennungsdienste, Google Search by Image und Tineye, dessen Herkunft zu ermitteln.

![Image search results Google Image](/../../assets/images/transformation/1b/google-image-screenshot.png)
![Image search results Tineye](/../../assets/images/transformation/1b/tineye.png)

- Um zu verstehen, wie sich die Bilderkennung durch Computer entwickelt hat, sehen Sie sich bitte [diesen TED-Talk des Gelehrten Fei Fei Li](https://www.ted.com/talks/fei_fei_li_how_we_re_teaching_computers_to_understand_pictures){:target="_blank"} von der Stanford University an.
- Öffnen Sie als Nächstes [Google Images](https://images.google.com/){:target="_blank"} in einer Registerkarte und [Tineye](https://tineye.com){:target="_blank"} in einer anderen Registerkarte und laden Sie Ihren Screenshot über den Desktop in beiden Diensten hoch. Unten sehen Sie eine Zusammenfassung der abgerufenen Ergebnisse zusammen mit allen aufgeführten Treffern.

[![Image search results Tineye](/../../assets/images/transformation/1b/tineye-results.png "Image search results Tineye")](/../../assets/images/transformation/1b/tineye-results.png){:target="_blank"}
[![Image search results Google Image](/../../assets/images/transformation/1b/google-image-results.png "Image search results Google Image")](/../../assets/images/transformation/1b/google-image-results.png){:target="_blank"}

- Tragen Sie Ihre Feststellungen in die Tabelle ein. Kopieren Sie Ihren Screenshot in das erste Feld (wenn Sie Hochformat gewählt haben, müssen Sie ihn verkleinern, damit er in das Feld passt).
- Beschreiben Sie die Unterschiede in den Auswahloptionen der beiden Dienste.
- Beschreiben Sie die Metadaten-Komponenten in der Suchzusammenfassung beider Dienste und achten Sie dabei auf die Unterschiede zwischen den beiden Diensten. Dazu zählen Dinge wie die Abmessungen des Bildes, mögliche verwandte Suchbegriffe, der Dateityp und alle sonstigen Informationen, die sich auf das Bild selbst beziehen.
- Beschreiben Sie die Metadaten-Komponenten in den Suchergebnissen beider Dienste und achten Sie dabei auf die Unterschiede zwischen den beiden Diensten. Dazu zählen Dinge wie Titel und Text der angezeigten Websites, die Anzahl der Suchergebnisse und alle sonstigen Informationen, die sich auf die von beiden Diensten generierten Suchergebnisse beziehen.
- Beschreiben Sie die ersten zwei Suchergebnisse, zuerst das Ergebnis der Suche und dann das, was Ihnen nach dem Öffnen des Links angezeigt wird. Beurteilen Sie außerdem die Qualität der Bilderkennung in beiden Diensten.
- Fassen Sie Ihre Feststellungen in einer kurzen Bewertung zusammen (max. 100 Wörter), in der Sie den Grund für die Leistungsunterschiede beurteilen. (Tipp: Denken Sie daran, was im TED-Talk gesagt wurde.)


<!-- section -->
### 1.c Digitale Quellenkritik auf Screenshots anwenden | 50 min
<!-- section-contents -->

Der Begriff „Quellenkritik“ bezieht sich auf die Praxis der kritischen Auseinandersetzung mit einer Quelle. Historiker beispielsweise stellen seit jeher die Herkunft, Bedeutung und Glaubwürdigkeit der von ihnen verwendeten historischen Quellen in Frage. Wird eine Quelle jedoch digitalisiert, online veröffentlicht und von vielen Personen vervielfältigt, gestaltet sich die Rückverfolgung ihrer Herkunft unter Umständen schwieriger. In dieser Aufgabe sollen Sie die Eigenschaften eines Bildes von seiner ursprünglichen Erstellung bis zu seiner digitalen Präsentation im Internet dokumentieren. Insbesondere sollen die Veränderungen beobachtet werden, die das Bild bei jeder Umwandlung durchlebt. Es ist dabei wichtig zu beachten, dass das transformierte Bild zwar in den meisten Fällen dieselbe Botschaft wie das Original vermittelt, sein artefaktischer Wert sich jedoch tiefgreifend verändert hat.
- Öffnen Sie [dieses visuelle Hilfsmittel von der Website Ranke.2](https://ranke2.uni.lu/assets/pdf/C3.1-visual-aid-3.pdf){:target="_blank"}. Dort sehen Sie die Überschrift „Questions to ask about a digitised manuscript published on the web“ (Diese Fragen sollten Sie zu einem digitalisierten und im Internet veröffentlichten Manuskript stellen). Darunter werden drei Kontexte genannt, in denen sich die Identität, das Aussehen und der Wert einer Quelle ändern. In jedem Kontext sollten unterschiedliche Fragen gestellt werden. In dieser Aufgabe werden Sie sich ähnliche Fragen zu zwei Bildern stellen, die Sie unten auswählen.

Dabei geht es darum, den Unterschied zwischen „dem“ Bild und „einem“ Bild zu verstehen. „Das“ Bild bezieht sich auf das Original, das allererste Exemplar, das jemals hergestellt wurde. „Ein“ Bild ist eine Reproduktion des Originalbildes. Manchmal entspricht die Reproduktion dem Format des Originals, während sie in anderen Fällen ein gänzlich anderes Format aufweisen kann. Ihre Aufgabe ist es, den Prozess der Umwandlung vom Originalbild (Kontext der Erstellung) zu seiner digitalen Reproduktion (Kontext der Digitalisierung) nachzuverfolgen.

> HINWEIS: Möglicherweise müssen Sie weitere Nachforschungen im Internet anstellen, um alle Fragen beantworten zu können. Gute Quellen sind zum Beispiel die Encyclopedia Britannica, Google Scholar und die Khan Academy. Denken Sie daran: Einige Websites enthalten keine Informationen über den Digitalisierungsprozess, es ist also durchaus in Ordnung, wenn Sie nicht alle der erforderlichen Informationen finden können.


- Schauen Sie sich die Bilder unten an, wählen Sie zwei davon aus und erstellen Sie Screenshots von ihnen.


{:.mosaic}
[![Charles Darwin portrait by John Collier](/../../assets/images/transformation/1c/thumbs/charles-darwin-portrait-by-john-collier.jpg "Charles Darwin portrait by John Collier")](/../../assets/images/transformation/1c/charles-darwin-portrait-by-john-collier.jpg){:target="_blank"}
[![Morel](/../../assets/images/transformation/1c/thumbs/morel-v-afp-1.jpg "Morel")](/../../assets/images/transformation/1c/morel-v-afp-1.jpg){:target="_blank"}
[![Sandro Botticelli - La nascita di Venere](/../../assets/images/transformation/1c/thumbs/sandro-botticelli-la-nascita-di-venere.jpg "Sandro Botticelli - La nascita di Venere")](/../../assets/images/transformation/1c/sandro-botticelli-la-nascita-di-venere.jpg){:target="_blank"}
[![Barack Obama hope poster](/../../assets/images/transformation/1c/thumbs/barack-obama-hope-poster.jpg "Barack Obama hope poster")](/../../assets/images/transformation/1c/barack-obama-hope-poster.jpg){:target="_blank"}
[![Boy children Christmas](/../../assets/images/transformation/1c/thumbs/boy-children-christmas.jpg "Boy children Christmas")](/../../assets/images/transformation/1c/boy-children-christmas.jpg){:target="_blank"}
[![Man mask](/../../assets/images/transformation/1c/thumbs/man-mask.jpg "Man mask")](/../../assets/images/transformation/1c/man-mask.jpg){:target="_blank"}
[![Postmortem children](/../../assets/images/transformation/1c/thumbs/postmortem-children.jpg "Postmortem children")](/../../assets/images/transformation/1c/postmortem-children.jpg){:target="_blank"}
[![Iris](/../../assets/images/transformation/1c/thumbs/iris.jpg "Iris")](/../../assets/images/transformation/1c/iris.jpg){:target="_blank"}
[![Woman labor](/../../assets/images/transformation/1c/thumbs/woman-labor.jpg "Woman labor")](/../../assets/images/transformation/1c/woman-labor.jpg){:target="_blank"}
[![Boy in blue long sleeve](/../../assets/images/transformation/1c/thumbs/boy-in-blue-long-sleeve.jpg "Boy in blue long sleeve")](/../../assets/images/transformation/1c/boy-in-blue-long-sleeve.jpg){:target="_blank"}
[![Oscar Wild](/../../assets/images/transformation/1c/thumbs/oscar-wild.jpg "Oscar Wild")](/../../assets/images/transformation/1c/oscar-wild.jpg){:target="_blank"}
[![Postmortem man](/../../assets/images/transformation/1c/thumbs/postmortem-man.jpg "Postmortem man")](/../../assets/images/transformation/1c/postmortem-man.jpg){:target="_blank"}
[![Dora Maar Picasso](/../../assets/images/transformation/1c/thumbs/dora-maar-picasso.jpg "Dora Maar Picasso")](/../../assets/images/transformation/1c/dora-maar-picasso.jpg){:target="_blank"}


- Füllen Sie für zwei der oben ausgewählten Bilder die nachfolgenden Tabellen aus. Für den ersten Abschnitt (Kontext der Erstellung) empfiehlt es sich, die Vorgehensweise von Aufgabe 1b zu wiederholen und den Screenshot in den von Ihnen bevorzugten Bilderkennungsdienst hochzuladen. Die angezeigte Ergebnisliste hilft Ihnen dabei, die Fragen im ersten Abschnitt zu beantworten.

Um Ihnen eine Vorstellung davon zu vermitteln, wie die Fragen beantwortet werden können, finden Sie im Folgenden ein Beispiel.

{:.table.border.table-sm.text-sm.text-bold-highlight.with-pairs}
| 1. Kontext der Erstellung | Beispielantwort |
|--------------------------------|--------|
| Wie heißt das Bild und von wem stammt es? | *Porträt von [Dora Maar](https://de.wikipedia.org/wiki/Dora_Maar){:target="_blank"}. Es stammt vom Maler Pablo Picasso.*
| Wann und wo ist es entstanden?       | *11937 und möglicherweise in Paris.*
| Warum ist es entstanden?                   | *Um ein Kunstwerk zu schaffen.*
| Was ist auf dem Bild zu sehen?       | *Dora Maar, wobei der Name ein Pseudonym der französischen Fotografin, Malerin und Dichterin Henriette Theodora Markovitch ist, die Picassos Muse war.*
| Welche Technik, welches Verfahren bzw. welches Medium wurde verwendet?   | *Öl auf Leinen.*

{:.table.border.table-sm.text-sm.text-bold-highlight.with-pairs}
| 2. Kontext des Bewahrung | Beispielantwort |
|--------------------------------|--------|
| Wo befindet sich das Original?  | *Im Musée Picasso in Paris.*
| Was sagt dies über den Wert der Quelle aus? | *Es wird als wichtiges Kunstwerk bewertet.*
| Ist das Bild für ein Publikum zugänglich? | *Es ist nicht klar, ob es sich im Archiv des Museums befindet oder derzeit öffentlich ausgestellt wird.*
| Hat sich sein Wert, sein Aussehen oder seine Identität in diesem neuen Kontext verändert?  | *Ja, es ist Teil des gemeinsamen kulturellen Erbes geworden, da es sich in einem öffentlich finanzierten Museum befindet.*

{:.table.border.table-sm.text-sm.text-bold-highlight.with-pairs}
| 3. Kontext der Digitalisierung und Online-Veröffentlichung  | Beispielantwort |
|--------------------------------|--------|
| Auf welcher Website haben Sie das Bild gefunden? | *Ich habe es sowohl auf den Websites kommerzieller Bildanbieter wie Alamy als auch auf den Websites von Sammlungen wie [WikiArt](https://www.wikiart.org/en/pablo-picasso/portrait-of-dora-maar-1937-1){:target="_blank"} gefunden. Interessant ist, dass man auf eine Website gelangen kann, auf der man für den Erhalt einer Kopie bezahlen muss, obwohl das Bild unter einer „Fair Use“-Lizenz steht und in geringerer Auflösung kostenlos heruntergeladen werden kann.*
| Wer hat es wann und wo online veröffentlicht? | *Dies lässt sich online nicht herausfinden und würde eine Nachforschung durch Kontaktaufnahme mit dem Eigentümer des Gemäldes, d. h. dem Museum, erfordern.*
| Warum und wie wurde es digitalisiert? | *Siehe oben.*
| Sind Informationen verloren gegangen oder hinzugekommen? | *Ja, die Materialität des Bildes ist verloren gegangen, die Farben und Abmessungen sind anders, und es hat sich in Ziffern und automatisch erstellte Metadaten verwandelt, als es fotografiert und in eine niedrigere Auflösung umgewandelt wurde, um das Hochladen zu ermöglichen. Beim Hochladen änderte sich die Struktur der Bits erneut und es wurden neue Metadaten hinzugefügt.*
| Wer ist der Eigentümer der digitalen Kopie? | *Bei den Bildern von Werken von Pablo Picasso, die vom [Musée national Picaso-Paris](https://www.museepicassoparis.fr/en/image-rights) aufbewahrt werden, handelt es sich um Fotowerke, die von der Réunion des musées nationaux – Grand Palais (RMN-GP), der Koordinierungsorganisation der französischen Nationalmuseen, erstellt und/oder verwaltet werden.*




<!-- section -->

### Empfehlungen Lektüre/Video
<!-- section-contents -->

- Klein, Matt. „What Is EXIF Data, and How Can I Remove It from My Photos“. _How-to Geek_, 10. Juli 2017. [Magazin-Artikel](https://www.howtogeek.com/203592/what-is-exif-data-and-how-to-remove-it/){:target="_blank"}
- Neatrour, Anna, und Martin Greer. „Using Metadata to Describe Digital Content“. 30. September 2015. Digpublib. Video, 35:51. [Youtube-Video](https://www.youtube.com/watch?v=RqgFLj_yspk){:target="_blank"}
- Jagdish, Deepak, und Daniel Smilkov. „The Power of Metadata“. 25 September 2013, TEDxCambridge. Video, 9:57. [Youtube-Video](https://www.youtube.com/watch?v=i2a8pDbCabg){:target="_blank"}
- Michel, Jean-Baptiste, Yuan Kui Shen, Aviva P. Aiden, Adrian Veres, Matthew K. Gray, *et al.* „Quantitative analysis of culture using millions of digitized books“. _Science_ 331, (6014): 176-182. [Harvard Library](https://dash.harvard.edu/handle/1/8899722){:target="_blank"}
- Szeliski, Richard. „Computer Vision: Algorithms and Applications by Richard“. Letzter Zugriff: 23. Mai 2022. [Website](http://szeliski.org/Book/){:target="_blank"}

<!-- briefing-teacher -->




