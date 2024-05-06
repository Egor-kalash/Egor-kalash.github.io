alert('Hallo');

// условия

// пользователи

let user1 = {name: "user1", age: 16, onlineStatus: true};

let user2 = {name: "user2", age: 22, onlineStatus: false};

let user3 = {name: "user3", age: 18, onlineStatus: false};

let user4 = {name: "user3", age: 13, onlineStatus: true};

let user5 = {name: "user3", age: 17, onlineStatus: true};

let users = [user1, user2, user3, user4, user5];

// \\

// пользователей в сети

let onlineUsers = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].onlineStatus == true ) {
        onlineUsers++;
    }
};

console.log('Users online: ', onlineUsers);

// пользователей младше 18

let usersAge = 0;

for ( i = 0; i < users.length; i++) {
    if (users[i].age < 18 ) {
        usersAge++;
    }
};

console.log('Users younger 18-th: ', usersAge);

// toDo 

let toDo = [{
    title : 'go to the shop',
    completed: false
},
{
    title : 'buy some milck',
    completed: false
},
{
    title : 'make H/W by JS',
    completed: true
},
];

// toDo решение 

let h = 0 ;

let toDoNotCompleted = [] ; 

while(h < toDo.length ){

    if(toDo[h].completed == false ){
        
        toDoNotCompleted = toDoNotCompleted.concat(toDo[h].title);
    }

    h++
};

console.log('Left to do: ', toDoNotCompleted);