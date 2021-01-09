 function NumberInWords(number: number) {

    // przypisanie obiektu pola tekstowego do zmiennej
    // pobranie liczby
     var liczba = parseInt(number);

    var jednosci = ["", " jeden", " dwa", " trzy", " cztery", " pięć", " sześć", " siedem", " osiem", " dziewięć"];
    var nascie = ["", " jedenaście", " dwanaście", " trzynaście", " czternaście", " piętnaście", " szesnaście", " siedemnaście", " osiemnaście", " dziewietnaście"];
    var dziesiatki = ["", " dziesięć", " dwadzieścia", " trzydzieści", " czterdzieści", " pięćdziesiąt", " sześćdziesiąt", " siedemdziesiąt", " osiemdziesiąt", " dziewięćdziesiąt"];
    var setki = ["", " sto", " dwieście", " trzysta", " czterysta", " pięćset", " sześćset", " siedemset", " osiemset", " dziewięćset"];

    var grupy = [
        ["", "", ""],
        [" tysiąc", " tysiące", " tysięcy"],
        [" milion", " miliony", " milionów"],
        [" miliard", " miliardy", " miliardów"],
        [" bilion", " biliony", " bilionów"],
        [" biliard", " biliardy", " biliardów"],
        [" trylion", " tryliony", " trylionów"]];


    let wynik = '';
    let znak = '';
        if (liczba == 0)
            wynik = " zero";
        if (liczba < 0) {
            znak = "minus";
            liczba = -liczba;
        }

    let g = 0;
        while (liczba > 0) {
            let s = Math.floor((liczba % 1000) / 100);
            let n = 0;
            let d = Math.floor((liczba % 100) / 10);
            let j = Math.floor(liczba % 10);

            if (d == 1 && j > 0) {
                n = j;
                d = 0;
                j = 0;
            }
            let k = 2;
            if (j == 1 && s + d + n == 0)
                k = 0;
            if (j == 2 || j == 3 || j == 4)
                k = 1;
            if (s + d + n + j > 0) 
                wynik = setki[s] + dziesiatki[d] + nascie[n] + jednosci[j] + grupy[g][k] + wynik;

           
            g++;
            liczba = Math.floor(liczba / 1000);
    }
    return wynik;
   
}

export function AmountInWordsService(kwota: number)
{
    var zlotowki = ["", " złoty", " złote", " złotych"];
    var grosze = ["", " grosz", " grosze", " groszy"];

    let amount = kwota.toString().split('.');

    let amount_zlotowki = parseInt(amount[0]);
    let amount_grosze = parseInt(amount[1]);

    let jednosci = Math.floor(amount_zlotowki % 10);
    let dziesiatki = Math.floor(amount_zlotowki % 100);


    let z = 0;
    let g = 0;

    if (amount_zlotowki === 1) { z = 1; }
    else if ((jednosci > 1 && jednosci < 5) && (dziesiatki < 5 || dziesiatki > 15)) { z = 2; }
    else { z = 3;}

    if (amount_grosze === 1) { g = 1; }
    else if (amount_grosze >= 1 && amount_grosze <= 5) { g = 2; }
    else { g = 3; }

    let amountInWords = NumberInWords(amount_zlotowki) + zlotowki[z] + NumberInWords(amount_grosze) + grosze[g];

    return amountInWords;
}