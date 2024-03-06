let text = "It is startling to World War II, even in the darkest depths of World War II, J. R. R.";
console.log(text)

// replace World War II to the second world war
// by using finding first character
let firstchar = text.indexOf("World War II"); // if the index is not find it will return -1
if (firstchar !== -1) {
    text = text.slice(0,firstchar) + "the second world war" + text.slice(firstchar + 12);
}
console.log(text);

//second method of replacing
text = text.replace("World War II","the second world war");
console.log(text);

//replacing globaly 
text = text.replace(/World War II/g,"the second world war");
console.log(text);