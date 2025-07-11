import React, { useState } from 'react';

export default function ChatInput({ onSubmit }) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await onSubmit(question);
    setLoading(false);
    setQuestion('');
  };

  return (
    <div className="p-4 border-t flex gap-2">
      <textarea
        className="flex-1 p-2 border rounded"
        rows="3"
        placeholder="Ask a legal question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={handleSubmit}
        disabled={loading || !question.trim()}
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
}
