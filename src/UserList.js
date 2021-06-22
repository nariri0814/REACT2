import React from 'react';

function User({a}) {
    return(
        <div>
            <b>{a.username}</b>
            <span>({a.email})</span>
        </div>
    )
}


function UserList() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id:2,
            username:'tester',
            email: 'tester@example.com'
        },
        {
            id:3,
            username: 'liz',
            email: 'dfksdjflkjd'
        }
    ];
    console.log(users.map(b => (<User a ={b} key={b.id}/>)))

    return (
        <div>
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}
            {
                users.map(  
                    b => (<User a ={b} key={b.id}/>)
                )
                
            }
        </div>

    )
}

export default UserList;