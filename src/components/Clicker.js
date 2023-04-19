import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Example() {
  const [count, setCount] = useState(0);
  const[vers, setVersions] = useState(0);


  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
      <p style={{fontSize:"15px", position:"relative",left:"500px", top:"50px"}}>You clicked {count} times</p>
      <button style={{fontSize:"15px", position:"relative",left:"500px", top:"50px"}} className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <textarea style={{width:"200px", position:"relative"}}></textarea>
    </div>
  );
}

export default Example;