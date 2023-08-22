console.log('hi')

function firstTSFunc(nam1: number, nam2: number) {
    return nam1 + ' ' + nam2

}
console.log(firstTSFunc(1, 2))


function firstTSFunc2(nam1: number, nam2: number) {
    if (nam1 > nam2) {
        return nam1
    }
    else { return nam2 }

}
console.log(firstTSFunc2(1, 2))


function firstTSFunc3(nam1: number): string {
    if (nam1 % 2 == 0) {
        return "2 num"
    }
    else { return "1 number" }

}
console.log(firstTSFunc3(1))

function firstTSFunc4(nam1: string): number {
    return nam1.length

}
console.log(firstTSFunc4("hiufhiuiuhuh"))




function firstTSFunc5(nam1: number) {
    let i = 0
    while (i <= nam1) {
        console.log(i)
        i++
    }

}
console.log(firstTSFunc5(3))


function firstTSFunc6(nam1: number[]): number {
    let number = nam1[0]
    for (let i = 0; i < nam1.length; i++) {
        if (nam1[i] > number) {
            number = nam1[i]
        }
    }
    return number

}
console.log(firstTSFunc6([3, 2, 26, 5]))


interface Person {
    Name: string;
    Age: number;
    isStudent: boolean;

}

const person = {
    Name: "dody",
    Age: 33,
    isStudent: true
}

function firstTSFunc7(nam1: Person): string | number | boolean {
    return (nam1.Name + ' ' + nam1.Age + ' ' + nam1.isStudent)
}
console.log(firstTSFunc7(person))


function firstTSFunc8(nam1: Person): boolean {
    if (nam1.Age > 18) {
        return true
    } else {
        return false
    }
}
console.log(firstTSFunc8(person))



interface Book {
    Title: string;
    Author: string;
    Year: number;
}
interface Reader1  {
    favoriteBook : string
}

type Reader = Person & Reader1



// interface Reader extends Person {
//     favoriteBook : Book;
// }

// console.log(Reader)


// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/ChaimCymerman0548492309/nodeJSFirstServer.git
// git push -u origin main