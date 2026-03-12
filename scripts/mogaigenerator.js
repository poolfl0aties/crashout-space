const r = document.querySelector(':root'); // gets the root element for variables
const prefixes = ["magical","sun","moon","star","paradox"];
const suffixes = ["boy","girl","xip","hex","omen","vex","masc","fem","man","woman","guy","gal","enby","enban","noi","noian","voi","voian","nixy","xynth","xip","xenan","darling","⛶","✦","⚠︎","✿","◇","🜲","✂","out of spite","♡","☼","★"];

function randomHex() { // listen let's be real i copied this part off the internet. baby steps.
    let letters = "0123456789ABCDEF";

    let color = '#';

    for (let i = 0; i < 6; i++)
        color += letters[(Math.floor(Math.random() * 16))];

    return color // THIS IS THE PART THAT FIXED EVERYTHING. it actually returns the value when you run the function into a variable
}

function generateColour() {
    let varColour1 = randomHex();
    let varColour2 = randomHex();
    let varColour3 = randomHex();
    let varColour4 = randomHex();
    let varColour5 = randomHex();

    let text1 = document.getElementById('colour1');
    let text2 = document.getElementById('colour2');
    let text3 = document.getElementById('colour3');
    let text4 = document.getElementById('colour4');
    let text5 = document.getElementById('colour5');

    r.style.setProperty('--colour1', varColour1);
    r.style.setProperty('--colour2', varColour2);
    r.style.setProperty('--colour3', varColour3);
    r.style.setProperty('--colour4', varColour4);
    r.style.setProperty('--colour5', varColour5);

    text1.innerHTML = "<p>" + varColour1 + "</p>";
    text2.innerHTML = "<p>" + varColour2 + "</p>";
    text3.innerHTML = "<p>" + varColour3 + "</p>";
    text4.innerHTML = "<p>" + varColour4 + "</p>";
    text5.innerHTML = "<p>" + varColour5 + "</p>";
}

function generateTerm() {
    let prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    console.log(prefix);
    let p = document.getElementById("prefix");
    p.innerHTML = "<p>" + prefix + "</p>";

//generate and inject prefix

    let suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    console.log(suffix);
    let s = document.getElementById("suffix");
    s.innerHTML = "<p>" + suffix + "</p>";
}