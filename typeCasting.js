// ${variable} - Template Literals; dynamiczne wstawianie wartosci
// === - porównuje zarówno wartość jak i typ danych

function toNumberExplicit(value) {
    let converted = Number(value);
    console.log(
        `${typeof value} -> ${typeof converted}, wartość: ${converted}, ${isNaN(converted) ? "Nieudana konwersja (NaN)" : "Konwersja udana"}`
    );
}

function toNumberImplicit(value) 
{
    try {
        if (typeof value === "bigint") 
            throw new TypeError("BigInt nie może być rzutowany na Number za pomocą operatora +");
        let converted = +value;
        console.log(
            `${typeof value} -> ${typeof converted}, wartość: ${converted}, ${isNaN(converted) ? "Nieudana konwersja (NaN)" : "Konwersja udana"}`
        );
    } catch (error) {
        console.log(`${typeof value} -> BŁĄD: ${error.message}`);
    }
}

let a = 29;
let b = "29";
let c = null;
let d = true;
let e = 1n;
let f = "abc";
let g = undefined;

console.log("EXPLICIT");
toNumberExplicit(a);
toNumberExplicit(b);
toNumberExplicit(c);
toNumberExplicit(d);
toNumberExplicit(e);
toNumberExplicit(f);
toNumberExplicit(g);

console.log("\nIMPLICIT");
toNumberImplicit(a);
toNumberImplicit(b);
toNumberImplicit(c);
toNumberImplicit(d);
toNumberImplicit(e);
toNumberImplicit(f);
toNumberImplicit(g);
