import React, { useState } from 'react';
import ChatInput from './components/ChatInput';
import AnswerPanel from './components/AnswerPanel';

function App() {
  const [answer, setAnswer] = useState('');
  const [citation, setCitation] = useState(null);

  const handleQuery = async (question) => {
    // Simulated API
    const response = {
      answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
      citations: [
        {
          text: "as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
        }
      ]
    };

    setAnswer(response.answer);
    setCitation(response.citations[0]);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 border rounded shadow-md">
      <div className="p-4 text-xl font-bold border-b">Lexi Legal Assistant</div>
      <AnswerPanel answer={answer} citation={citation} />
      <ChatInput onSubmit={handleQuery} />
    </div>
  );
}

export default App;
