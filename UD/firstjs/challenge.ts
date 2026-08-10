


interface Product{
    
    id: number,
    discount?: number,
    name:string,
    price: number
}

function pick<T>(items:T[], index:number): T| undefined{
    return items[index];
}

type notifcation = {kind : "email" , to: string, subject: string} | {kind : "sms", to : string,message: string};

function summarise(n:notifcation): string{
    switch(n.kind){

        case 'email':return `email to ${n.to}`;
        case 'sms':return `sms to ${n.message}`;
    }
}

console.log(summarise)


const product=[];



/*
interface Product {
  id: number;
  discount?: number;
  name: string;
  price: number;
}

function pick<T>(items: T[], index: number): T | undefined {
  return items[index];
}

type Notification =
  | { kind: "email"; to: string; subject: string }
  | { kind: "sms"; to: string; message: string };

function summarise(n: Notification): string {
  switch (n.kind) {
    case "email":
      return `Email to ${n.to}: ${n.subject}`;

    case "sms":
      return `SMS to ${n.to}: ${n.message}`;
  }
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 50000, discount: 10 },
  { id: 2, name: "Mouse", price: 1000 },
];

const firstProduct = pick(products, 0);
console.log(firstProduct);

const email: Notification = {
  kind: "email",
  to: "alice@example.com",
  subject: "Order confirmed",
};

console.log(summarise(email));

*/