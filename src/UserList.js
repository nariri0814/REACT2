import React, {useContext} from 'react';
import {UserDispatch} from './App';
//mount: 나타남 unmount: 사라짐
const User = React.memo(function User({user}) {
    const { username, email, id, active } = user;

    const dispatch = useContext(UserDispatch);
    // useEffect(() => {
    //     console.log('마운트');
    //     // props -> state
    //     // REST API
    //     // D3 Video.js
    //     // setInterval, setTimeout
    //     return () => {
    //         console.log('언마운트');
    //         // clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거
    //         // 일종의 뒷정리 함수
    //     }
    // }, []);

    // useEffect(() => {
    //     //user가 변경되면 실행
    //     console.log('user 값 바뀜')
    //     console.log(user);
    //     return () => {
    //         console.log('user 값 바뀌기 전')
    //         console.log(user)
    //     }
    // }, [user]);
    return(
        <div>
            <b 
                style={{
                    color: active ? 'green' : 'black',
                    cursor:'pointer'
                }}
                onClick={() => {
                    dispatch({type: 'TOGGLE_USER',id})
                }}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button 
                onClick={() => {
                    dispatch({type: 'REMOVE_USER',id})
                }}
            >삭제</button>
            {/*onRemove가 함수로 들어가지 않으면 랜더링 되면서 바로 삭제
               함수호출이 아님!*/}
        </div>
    )
});


function UserList({users}) {
    // const users = [
    //     {
    //         id: 1,
    //         username: 'velopert',
    //         email: 'public.velopert@gmail.com'
    //     },
    //     {
    //         id:2,
    //         username:'tester',
    //         email: 'tester@example.com'
    //     },
    //     {
    //         id:3,
    //         username: 'liz',
    //         email: 'dfksdjflkjd'
    //     }
    // ];
    // console.log(users.map(b => (<User a ={b} key={b.id}/>)))

    return (
        <div>
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}
            {users.map(user => (
                <User 
                    user ={user} 
                    key={user.id} 
                    
                />
            ))}
        </div>
    ); 
}

export default React.memo(
    //nextProps.users 와 prevProps.users 가 같다면 리랜더링하지 않겠다
    UserList,
    // (prevProps, nextProps) => nextProps.users === prevProps.users
);