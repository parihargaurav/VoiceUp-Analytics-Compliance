import React from "react";
import clsx from "clsx";

const Sidebar = ({
  conversations,
  selectedConversationId,
  onSelectConversation,
}) => (
  <div className="w-1/4 p-6 bg-white border-r shadow-lg min-h-screen">
    <h2 className="text-2xl font-bold mb-6 border-b pb-2">🗂️ Conversations</h2>
    <ul className="space-y-3">
      {conversations.map((c) => {
        const isSelected = c.id === selectedConversationId;
        return (
          <li
            key={c.id}
            onClick={() =>
              isSelected
                ? onSelectConversation(null)
                : onSelectConversation(c.id)
            }
            className={clsx(
              "cursor-pointer p-4 transition duration-300 rounded-xl shadow-md border border-gray-200",
              isSelected
                ? "bg-blue-50 border-blue-400 shadow-lg scale-105"
                : "bg-white hover:bg-blue-100 hover:shadow-lg"
            )}
          >
            <h3
              className={clsx(
                "text-lg font-semibold",
                isSelected ? "text-blue-700" : "text-gray-800"
              )}
            >
              Conversation #{c.id}
            </h3>
            <div className="text-gray-500 text-xs mt-2 truncate">
              {c.messages?.[1]?.text?.slice(0, 38) || "No messages yet"}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Sidebar;