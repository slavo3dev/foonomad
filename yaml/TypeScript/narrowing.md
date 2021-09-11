
Narrowing is moving a varibale from a less precise type to a more precise type. We can use type narrowing to avoid type errors.

Let's see on the example:

Imaginge that we have a function usersHandler

```js
export function usersHandler(){
     
  }
   
```

Inside the function we are initilaze random & transfoormRandomToUpperCase variable.  

```js
  export function usersHandler(){
      let random = Math.random() > 0.5 ? "nrg nomad" : [1,2]
      let transfoormRandomToUpperCase;
  }
```

As you can see random variable can be type of string or array of numbers. We are dealing here with a multiple types of the variable.

```js
    let random: string | number[] 
```

If we try to transform random varibale to upperCase using javascript toUpperCase() function and assing to the initialzed value transfoormRandomToUpperCase. TypeScript will scream error.

Since we dont know , if we will het it here,a string or a number , we can't be certain that whis will be string and we will be able to call here function tu toUpperCase()

```js
  
  export default function play(){

      let random = Math.random() > 0.5 ? "NRG NOMAD" : [1,2]
      let transfoormRandomToUpperCase; 

    

       let transfoormRandomToUpperCase = random.toUpperCase()  // error 
    /* error 
       Property "toUpperCase" doesnt exit on type "nrg nomad | number[]"  
       Property "toUpperCase" doesnt exit on type "number[]" . ts(2339)
       */
  }

```

So we need to do NARROWING.

In the example below , we can narrow type specification is with simple "Else IF statement". We can check if variable random type is string we can use "toUpperCase()" function to make random string to upper case.

```js
  
  export default function play(){

      let random = Math.random() > 0.5 ? "NRG NOMAD" : [1,2]
      let transfoormRandomToUpperCase;

       // Narrowing
       // typeof type guard

       typeof random === "string" ? upper = random.toUpperCase() : console.log(random)

  }

```

Ways to narrow types in TypeScript

```js

// conditional value check
type random = {
  userName: string;
  userID?: number;
};

// typeof type guard
typeof random === "string" ? upper = random.toUpperCase() : console.log(random)

// instanceof type guard
class User {
  constructor(
    public firstName: string,
    public surname: string
  ) {}
}
class Member {
  constructor(public name: string) {}
}
type Contact = User | Member;

function greetUser(contact: Contact) {
  if (contact instanceof Person) {
    console.log("Hello " + contact.firstName);
  }
}


// in type guard
interface User {
  firstName: string;
  surname: string;
}
interface Member {
  name: string;
}
type Contact = User | Member;

function greetUser(contact: Contact) {
  if ("firstName" in contact) {
    console.log("Hello " + contact.firstName);
  }
}

// type guard function with a type predicate

type Rating = 1 | 2 | 3 | 4 | 5;

async function getRating(productId: string) {
  const response = await fetch(
    `/products/${productId}`
  );
  const product = await response.json();
  const rating = product.rating;
  return rating; //The return type of the function is inferred to be Promise<any>
}
// This means that no type checking 
const rating = await getRating("1"); // type of rating is `any`

// We can use a type guard function that has a type predicate to make this code more type-safe. 
function isValidRating(
  rating: any
): rating is Rating {
  if (!rating || typeof rating !== "number") {
    return false;
  }
  return (
    rating === 1 ||
    rating === 2 ||
    rating === 3 ||
    rating === 4 ||
    rating === 5
  );
}

```
