import React, { Component } from 'react';
import PropTypes from 'prop-types';



class App extends Component {
  render() {
    let friends = [{name: 'keith', age: 21}, {name: 'ahmad', age: 19}, {name: 'sergio', age: 23}]
    return (
      <div className="Hello">
        {friends.map(function(d, idx){
            let legalage;
            if (d.age > 20){
                legalage = "you are 21 or over"
            } else {
                legalage = "not 21 or over"
            }
            return (<li key={idx}>Hello, {d.name} you are {d.age}. {legalage}</li>)
        })}
    </div>
    )}}

// Hello.propTypes = {
//     txt: PropTypes.string,
//     cat: PropTypes.number.isRequired

// }
export default App;