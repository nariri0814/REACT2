import React, {useRef, useState, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중~');
  return users.filter(user => user.active).length;
}

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
  }, [inputs]); // inputs값이 useState로 들어가기때문에 빼서 적어줘야함
  // inputs 가 바뀔때만 함수가 새로 만들어진다 바뀌지 않을때는 기존함수 재사용

  const [users, setUsers] = useState([ //useState로 감싸서 users , setUsers함수를 바깥으로 빼서 컴포넌트의 상태로 관리
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
    // console.log(nextId.current); //4
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
    //각 user객체들 확인 객체들의 id가 파라미터로 가져온 id랑 같이 않으면 새로운 배열에 넣는다
  },[]);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      //유저.아이디가 파라미터로 가져온 아이디값이랑 같으면 유저객체 가져와서 액티브 값 반전시키고 
      // 파라미터로 가져온 아이디값이랑 다르면 기존의 값 사용

      user => user.id === id
      ? { ...user, active: !user.active }
      : user
    ));
  },[]);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return(
    <>
      <CreateUser 
       username={username} 
       email={email} 
       onChange={onChange} 
       onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </>
  )
}

export default App;
