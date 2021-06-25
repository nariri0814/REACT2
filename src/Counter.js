import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        // this.handleIncrease = this.handleIncrease.bind(this);
        // this.handleDecrease = this.handleDecrease.bind(this);
    }

    state = {
        counter: 0, //이렇게 그냥 바로 값을 지정해줄 수도 있다 / (정식 자스 문법이 아님)
        fixed:1,
        updateMe: {
            toggleMe: false,
            dontChangeMe: 1,
        }
    }
    handleIncrease = () => {
        // console.log(this) //여기서 this가 자기 자신의 component를 가르켜야하는데 onclick같이 다른 이벤트랑 연결이 되면 함수와 this 연결이 사라짐 -> 결국 this 못 알아봄
        // /*해결방법   1. constructor 에서 함수를 미리 바인딩해주기
        //             2. 커스텀 매서드를 사용할때 화살표 함수로 (정식 자스 문법이 아님)
        // */
        // console.log('increase')
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        this.setState(state => ({
            counter: this.state.counter - 1
        }));
        this.setState(state => ({
            counter: this.state.counter - 1
        }));
        this.setState(state => ({
            counter: this.state.counter - 1
        }));
        this.setState(state => ({ // setState를 바로 업데이트 하고 싶으면 이렇게 함수형 setState로 작성
            counter: this.state.counter - 1
        })); //플러스 버튼 한 번 누르면 4씩 증가
    }


    handleDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
            //state 형태는 무조건 객체형태이어야함
        });
        this.setState({ //setState 설정하는 상태로 바꿔달라고 요청하는 
            counter: this.state.counter - 1
        });
        this.setState({
            counter: this.state.counter - 1
        });
        this.setState({
            counter: this.state.counter - 1
        }); //마이너스 버튼 눌러도 -1씩 차감
    }

    handleToggle = () => {
        this.setState({
            updateMe: {
                ...this.state.updateMe,
                toggleMe: !this.state.updateMe.toggleMe
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값{this.state.fixed}</p>
            </div>
        )
    }
}


// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             throw new Error('Unhandled action');
//     }
// }


// function Counter() {
//     // const [number, setNumber] = useState(0);
//                                               //초기값
//     const[number, dispatch] = useReducer(reducer, 0);


//     const onIncrease = () => {
//         // setNumber(prevNumber => prevNumber + 1);
//         dispatch({
//             type: 'INCREMENT'
//         })
//     };
//     const onDecrease = () => {
//         // setNumber(prevNumber => prevNumber - 1);
//         dispatch({
//             type: 'DECREMENT'
//         })
//     };
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

export default Counter;