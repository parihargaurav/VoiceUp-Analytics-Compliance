// File: src/components/ChatView.jsx
import React from 'react';
import Message from './Message';

const ChatView = ({ conversation }) => {
  if (!conversation) {
    return <div className="p-6 text-gray-500 italic">⬅️ Select a conversation to view chat</div>;
  }

  return (
    <div className="w-3/4 p-8 bg-gray-50 overflow-y-auto min-h-screen">
      <h2 className="text-2xl font-bold mb-6">💬 Conversation #{conversation.id}</h2>

      <div className="flex flex-col space-y-3 mb-6">
        {conversation.messages.map((m, idx) => (
          <Message key={idx} sender={m.sender} text={m.text} />
        ))}
      </div>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🧠 Emotion Summary</h3>
        <pre className="bg-white p-4 rounded-lg border text-sm shadow-md">
          {JSON.stringify(conversation.emotion_summary, null, 2)}
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🛡️ Compliance Summary</h3>
        <pre className="bg-white p-4 rounded-lg border text-sm shadow-md">
          {JSON.stringify(conversation.compliance_summary, null, 2)}
        </pre>
      </section>

      <h3 className="text-xl font-semibold">
        ✅ Overall Compliance Score:{" "}
        <span className="text-green-600">{conversation.overall_compliance_score}%</span>
      </h3>
    </div>
  );
};

export default ChatView;
