// String: greeting
let name = prompt("What is your name?");
alert(`Hello, ${name}!`);

// String: gopni4ek
let userInput = prompt("Введіть рядок:");
let modifiedString = userInput.split(',').join(', блін,');
console.log(modifiedString);

// String: capitalize
let str = "cANBerRa";
let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
console.log(result); // Canberra

// String: word count
let counting = prompt("Enter a string:");
let wordCount = counting.split(' ').length;
console.log(wordCount);

// String: credentials
let firstName = prompt("Enter your first name:").trim().toLowerCase().replace(/^\w/, c => c.toUpperCase());
let lastName = prompt("Enter your last name:").trim().toLowerCase().replace(/^\w/, c => c.toUpperCase());
let middleName = prompt("Enter your middle name:").trim().toLowerCase().replace(/^\w/, c => c.toUpperCase());
let fullName = `${firstName} ${middleName} ${lastName}`;
console.log(fullName);

// String: beer
let beer = "Було жарко. Василь пив пиво вприкуску з креветками";
let resultforbeer = beer.split(' ').map(word => word === 'пиво' ? 'чай' : word).join(' ');
console.log(resultforbeer);


// String: no tag
let notag = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Curabitur at lorem eget justo accumsan pellentesque quis vel metus. ";
let tagIndex = notag.indexOf('<');
let endTagIndex = notag.indexOf('>');
let resultfornotag = notag.slice(0, tagIndex) + notag.slice(endTagIndex + 1);
console.log(resultfornotag);


// String: big tag
let bigtag = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lorem eget justo accumsan pellentesque quis vel metus.  <br/> ";
let bigtagIndex = bigtag.indexOf('<');
let bigendTagIndex = bigtag.indexOf('>');
let tag = bigtag.slice(bigtagIndex, bigendTagIndex + 1).toUpperCase();
let resultbigtag = bigtag.slice(0, bigtagIndex) + tag + bigtag.slice(bigendTagIndex + 1);
console.log(resultbigtag);


// String: new line
let Inputline = prompt("Enter a string:");
let multiLineString = userInput.replaceAll('\\n', '\n');
console.log(multiLineString);

// String: youtube
const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
let input = prompt("Enter a text with a YouTube link:");
let videoId = input.match(youtubeRegex)[1];
let embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
document.write(embedCode);
