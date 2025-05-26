import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatView from './components/ChatView';
import Dashboard from './components/Dashboard';
import { mockConversations } from './data/mockConversations';

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedConversation = mockConversations.find(
    (c) => c.id === selectedId
  );

  const handleSelectConversation = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        conversations={mockConversations}
        selectedConversationId={selectedId}
        onSelectConversation={handleSelectConversation}
      />
      <div className="flex-1 flex flex-col items-center justify-start bg-gray-50 p-8">
        {selectedConversation ? (
          <ChatView
            conversation={selectedConversation}
            onClose={() => setSelectedId(null)}
          />
        ) : (
          <Dashboard conversations={mockConversations} />
        )}
      </div>
    </div>
  );
};

export default App;