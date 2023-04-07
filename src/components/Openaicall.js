import React, { useState } from "react";
import axios from "axios";
import { OpenAIApi } from "openai";

function AxiosCallComponent() {
    const [prompt, setPrompt] = useState("");
    const [responseText, setResponseText] = useState("");
  
    const makeOpenAIAPIRequest = async () => {
      try {
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
        apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 0,
        });
       /* const response = await axios.post(
          "https://api.openai.com/v1/engines/text-davinci-003/completions",
          {
            prompt: prompt,
            max_tokens: 50,
            n: 1,
            stop: "\n",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer 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`,
            },
          }
        );*/

        setResponseText(response.data.choices[0].text);
      // setResponseText(JSON.stringify(response.data, null, 2));
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ clear: "left",display: "flex", flexDirection: "row", width :"80px", paddingBottom: "20px", paddingRight: "10px", fontSize: "20px" }}>
          Prompt:
        <input style={{float: "left" }} value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        </label>
        <button onClick={makeOpenAIAPIRequest} style={{ alignSelf: "flex-end" }}>Generate Code</button>
        <textarea className="code-space" value={responseText} onChange={(e) => setResponseText(e.target.value)} style={{ marginBottom: "1rem" }} />
      </div>
    );
  }
export default AxiosCallComponent;
