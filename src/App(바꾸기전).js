
import React, {useRef, useMemo, useState, useCallback, createContext} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중~');
  return users.filter(user => user.active).length;
}


const initialState = {
  // inputs: {
  //   username: '',
  //   email:''
  // },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
        id:2,
        username:'tester',
        email: 'tester@example.com',
        active: false,
    },
    {
        id:3,
        username: 'liz',
        email: 'dfksdjflkjd',
        active: false,
    }
  ]
    
};

//초기값 없어서 null
export const UserDispatch = createContext(null);

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email:'',
  })
  const {username, email} = inputs;

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }, [inputs]);

  const [users, setUsers] = useState([ 
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true,
    },
    {
        id:2,
        username:'tester',
        email: 'tester@example.com',
        active: false,
    },
    {
        id:3,
        username: 'liz',
        email: 'dfksdjflkjd',
        active: false,
    }
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user])
    setUsers(users => users.concat(user));
    setInputs({
      username:'',
      email:''
    })
    nextId.current += 1;
  }, [username, email]);



  const count = useMemo(() => countActiveUsers(users), [users]);
  return(
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users}/>
      <div>활성 사용자 수: {count}</div>
    </>
  )
}

export default App;
