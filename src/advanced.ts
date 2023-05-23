interface IUser  {
    firstName:string;
    lastName:string
}

interface IMethod {
    fullName():string
}

interface IModel<TData, TMethod> {
    data:TData;
    method:TMethod;
}

type Model = IModel<IUser, IMethod>;


class User implements Model{
    data: IUser;
    method: IMethod;

    constructor(firstName:string, lastName:string) {
        this.data = {firstName, lastName};
        this.method = {
            fullName:()=> firstName + " " + lastName
        }
    }
}

const user = new User("Md", "Arif");

console.log(user.method.fullName());
