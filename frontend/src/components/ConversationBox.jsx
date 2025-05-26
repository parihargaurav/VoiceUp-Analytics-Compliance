import React from "react";

const Badge = ({ color, children }) => (
  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold bg-${color}-100 text-${color}-700`}>
    {children}
  </span>
);

const ConversationBox = ({ conversation, onClose }) => {
  if (!conversation) return null;

  return (
    <div className="w-full flex justify-center items-center min-h-[90vh]">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-b pb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💬</span>
            <h2 className="text-2xl font-extrabold text-blue-800">
              Conversation #{conversation.id}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-red-500 border px-3 py-1 rounded hover:bg-red-50 transition"
          >
            Close
          </button>
        </div>
        {/* Messages */}
        <div className="mb-8 space-y-4">
          {conversation.messages.map((msg, idx) => (
            <div
              key={idx}
              className={`px-4 py-2 rounded-lg shadow-sm ${
                msg.sender === "agent"
                  ? "bg-blue-50 text-blue-900 ml-6"
                  : "bg-orange-50 text-orange-900 mr-6 text-right"
              }`}
            >
              <div className="px-2 text-xs text-gray-500 mb-1 font-medium ">
                {msg.sender === "agent" ? "Agent" : "Customer"}
              </div>
              <div className="text-base">{msg.text}</div>
            </div>
          ))}
        </div>
        {/* Summaries */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-pink-500 text-lg">💗</span>
            <span className="text-lg font-bold text-orange-600">Emotion Summary</span>
          </div>
          <div className="bg-gray-50 rounded p-3 text-sm font-mono mb-4 border">
            {JSON.stringify(conversation.emotion_summary, null, 2)}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-500 text-lg">🛡️</span>
            <span className="text-lg font-bold text-blue-700">Compliance Summary</span>
          </div>
          <div className="bg-gray-50 rounded p-3 text-sm font-mono border">
            {JSON.stringify(conversation.compliance_summary, null, 2)}
          </div>
        </div>
        {/* Score */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-green-600 text-2xl">✅</span>
          <span className="text-lg font-bold text-orange-600">
            Overall Compliance Score: {conversation.overall_compliance_score}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;