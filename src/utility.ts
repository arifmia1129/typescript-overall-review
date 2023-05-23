interface IPerson {
    name:string;
    age:number;
    phone:string;
    email:string;
    gender?:"male"|"female"|"other"
}
// Pick
type Person = Pick<IPerson, "name" | "age" | "gender">;

// Omit
type Contact = Omit<IPerson, "name" | "age" | "gender">;



// Partial -> to make all the properties be optional

type OptionalType = Partial<IPerson>;


// Required -> to make all the properties be required
type RequiredType = Required<IPerson>;


// Readonly
const person:Readonly<IPerson> = {
    name:"Arif",
    age:22,
    gender:"male",
    phone:"0155555",
    email:"arif@gmail.com"
}

