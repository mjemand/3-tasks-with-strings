/* 1.
Írj egy függvényt, ami paraméterként tetszőleges darabszámú objektumot merge-öl össze,
majd visszatér ezzel az objektummal! Az összefűzést úgy hajtsa végre, hogy az új objektum property-jei
egyszerű indexek legyenek (0, 1, 2, stb.) amik tartalmazzák a részobjektumokat!
Pl.:
    // A két objektum:
    const johnDoe = { 
        firstName: 'Jonh',
        lastName: 'Doe'
    };

    const janeDoe = { 
        firstName: 'Jane',
        lastName: 'Doe'
    }

    // A végeredmény:
    {
        0: { 
            firstName: 'Jonh',
            lastName: 'Doe'
        },
        1:  { 
            firstName: 'Jane',
            lastName: 'Doe'
        }
    }
*/

const johnDoe = { 
        firstName: 'Jonh',
        lastName: 'Doe'
    }

const janeDoe = { 
        firstName: 'Jane',
        lastName: 'Doe'
    }

const Does = Object.assign(johnDoe, janeDoe)

console.log(Does);


/* 2.
Írj egy olyan függvényt (tagged template) ami a paraméterként kapott texts, values értékeket úgy adja vissza
egy strigben, hogy a text értékek dőltek, a value-k félkövérek legyenek, ha beillesztjük a html-be,
tehát a megfelelő tagekkel kiegészített stinget adjon vissza! */

const user = { 
    firstName: 'John',
    lastName: 'Doe',
    age: '30'
}

const tag = (texts, ...values) =>
    texts.map((text, index) =>
        `<em>${text}</>${values[index] ? `<strong>${values[index]}</strong>` : ''}`
        ).join('')

const template = tag`My name is ${user.firstName} ${user.lastName}, and I'm ${user.age} years old.`
document.body.innerHTML = template

/* 3.
Írj egy függvényt, ami első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb,
amik stringeket tartalmaznak!
A függvény:

összefűzi egy tömbbe az összes elemet,
eltávolítja az ismétlődő elemeket,
eltávolítja az összes olyan stringet, ami tartalmazza az első paraméterként megadott karaktert,
eltávolítja a stringek végén lévő white space karaktert
visszaadja ezt az új tömböt.
*/

const array = ['a', 'b']
const array2 = ['c', 'd']
const arrayMerge = function (char, ...arr) {
    [char, ...arr];
}

console.log(arrayMerge('kar', array, array2));
 /*
Alakítsd át úgy az előző feladatot, hogy ne egy függvényed legyen, hanem minden egyes részfeladat legyen külön függvénybe szervezve, tehát:

függvény: első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amik stringeket tartalmaznak! A függvény összefűzi egy tömbbe az összes elemet és visszaadja ezt az új tömböt
függvény: egy paraméterként kapott tömbből eltávolítja az ismétlődő elemeket és visszaadja az új tömböt
függvény: egy paraméterként kapott tömb összes elem elejéről és végéről levágja a space karaktereket, visszaad egy új tömböt
Egyik függvénynél se módosítsd a paraméterként kapott tömböt. Mindig újat hozz létre! 
Tartsd szem előtt, hogy egy függvény, csak egy dolgot csináljon! */