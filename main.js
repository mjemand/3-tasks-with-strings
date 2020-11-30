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

// const Does = Object.assign(johnDoe, janeDoe)
// console.log(Does);
// Ez és más hasonló összefűzési megoldások nem jók, mert egy db objectbe teszi az egészet
// és az azonos paramétereket egybe olvasztja (az utolsó értékkel)!

function mergeObjects(...objects) {
  return {
     ...{...objects}
 }}
console.log(mergeObjects(johnDoe, janeDoe));

const mergeObjects2 = (...objects) => ({...objects})
console.log(mergeObjects2(johnDoe, janeDoe));

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
        `<em>${text}</em>${values[index] ? `<strong>${values[index]}</strong>` : ''}`
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
Alakítsd át úgy az előző feladatot, hogy ne egy függvényed legyen,
hanem minden egyes részfeladat legyen külön függvénybe szervezve, tehát:
1. függvény: első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb,
amik stringeket tartalmaznak! A függvény összefűzi egy tömbbe az összes elemet és visszaadja ezt az új tömböt.
2. függvény: egy paraméterként kapott tömbből eltávolítja az ismétlődő elemeket és visszaadja az új tömböt.
3. függvény: egy paraméterként kapott tömb összes elem elejéről és végéről levágja a space karaktereket, visszaad egy új tömböt
Egyik függvénynél se módosítsd a paraméterként kapott tömböt. Mindig újat hozz létre! 
Tartsd szem előtt, hogy egy függvény, csak egy dolgot csináljon! 
Konzultáció 2020-11-25 - kiegészítő
*/

const array = ['a', 'b']
const array2 = ['c', 'd']
console.log(array, array2);
console.log([...array, ...array2]);

const arrayMerge = function (char, ...arrays) {
    return [char, ...arrays];
}
console.log(arrayMerge('kar', array, array2));

const arrayMerge2 = function (char, ...arrays) {
    return [char, ...arrays].flat();
}
console.log(arrayMerge2('kar', array, array2));

const arrayMerge3 = function (...arrays) {
    return arrays.flat();
}
console.log(arrayMerge3(array, array2));

function customFilter (char, ...arrays) {
    const concatedArray = arrays.flat();
    console.log(concatedArray);
    const noRepeat = concatedArray.filter((item,index) => concatedArray.indexOf(item) === index);
    console.log(noRepeat);
    const removeIfIncludesChar = noRepeat.filter(item => item.indexOf(char) === -1)
    console.log(removeIfIncludesChar);
    const removeWhiteSpace = removeIfIncludesChar.map(item => item.trimEnd());
    console.log(removeWhiteSpace);
}

customFilter('f', ['b', 'kuzgfvzgf', 'uztfzitf'], ['b', 'abcd       ', 'efgh']);

function customFilter2 (char, ...arrays) {
    const concatedArray = arrays.flat();
    return concatedArray
        .flat()
        .filter((item,index) => concatedArray.indexOf(item) === index)
        .filter(item => item.indexOf(char) === -1)
        .map(item => item.trimEnd());
}

console.log(customFilter2('f', ['b', 'kuzgfvzgf', 'uztfzitf'], ['b', 'abcd       ', 'efgh']));