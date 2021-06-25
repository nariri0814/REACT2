import React, {createContext, useContext, useState} from 'react';

//Context 를 만들 땐 다음과 같이 React.createContext(기본값) 라는 함수를 사용
const MyContext = createContext('defalutValue')

function Child() {
    const text = useContext(MyContext);
    return <div>안녕하세요 {text}</div>
}

function Parent() {
    return <Child/>
}

function GrandParent() {
    return <Parent/>
}

function ContextSample() {
    const [value, setValue] = useState(true);
    return( 
        // Provider 로 Context 값을 정할 수 있음(value로 설정)
        <MyContext.Provider value ={value ? "GOOD" : 'BAD'}>
            <GrandParent text="GOOD"/>
            <button onClick={() => setValue(!value)}>CLICK ME</button>
        </MyContext.Provider>
    )
}

export default ContextSample;