import { useState, useReducer, useCallback } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return  ;
        case 'RESET':
            return ;
        default:
            console.log('error')
    }
}
//CHANGE //RESET
function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const onChange = () => {
        dispatch({
            type: 'CHANGE'
        })
    };
    const reset =() => {
        dispatch({
            type: 'RESET'
        })
    }




    // const [form, setForm] = useState(initialForm);
    // const onChange = useCallback(e => {
    //     const {name, value} = e.target;
    //     setForm(form => ({...form, [name]: value}));
    // },[]);

    // const reset = useCallback(() => setForm(initialForm), [initialForm]);

    // return [form, onChange, reset]
};

export default useInputs;