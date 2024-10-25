/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'Yash',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
} */

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Yash',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}



//person.role.push('admin');

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
    console.log('is admin')
}