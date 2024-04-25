


// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

function masodfokuEgyenletMegoldasa(a, b, c) {
    let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    if(x1 && x2 < 0){
        return "Nincs megoldás";
    }else if(a === 0) {
        return "Nem lehet nulla";
    }else{
        const eredmeny = {
            X1: x1,
            X2: x2,
        };
        return eredmeny;
    }
}

// ha komplex a D --> akkor negatív

function masodfokuEgyenletMegoldasaTeszt(){
    {
        let szam = masodfokuEgyenletMegoldasa(1,2,1)
        let vart1 = -1;
        let vart2 = "nincs";
        let kapott1 = szam.X1;
        let kapott2 = szam.X2;
        console.assert(vart1 === kapott1 && vart2 === kapott2, `várt: ${vart1,vart2} kapott:${kapott1,kapott2} HIBA!`);
    }
    {
        let szam = masodfokuEgyenletMegoldasa(8,6,-1)
        let vart1 = 0.14038820320220757;
        let vart2 = -0.8903882032022076;
        let kapott1 = szam.X1;
        let kapott2 = szam.X2;
        console.assert(vart1 === kapott1 && vart2 === kapott2, `várt: ${vart1,vart2} kapott:${kapott1,kapott2} HIBA!`);
    }
    {
        let szam = masodfokuEgyenletMegoldasa(10,6,2)
        let vart1 = "Nincs megoldás";
        let vart2 = "Nincs megoldás";
        let kapott1 = szam.X1;
        let kapott2 = szam.X2;
        console.assert(vart1 === kapott1 && vart2 === kapott2, `várt: ${vart1,vart2} kapott:${kapott1,kapott2} HIBA!`);
    }
    {
        let szam = masodfokuEgyenletMegoldasa(-12,43,-23)
        let vart1 = 0.6543879946703183;
        let vart2 = 2.928945338663015;
        let kapott1 = szam.X1;
        let kapott2 = szam.X2;
        console.assert(vart1 === kapott1 && vart2 === kapott2, `várt: ${vart1,vart2} kapott:${kapott1,kapott2} HIBA!`);
    }
    {
        let szam = masodfokuEgyenletMegoldasa(1,1,1)
        let vart1 = "Nincs megoldás";
        let vart2 = "Nincs megoldás";
        let kapott1 = szam.X1;
        let kapott2 = szam.X2;
        console.assert(vart1 === kapott1 && vart2 === kapott2, `várt: ${vart1,vart2} kapott:${kapott1,kapott2} HIBA!`);
    }
    {
        let szam = masodfokuEgyenletMegoldasa(23,55,23)
        let vart1 = -0.5402255029703767;
        let vart2 = -1.8510788448557103;
        let kapott1 = szam.X1;
        let kapott2 = szam.X2;
        console.assert(vart1 === kapott1 && vart2 === kapott2, `várt: ${vart1,vart2} kapott:${kapott1,kapott2} HIBA!`);
    }
    {
        let szam = masodfokuEgyenletMegoldasa(-100,322,555)
        let vart1 = -1.2434365246137855;
        let vart2 = 4.463436524613786;
        let kapott1 = szam.X1;
        let kapott2 = szam.X2;
        console.assert(vart1 === kapott1 && vart2 === kapott2, `várt: ${vart1,vart2} kapott:${kapott1,kapott2} HIBA!`);
    }
    {
        let szam = masodfokuEgyenletMegoldasa(-1.2434365246137855,-2.645646456456,4.463436524613786)
        let vart1 = -3.236714296872728;
        let vart2 = 1.109025103186107;
        let kapott1 = szam.X1;
        let kapott2 = szam.X2;
        console.assert(vart1 === kapott1 && vart2 === kapott2, `várt: ${vart1,vart2} kapott:${kapott1,kapott2} HIBA!`);
    }
    {
        let szam = masodfokuEgyenletMegoldasa(12.4,21,4.463436524613786)
        let vart1 = -0.2492191948889117;
        let vart2 = -1.4443291922078625;
        let kapott1 = szam.X1;
        let kapott2 = szam.X2;
        console.assert(vart1 === kapott1 && vart2 === kapott2, `várt: ${vart1,vart2} kapott:${kapott1,kapott2} HIBA!`);
    }
    {
        let szam = masodfokuEgyenletMegoldasa(1.11111,-1.1111,0)
        let vart1 = "Nem lehet nulla";
        let vart2 = "Nem lehet nulla";
        let kapott1 = szam.X1;
        let kapott2 = szam.X2;
        console.assert(vart1 === kapott1 && vart2 === kapott2, `várt: ${vart1,vart2} kapott:${kapott1,kapott2} HIBA!`);
    }
}

console.log(masodfokuEgyenletMegoldasaTeszt())
