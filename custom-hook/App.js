import React from 'react';
import{useState,useReducer,useContext} from 'react';
//CR1

const useForm = (callback) => {
const [values, setValues] = useState({});
const handleSubmit = (event) => { 
if (event) event.preventDefault();
callback(); 
};
const handleChange = (event) => { event.persist(); 
setValues(values => ({ ...values, [event.target.name]: event.target.value })); 
};
return { handleChange, handleSubmit, values, } 
};


//=============================================

//CR2 no1
const App1=()=>{ 
const [state,setState] = useState({ count: 0, value: "my message goes here" });
const handleChange = e =>setState({ value: e.target.value }); 
const handleClick = () =>setState(({ count }) => ({ count: count + 1 }));
const { count, value } =state;

return (
      <div>
        <CounterComponent count={count} />
    
        <button type="button" onClick={handleClick}>Increase Count</button>
        <input type="text" value={value} onChange={handleChange} />
        <MessageComponent message={value} />
      </div>
);
}
//=====================================================


// CR2 no2
const App2=()=>{ 
const [state,setState] = useState({ count: 0, value: "my message goes here" });
const handleChange = e =>setState({ value: e.target.value }); 
const handleClick = () =>setState(({ count }) => ({ count: count + 1 }));
const { count, value } =state;
console.log('readering...')
return (
      <div>
        <CounterComponent count={count} />
    
        <button type="button" onClick={handleClick}>Increase Count</button>
        <input type="text" value={value} onChange={handleChange} />
        <MessageComponent message={value} />
      </div>
);
}
//======================================================
// Question 02 no3
const MessageComponent = props => { 
console.log(rendering,MSG); 

return props.message; 
};
const CounterComponent = props => {props.count}; 
const MyCountContext = React.createContext();
<MyCountContext.Provider value={{count,setcount}}>( 

const reducer = function(state, action) { 
switch(action.type) { 
case "count": return { ...state, count: action.payload },
case "value": return { ...state, value: action.payload }, 
default: return state; 
} 
}; 
dispatch({ type: "count", payload:count+1}) 
dispatch({ type: "value", payload:count+1})
const { count, value } =useReducer(reducer,{ count: 0, value: "my message goes here"}); 
const handleChange = e =>setState({ value: e.target.value }); 
const handleClick = () =>setState(({ count }) => ({ count: count + 1 })); 
console.log('readering...')
return (
      <div>
        <CounterComponent.consumer count={count} />
    
        <button type="button" onClick={handleClick}>Increase Count</button>
        <input type="text" value={value} onChange={handleChange} />

        <MessageComponent.consumer message={value} />
      </div>
);)
</MyCountContext.Provider>
const App = () => {
  const [formValues, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <input
        name="email"
        placeholder="email"
        value={formValues.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={formValues.password}
        onChange={handleChange}
      />
    </div>
  );
};
