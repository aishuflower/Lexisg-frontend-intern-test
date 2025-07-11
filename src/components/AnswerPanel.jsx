import React from 'react';

export default function AnswerPanel({ answer, citation }) {
  if (!answer) return null;

  return (
    <div className="p-4 space-y-4">
      <div className="bg-gray-100 p-4 rounded shadow">
        <strong>Answer:</strong>
        <p>{answer}</p>
      </div>
      <div className="text-sm">
        <strong>Citation:</strong>
        <p>
          “{citation.text}” (<a
            href={citation.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {citation.source}
          </a>)
        </p>
      </div>
    </div>
  );
}
