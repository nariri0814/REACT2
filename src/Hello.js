import React, {Component} from 'react';

class Hello extends Component {
    static defaultProps ={
        name:'이름없음'
    }
    render() {
        const { color, isSpecial, name } = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                {name}
            </div>
        )
    }
}


// function Hello(props) { //function Hello({color, name}) {
//     console.log(props);
//     return <div style={{
//         color: props.color // color
//     }}>안녕하세요 {props.name}</div>;  //}}>안녕하세요 {name}</div>; 


//     /*
//     jsx: html 처럼 보이지만 자바스크립트
//          바벨이 jsx를 자바스크립트형태로 전환해줌

//          <규칙>
//          -태그가 꼭 닫혀있어야함
//             ex) input 처럼 닫는태그가 없는 경우
//                 <input /> 
//                 <br/>
        
//         -두 개 이상의 태그는 하나의 태그에 감싸져있어야한다.
//             -태그로 감싸기 싫은 경우
//             <>
//             </> 로 감싸면 된다.
//     */

// }

// function Hello({ color, name, isSpecial }) {
//     return (
//         <div style={{
//             color
//         }}>
//             {isSpecial && <b>*</b>} {/*두개 비교*/}
//             {/* {isSpecial ? <b>*</b> : null} */}  {/*내용이 바뀌어야할때*/}
//             안녕하세요 {name}
//         </div>
//     );
// }

// Hello.defaultProps = {
//     name: '이름없음' //name이 없을때 기본값
// };


export default Hello;