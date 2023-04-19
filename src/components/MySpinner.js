import React, { useState, useEffect } from "react";
import axios from "axios";

function Spinner() {
  return <div className="spinner"></div>;
}

function MySpinner() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
     const api_key = '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';
     const response =  axios.post(
          "https://api.openai.com/v1/engines/text-davinci-003/completions",
          {
            prompt: "Get Java Code for Hello World",
            max_tokens: 1000,
            n: 1,
            stop: "\n",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: 'Bearer ' + api_key,
            },
          }
        )
        .then(response => {
            setData(response.data.choices[0].text);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
          });   
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <textarea style={{position:"relative", left:"-165px", height:"200px", width:"500px", marginTop:"20px"}} value={data} onChange={(e) => setData(e.target.value)}> </textarea>
        </div>
      )}
    </div>
  );
}

export default MySpinner;
