import React from 'react';

const Dashboard = ({ conversations }) => {
  // Only include conversations with at least one message
  const filteredConversations = conversations.filter(
    c => Array.isArray(c.messages) && c.messages.length > 0
  );

  const compliantCount = filteredConversations.filter(
    c => c.overall_compliance_score === 100
  ).length;

  const nonCompliantCount = filteredConversations.length - compliantCount;

  const emotionAggregate = filteredConversations.reduce((acc, c) => {
    for (const [key, val] of Object.entries(c.emotion_summary || {})) {
      acc[key] = (acc[key] || 0) + val;
    }
    return acc;
  }, {});

  return (
    <div className="p-8 w-3/4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">📊 Analytics Dashboard</h2>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">🛡️ Compliance Overview</h3>
        <div className="text-sm">
          <p className="mb-2">✅ <strong>Compliant:</strong> {compliantCount}</p>
          <p>❌ <strong>Non-Compliant:</strong> {nonCompliantCount}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">😊 Emotion Overview</h3>
        {filteredConversations.length === 0 ? (
          <p className="text-gray-400 italic">No conversation data available.</p>
        ) : (
          <ul className="space-y-2 text-sm">
            {Object.entries(emotionAggregate).map(([emotion, count]) => (
              <li key={emotion} className="capitalize">• {emotion}: {count}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;