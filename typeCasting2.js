// Odkomentuj dla trybu ścisłego
"use strict";

function testConversion(value) 
{
    let convertedExplicit = Number(value);
    let convertedImplicit = +value;

    console.log(`Wartość: ${value}`);
    console.log(`Konwersja jawna (Number): ${convertedExplicit} - ${isNaN(convertedExplicit) ? "Nieudana konwersja (NaN)" : "Konwersja udana"}`);
    console.log(`Konwersja niejawna (+): ${convertedImplicit} - ${isNaN(convertedImplicit) ? "Nieudana konwersja (NaN)" : "Konwersja udana"}`);
    console.log('-------------------------');
}

testConversion("");
testConversion("   ");
testConversion("abc");
testConversion("0xFF");
testConversion("075");
testConversion("42");

