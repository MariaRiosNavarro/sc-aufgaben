// Eine h1 mit “Hello World!”
// Einen p mit “Have a nice day!”
// Deklariere die Variable myText und fülle sie mit “Hello again”.
//  Schreibe die Variable anschließend in dein Dokument.
// Deklariere Variablen: vorname, nachname und fülle sie mit deinem Namen.
// Schreibe sie anschließend in dein Dokument.

document.write("<h1>Hello World!</h1>");
document.write("<p>Have a nice day!</p>");
let myText = "Hello again";
document.write(myText);
document.write("<br>");
document.write("<hr>");
let firstName = "Maria";
let lastName = "Rios Navarro";
document.write("My name is " + firstName + " " + lastName + ".");
document.write("<hr>");
// with string literal
document.write(`I am ${firstName} ${lastName}`);

// test mit 2 tags:
document.write("<h2>Hola Mundo!</h2><p>Yuhuuu!</p>");

// ÜBER document.write:

// Diese Methode weist ein sehr eigenwilliges Verhalten auf.
// In einigen Fällen kann diese Methode den Status des HTML-Parsers beeinflussen,
// während der Parser ausgeführt wird,
// was zu einem DOM führt, das nicht der Quelle des Dokuments
// entspricht (z. B. wenn die geschriebene Zeichenfolge die
// Zeichenfolge „ “ <plaintext>oder „ <!--“ ist). In anderen
// Fällen kann der Anruf zuerst die aktuelle Seite löschen,
// als wäre sie document.open()aufgerufen worden. In noch
// mehr Fällen wird die Methode einfach ignoriert oder
// löst eine Ausnahme aus. Benutzeragenten dürfen ausdrücklich
// die Ausführung von über diese Methode eingefügten
// Elementen vermeidenscript. Und um die Sache noch schlimmer zu machen,
// kann das genaue Verhalten dieser Methode in manchen Fällen von
// der Netzwerklatenz abhängen, was zu Fehlern führen kann, die sehr schwer
// zu debuggen sind. Aus all diesen Gründen wird von der Verwendung dieser
// Methode dringend abgeraten. Vermeiden Sie daher die Verwendung document.write()–
// und aktualisieren Sie, wenn möglich, vorhandenen Code, der es noch verwendet.
