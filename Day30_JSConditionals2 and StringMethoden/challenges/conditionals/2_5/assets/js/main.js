// save variables

const input = document.querySelector('[data-js="input"]');

const outputText = document.querySelector('[data-js="output"]');

function check() {
  let inputValue = input.value;
  let lowercaseValue = inputValue.toLowerCase();

  switch (lowercaseValue) {
    // Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt
    case "baden-württemberg":
      outputText.innerHTML =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;
    // Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt
    case "bayern":
      outputText.innerHTML =
        "Bayern hat 10,880 Mio Einwohner und München ist die Hauptstadt";
      break;
    // Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt
    case "berlin":
      outputText.innerHTML =
        "Berlin hat 10,880 Mio Einwohner und Berlin ist die Hauptstadt";
      break;
    // Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt
    case "brandenburg":
      outputText.innerHTML =
        "Brandenburg hat 10,880 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;
    // Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt
    case "bremen":
      outputText.innerHTML =
        "Bremen hat 10,880 Mio Einwohner und Bremen ist die Hauptstadt";
      break;
    // Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt
    case "hamburg":
      outputText.innerHTML =
        "Hamburg hat 10,880 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;
    // Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt
    case "hessen":
      outputText.innerHTML =
        "Hessen hat 10,880 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;
    // Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt
    case "mecklenburg-vorpommern":
      outputText.innerHTML =
        "Mecklenburg-Vorpommern hat 10,880 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;
    // Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt
    case "niedersachsen":
      outputText.innerHTML =
        "Niedersachsen hat 10,880 Mio Einwohner und Hannover  ist die Hauptstadt";
      break;
    // Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt
    case "nordrhein-Westfalen":
      outputText.innerHTML =
        "Nordrhein-westfalen hat 10,880 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;
    // Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt
    case "rheinland-pfalz":
      outputText.innerHTML =
        "Rheinland-Pfalz hat 10,880 Mio Einwohner und Mainz ist die Hauptstadt";
      break;
    // Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt
    case "saarland":
      outputText.innerHTML =
        "Saarland hat 10,880 Mio Einwohner und Saarbrücken ist die Hauptstadt";
      break;
    // Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt
    case "sachsen":
      outputText.innerHTML =
        "Sachsen hat 10,880 Mio Einwohner und Dresden ist die Hauptstadt";
      break;
    // Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt
    case "sachsen-Anhalt":
      outputText.innerHTML =
        "Sachsen-Anhalt hat 10,880 Mio Einwohner und Magdeburg ist die Hauptstadt";
      break;
    // Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt
    case "schleswig-holstein":
      outputText.innerHTML =
        "Schleswig-Holstein hat 10,880 Mio Einwohner und Kiel ist die Hauptstadt";
      break;
    // Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt
    case "thüringen":
      outputText.innerHTML =
        "Thüringen hat 10,880 Mio Einwohner und Erfurt ist die Hauptstadt";
      break;
    // Ein solches Bundesland gibt es in Deutschland nicht.
    default:
      outputText.innerHTML =
        "Ein solches Bundesland gibt es in Deutschland nicht.";
      break;
  }
  // leeren der input, wenn der Output ausgegeben wird
  input.value = "";
}
