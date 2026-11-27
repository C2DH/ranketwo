---
layout: assignment
unit: digital-maps 
lang: de
title: "Datensätze als Karten: Eine Untersuchung historischer geografischer Informationssysteme (GIS)"
cover:
documents:
  - 
tags:
outcomes: 
  - Verständnis von GIS als Systeme zur Verknüpfung räumlicher Informationsebenen sowie Fähigkeit zur Untersuchung der zugrunde liegenden Datensätze
  - Fähigkeit zur kritischen Auseinandersetzung mit der lokalen Geschichte anhand von Geodaten und unter Anwendung historischer Datenkritik

order: 4
---
Geografische Informationssysteme (GIS) sind streng genommen keine Karten. Ein [GIS](https://de.wikipedia.org/wiki/Geoinformationssystem) ist ein Informationssystem, das es uns ermöglicht, Daten auf einem [georeferenzierten](https://de.wikipedia.org/wiki/Georeferenzierung) Gebiet darzustellen. Über [geografische Koordinaten](https://de.wikipedia.org/wiki/Geographische_Koordinaten) lassen sich die Daten bestimmten Orten zuordnen und in digitalen Karten darstellen. Mit anderen Worten: Ein GIS stellt uns eine digital erstellte Karte zur Verfügung, die ein Gebiet darstellt, das mit geografischen Koordinaten verknüpft ist, d. h. dessen genaue geografische Positionen auf der Erde zu Analysezwecken mathematisch dargestellt werden. Indem wir zusätzlich Daten darstellen (beispielsweise die Einwohnerzahl pro Stadtteil in einer Stadt), können wir etwaige räumliche Muster ermitteln oder Ergebnisse früherer analytischer Untersuchungen präsentieren.

Ein GIS ermöglicht die Darstellung von Informationen in Ebenen. Stellen Sie sich übereinanderliegende transparente Folien vor: Die erste Ebene zeigt eine Grundkarte, die nächste könnte Straßen darstellen, eine weitere Flüsse und eine weitere wiederum die Orte bestimmter historischer Ereignisse. Jede Ebene enthält verschiedene Datentypen, die Sie ein- und ausblenden können, um Muster und Zusammenhänge zu erkennen. Als HistorikerInnen können wir verschiedene historische Quellen, z. B. Volkszählungsdaten, Handelswege oder Staatsgrenzen, übereinanderlegen und so räumliche Veränderungen im Zeitverlauf analysieren oder Zusammenhänge aufdecken, die sich anhand anderer Quellenarten nur schwer erkennen lassen.

<!-- more -->

<!-- briefing-student -->

### 4.a Verständnis des Konzepts der mehrschichtigen Informationen | 15 Min.
<!-- section-contents -->

*Von Eliane Schmid* 

Um zu verstehen, wie mehrschichtige geografische Informationen aussehen können, schauen Sie sichdie Webseite [spatio-temporal map](https://ww2.lu/spatiotemporal-map) an, die für die Online-Ausstellung „Luxemb(o)urg im Zweiten Weltkrieg“ erstellt wurde.
* Studieren Sie zunächst die Karten aufmerksam. Es stehen vier verschiedene Karten zur Auswahl.
* Klicken Sie nacheinander auf die verschiedenen Karten und beobachten Sie, wie derselbe Raum jedes Mal anders dargestellt wird.
* Beschreiben Sie kurz, was die einzelnen Ebenen darstellen.
* Vergrößern und verkleinern Sie die Ansicht, um zu sehen, welche Ebenen Grenzen aufweisen und welche weit über die Grenzen Luxemburgs oder sogar Europas hinausreichen. Warum ist das so?
* Schauen Sie sich die Karte mit den vielen Farben genauer an:
  * Was ist darauf abgebildet?
  * Wie verändert sich die Darstellung, wenn Sie die darunterliegende Kartenebene ändern?
  * Warum wird die Karte schräg dargestellt?

Das Ein- und Ausblenden dieser Ebenen ist ein einfaches, aber anschauliches Beispiel für GIS. Diese vier verschiedenen Karten stellen vier verschiedene Informationsebenen dar,  die wir anwählen und neu anordnen können. Wir haben hier also vier verschiedene Möglichkeiten räumliche Daten unterschiedlich darzustellen.

Vergleichen Sie dies nun mit Ihrer täglichen Nutzung von Google Maps und den verschiedenen Funktionen, die dieser Dienst bietet. Haben Sie schon einmal darüber nachgedacht, dass bei diesen Funktionen verschiedene Informationsebenen ein- und ausgeblendet werden? Spielen Sie mit Google Maps oder einem beliebigen anderen Kartenanbieter Ihrer Wahl in Ihrem Browser oder auf Ihrem Smartphone und denken Sie darüber nach, welche Informationen dabei sichtbar werden bzw. verborgen bleiben können. Geben Sie verschiedene Suchbegriffe ein, wie beispielsweise „Apotheke“ oder „Bahnhof“, und stellen Sie sich diese als Informationsebenen vor, die ein- und ausgeblendet werden. Sie können auch eine eigene Datenebene erstellen und zur Karte hinzufügen. Die folgende Übung zeigt Ihnen, wie das geht.

<!-- section -->

### 4.b What’s in a name? Straßennamen als Spiegel lokaler Geschichte | 60 Min.
<!-- section-contents -->

*Von Werner Tschacher, Stefan Krebs*

*Diese Aufgabe basiert auf einem [pädagogischen Dossier](https://minett-stories.lu/media/pdf/education/street-names-dossier-de.pdf), das für die virtuelle Ausstellung [„Minett Stories“](https://minett-stories.lu/de/) im Rahmen des Forschungsprojekts „Remixing Industrial Pasts in the Digital Age“ erstellt wurde, das mit Unterstützung der Esch2022 asbl im Zeitraum von 2019 bis 2023 am Centre for Contemporary and Digital History (C2DH) der Universität Luxemburg durchgeführt wurde. Die Aufgabe lässt sich an andere nationale bzw. lokale Kontexte anpassen, sofern dafür Geodaten verfügbar sind.*

#### Historischer Kontext: Eine Untersuchung der Ortsnamen im Süden Luxemburgs

Landschafts- und Ortsnamen spielen als Bezugspunkte für die regionale Identität eine wichtige Rolle. Im Süden Luxemburgs haben sich diese Namen im Zuge des industriellen Wandels der Landschaft mehrfach geändert. Vor der Industrialisierung gehörte die gesamte südliche Region Luxemburgs zu einem größeren Gebiet, das aufgrund seiner fruchtbaren Böden traditionell als „Gutland“ bezeichnet wurde. Als die südliche Region im Jahr 1850 ins Industriezeitalter eintrat, veränderte sich zunächst die Landschaft und anschließend die Ortsnamen. Mit der Intensivierung des Eisenerzabbaus brachten der industrielle Tagebau und der Abbau unter Tage die Farbe des rötlichbraunen Minette-Erzes an immer mehr Orten der grünen Landschaft zum Vorschein.

Die Industrialisierung verwüstete die Landschaft. Ganze Waldgebiete wurden gerodet, um Platz für Produktionsstätten zu schaffen. Zeitgenössische Quellen belegen, dass nach der Mitte des 19. Jahrhunderts neue Ortsbezeichnungen wie „Minett“ und „Rote Erde“ aufkamen, die auf den Abbau von Minette-Erz verwiesen. Die Bezeichnung „Minette“ ist eine Verkleinerungsform von dem französischen „Mine“ (Mine oder Bergwerk) und bezeichnet hier Eisenerz mit relativ geringem Eisengehalt. Somit reflektieren [die Benennungen und Umbenennungen des Gebiets, das heute als „Minett“ bekannt ist, die industrielle Entwicklung der Region](https://minett-stories.lu/de/story/naming-and-renaming-of-the-luxembourg-southern-region).

Lassen Sie uns die Spuren dieses historischen Erbes im zweitgrößten Ballungsraum Luxemburgs, [Esch-sur-Alzette](https://de.wikipedia.org/wiki/Esch_an_der_Alzette), näher betrachten. Esch-sur-Alzette war das traditionelle Zentrum der Minett-Region und wurde im 20. Jahrhundert oft als „Metropole des Eisens“ (frz. auch „Métropole du fer“) oder „Stadt der roten Erde“ bezeichnet.

#### Anleitung

Für diese Übung nutzen Sie das [Nationale Geoportal des Großherzogtums Luxemburg](https://www.geoportail.lu/de/). Dieses von der Regierung entwickelte [Geoportal](https://de.wikipedia.org/wiki/Geoportal) dient dazu, Geodaten zu erfassen, zu beschreiben und darzustellen. Geoportale sind unverzichtbare Ressourcen für die Suche nach qualitativ hochwertigen Geodaten – stellen Sie sich diese als Bibliotheken vor, die es Ihnen ermöglichen, mit Daten dieser Art zu arbeiten.

Rufen Sie das [Straßenverzeichnis von Esch-sur-Alzette](https://map.geoportail.lu/addresses/Esch-sur-Alzette/?lang=de) auf, um eine umfassende Liste aller Straßennamen der Stadt einzusehen. Suchen Sie dann nach den Straßennamen, die einen Bezug zur Stahlindustrie bzw. zum Bergbau haben – es gibt mehrere solcher Namen, von denen einige allgemeine Industriebegriffe verwenden (z. B. Rue de l’Acier (französisch für: Stahlstraße), Rue de l’Industrie (frz. Industriestraße), Rue de l’Usine (frz. Fabrikstraße) und andere die auf ehemalige Stahlwerke und Bergwerke verweisen (z. B. An der Schmelz, Avenue des Hauts-Fourneaux (frz. Allee der Hochöfen), Ennert den Héichiewen (luxemburgisch für: Unter den Hochöfen), Rue des Mines (frz. Bergwerkstraße), auf Berufsbezeichnungen (z. B. Avenue des Sidérurgistes (frz. Allee der Stahlwerker), Rue des Fondeurs (frz. Schmelzerstraße), Rue des Mineurs (frz. Bergarbeiterstraße) sowie auf die Namen von Erfindern und Industriellen (z. B. Rue Henry Bessemer, Place Norbert Metz, Rue Émile Mayrisch, Rue Léon Metz, Rue Sidney Thomas). Alle diese Namen verweisen auf die facettenreiche Industriegeschichte der Minett-Region und ihres Zentrums Esch-sur-Alzette. Dies gilt ebenso für andere Städte und Ortschaften der Südregion wie Pétange, Differdange, Dudelange, Bettembourg, Rumelange.

Erstellen Sie eine Liste der Straßennamen, die Sie gefunden haben, und setzen Sie sich mit diesen auseinander (oder diskutieren Sie die Namen, falls Sie in Gruppen arbeiten). Versuchen Sie, eine Typologie zu erstellen, die diese Namen in Kategorien einteilt (Ortsnamen, Personennamen, Berufsbezeichnungen usw.).

> Tipp: Sie können die von Ihnen erstellte Liste mit unserer nicht abschließenden [Liste](/assets/doc/industrial-streetnames-esch.txt) vergleichen.

Recherchieren Sie im Internet, um Informationen und Fotos zu den jeweiligen Straßennamen zu sammeln. Erstellen Sie kurze Informationsblätter zu jedem Straßennamen. Bei einer Person können Sie beispielsweise die Geburts- und Sterbedaten, den beruflichen Werdegang und den Bezug zur industriellen Vergangenheit der Stadt notieren. Ergänzen Sie weitere Informationen, die Sie für relevant halten. Bei einem Ort, der nach einem Beruf benannt ist, könnten Sie sich mit den Ursprüngen des Namens befassen, untersuchen, wie sich die berufliche Tätigkeit im Laufe der Zeit verändert hat, und nach Spuren dieser Tätigkeit in der Straße Ausschau halten. Wenn Sie sich eingehender mit dem Thema befassen möchten, können Sie im Stadtarchiv recherchieren oder Personen befragen.

Zu guter Letzt können Sie etwas Feldforschung betreiben: Besuchen Sie die Straßen, die Sie gefunden haben, und machen Sie sich mit dem Ort und der Umgebung vertraut. Suchen Sie nach sichtbaren Spuren, die auf den historischen Hintergrund der Straßennamen verweisen, etwa Gebäude, Denkmäler oder Überreste früherer Aktivitäten. Fotografieren Sie diese mit Ihrem Smartphone. Falls Sie keine solchen Spuren entdecken, fotografieren Sie die Straßenschilder.

Nun verfügen Sie über genügend Informationen, um eine Verknüpfung zu Geodaten herzustellen und Ihre eigene Karte zu erstellen! Sie könnten ganz einfach eine Karte erstellen, indem Sie die Namen der Straßen markieren, die mit der industriellen Vergangenheit von Esch-sur-Alzette in Verbindung stehen. Oder Sie könnten noch einen Schritt weiter gehen und die Fotos einbinden, die Sie während Ihrer Feldforschung aufgenommen haben. Damit können Sie eine eigene Datenebene erstellen, die Sie in einen benutzerfreundlichen Kartendienst wie [Google Maps](https://www.google.com/maps/) oder eine Open-Source-Anwendung wie [uMap](https://umap.openstreetmap.de/de/) einbinden können.

Die Verwendung von Google Maps wird in dieser Anleitung anschaulich erklärt: Clifford, Jim, Josh MacFadyen und Daniel Macfarlane. „Intro to Google Maps and Google Earth“. *Programming Historian* 2 (2013), [https://doi.org/10.46430/phen0028](https://doi.org/10.46430/phen0028).

Eine ausführliche Anleitung für uMap finden Sie in [diesem Video-Tutorial](https://youtu.be/sfyw8fJOIJY).

Falls Sie Ihre Karte veröffentlichen, [kontaktieren Sie uns](mailto:ranke2@uni.lu) bitte, damit wir den Link in diese Lektion aufnehmen können.

<!-- section -->

### 4.c Kritische Bewertung von GIS-Datensätzen zu historischen Phänomenen | 30 Min.
<!-- section-contents -->

*Von Christian Lotz*

Diese Aufgabe bietet keine Einführung in GIS- und Kartierungssoftware, da entsprechende Ressourcen bereits online verfügbar sind (siehe Literaturempfehlungen unten). Stattdessen geht es darum, wie HistorikerInnen verfügbare GIS-Datensätze und die daraus erstellten Karten kritisch bewerten können.

Einfach ausgedrückt sind GIS-Daten, die auch als [GeoPackages](https://de.wikipedia.org/wiki/GeoPackage) bezeichnet werden, eine Kombination aus Ordnern, die räumliche Daten, Attributdaten und Metadaten enthalten. Räumliche Daten sind erforderlich, um den auf der Karte dargestellten Raum abzubilden, während Attributdaten dazu dienen, diesen Raum je nach Blickwinkel bzw. Zweck der Karte anhand verschiedener Merkmale zu beschreiben. Diese Daten bilden die Ebenen der Karte.  Schließlich liefern die Metadaten beschreibende und technische Informationen zu den beiden anderen Datentypen. Nach dem Import in eine GIS-Anwendung bilden diese Daten die einzelnen Kartenebenen. Diese können wir uns, wie zuvor beschrieben, als Informationsblätter vorstellen, die übereinander auf einer Karte liegen.

GIS-Daten sind in verschiedenen Repositorien verfügbar, wie beispielsweise in der [Harvard Geospatial Library](https://library.harvard.edu/services-tools/harvard-geospatial-library){:target="_blank"}, das auf Geodaten spezialisiert ist. Sie können auch in wissenschaftlichen Repositorien zu finden sein, die nicht speziell auf Geodaten ausgerichtet sind, oder auf zentralen Datenportalen, über die Behörden öffentlich zugängliche Datensätze bereitstellen. Historiker* und andere NutzerInnen können GeoPackages aus diesen Repositorien herunterladen und mit der Software ihrer Wahl nutzen. Außerdem haben sie die Möglichkeit, eigene Datensätze zu erstellen und dort bereitzustellen.

Bei der digitalen Quellenkritik (Digital Source Criticism) sollten wir uns auf folgende Fragen konzentrieren:

* Woher stammen die Daten, die zur Erstellung des jeweiligen Datensatzes verwendet wurden?
* Wie sind die Ersteller des Datensatzes vorgegangen, um die Informationen aus den ursprünglichen Quellen in Daten umzuwandeln? Welche Kategorien haben die Ersteller des Datensatzes bei der Umwandlung der Informationen in Daten vorrangig berücksichtigt?
* Welche technischen Komponenten und welche Umgebung könnten sich auf die Erstellung des Datensatzes ausgewirkt haben?

Metadaten von guter Qualität sowie das Vorhandensein einer detaillierten Dokumentation sind entscheidende Faktoren für die Bewertung von Datensätzen. Manchmal werden Informationen zu Datensätzen in speziellen wissenschaftlichen Publikationen bereitgestellt, die als „Data Papers“ bezeichnet werden (begutachtete Artikel (peer-reviewed), in denen ein Datensatz beschrieben wird).

Schauen wir uns zwei Datensätze genauer an, die in QGIS importiert und geöffnet wurden. Sie sind auf den beiden folgenden Screenshots zu sehen.

Der folgende Screenshot (Abbildung 18) zeigt einen Datensatz über das Königreich Polen als Teil des Russischen Kaiserreiches zu Beginn des 19. Jahrhunderts. Der Datensatz stammt aus dem [Imperiia Project](https://imperiia.omeka.fas.harvard.edu/) der Forscherin Kelly O’Neill an der Harvard University, bei dem Geodatensätze zu den Verwaltungsgrenzen des Russischen Kaiserreiches erfasst wurden. Die Autoren des Datensatzes beschreiben die Aufbereitung der Daten sowie die Quellen, aus denen sie die Informationen zu den Grenzen entnommen haben. Für jede Verwaltungseinheit wird deren Name auf Russisch angegeben (sowohl in kyrillischer Schrift als auch in lateinischer Transliteration).

[[iiif abb-5-1-qgis-imperiia-project-02 "Visualisation of a historical dataset, Imperiia project, in QGIS - the Kingdom of Poland as part of the Russian Empire in the 19th c."]]

Abbildung 18. Visualisierung eines historischen Datensatzes (Imperiia-Projekt) in QGIS – das Königreich Polen als Teil des Russischen Kaiserreiches im 19. Jahrhundert.

Datenreferenz: O’Neill, Kelly. 2016. „Administrative Boundaries of the Russian Empire (1820s): Provinces (Oblasti).“ Harvard Dataverse. https://doi.org/10.7910/DVN/5LUP5S.

Der folgende Screenshot zeigt einen Datensatz zu den Grenzen der Teilungen Polens. Der Datensatz wurde von Christopher Winters an der University of Chicago erstellt. Im Vergleich zum vorherigen Datensatz ist der Umfang der zusätzlichen Informationen sehr unterschiedlich. Während beim Imperiia-Projekt Quellen für den Datensatz angegeben werden, fehlen beim Datensatz von Winters solche Angaben. Das Fehlen von Quellenangaben bedeutet nicht, dass der Datensatz falsch ist oder dass der dargestellte Grenzverlauf nicht korrekt ist. Aus historischer Sicht ist es jedoch weitaus schwieriger, mit Quellen umzugehen, die keinerlei Angaben zu ihrer Herkunft enthalten.

[[iiif abb-5-2-qgis-winter-poland-borders-uchicago-01 "Visualisation of Polish historical boundaries based on datasets of historian Christopher Winters, obtained in QGIS - the Kingdom of Poland as part of the Russian Empire in the 19th c."]]

Abbildung 19. Visualisierung der historischen Grenzen Polens auf der Grundlage von Datensätzen des Historikers Christopher Winters, erstellt in QGIS – das Königreich Polen als Teil des Russischen Kaiserreiches im 19. Jahrhundert.

Datenreferenz: Brown, Sam. ohne Datumsangabe „Polish historical boundaries“. Enthält Shapefiles, die die Grenzen Polens zur Zeit der Dritten Teilung, des Herzogtums Warschau im Jahr 1807, des Königreichs Polen unter den Zaren sowie die Grenzen Polens in der Zwischenkriegszeit darstellen; ferner die Województwa von 1945 bis 1968. Library of the University of Chicago. https://www.lib.uchicago.edu/e/collections/maps/uofcgis.html

Schauen Sie sich die Ressourcen an, die auf der Website [The Historical GIS Research Network](http://hgis.org.uk/) verfügbar sind. Entdecken Sie die verfügbaren Datensätze und vergleichen Sie diese miteinander. Achten Sie dabei insbesondere auf Informationen zur Herkunft der Daten, zur Konzeption und Erstellung der Daten sowie zur technischen Umgebung, in der der Datensatz erstellt wurde.

<!-- section -->

### Empfehlungen Lektüre/Videos
<!-- section-contents --> 

*Zur GIS Kritik*

Wilm, Julius (April 13, 2023). Layering in GIS as a Method of Historical Deconstruction and Source Criticism. *TRAFO – Blog for Transregional Research*. DOI: [https://doi.org/10.58079/ut6o](https://doi.org/10.58079/ut6o) abgerufen am 28. Mai 2025

*Historische Projekte unter Einsatz von GIS*

American Panorama. An Atlas of United States History. [https://dsl.richmond.edu/panorama/](https://dsl.richmond.edu/panorama/)

Land Acquisition and Dispossession. Mapping the Homestead Act, 1863-1912. [https://dsl.richmond.edu/panorama/homesteading/map/](https://dsl.richmond.edu/panorama/homesteading/map/)

Julius Wilm, Robert K. Nelson, und Justin Madron, „Homesteading“, American Panorama, ed. Robert K. Nelson und Edward L. Ayers, abgerufen am 7. April 2026, [https://dsl.richmond.edu/panorama/homesteading/](https://dsl.richmond.edu/panorama/homesteading/)

Julius Wilm. Land Acquisition and Marginalization in the US West and South, 1863-1934. *History, GIS and US Studies* Website https://juliuswilm.com/index.html [https://juliuswilm.com/projects.html](https://juliuswilm.com/projects.html)

Yan Wu, Cameron Blevins, Steven Braun. Gossamer Network. Cameron Blevins, *Paper Trails: The US Post and the Making of the American West* (Oxford University Press, 2021). [https://gossamernetwork.com/](https://gossamernetwork.com/)

*Fallstudien zur historischen Forschung unter Einsatz von GIS*

Vieira Paulino, Joana. 2025. “Child Abandonment in 19th Century Lisbon: The Provenance and Distribution of Foundlings Through a GIS Lens”. *European Journal of Geography* 16 (1):s75-s89. [DOI](https://doi.org/10.48088/ejg.si.spat.hum.j.pau.75.89) 

Fretwell, Laura Brannan, und Eliane Schmid. 2025.  „Layering Public Park Histories: Uncovering the Effects of Restoration Idea[l]s in Post-War Urban Spaces in Germany and the U.S.“. *European Journal of Geography* 16 (1):s30-s44. [DOI](https://doi.org/10.48088/ejg.si.spat.hum.l.bra.30.44)

*Videos*

Der europäische öffentlich-rechtliche Sender arte erläutert in seiner Sendereihe „Mit offenen Karten“ anhand von Karten geopolitische Ereignisse der Vergangenheit und Gegenwart. Sehen Sie sich die Folge an, in der verschiedene Möglichkeiten der Datenvisualisierung und -kartierung gezeigt werden, und fragen Sie sich, welche Art von Informationen diese Karten vermitteln und welche Wirkung sie erzielen:

[Mit offenen Karten. Der Globale Anstieg des Meerespiegels](https://www.arte.tv/de/videos/119961-011-A/mit-offenen-karten/) (12 Min., 16 Sek.)

*Lektionen*

Hafen, Konrad. QGIS Tutorial for Beginners. 11. November 2021. Verfügbar unter:[https://opensourceoptions.com/qgis-tutorial-for-beginners/](https://opensourceoptions.com/qgis-tutorial-for-beginners/){:target="_blank"} 

Geospatial School. QGIS for Beginners. YouTube-Video. 26. Januar 2021 50:40 Minuten. [https://youtu.be/Eg4_duqH5Q4](https://youtu.be/Eg4_duqH5Q4){:target="_blank"} 


<!-- briefing-teacher -->
