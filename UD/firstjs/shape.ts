

interface Book{

    readonly id: number,
    title:string,
    pages:number,
    author:string,
    year?: number
}

const book:Book ={id:1,title:"Upgrad",pages:80,author:"gaurav",year:2026}

console.log(book)