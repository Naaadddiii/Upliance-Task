import React from "react";
import Counter from "./Counter";
import RichTextEditor from "./RichTextEditor";
import { NameAndIdForm, ContactDetailsForm } from "./UserForm";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Row: Counter and Rich Text Editor */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 h-[500px] flex flex-col">
          <h2 className="text-xl font-bold mb-4">Counter</h2>
          <Counter />
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-6 h-[500px] flex flex-col overflow-hidden">
          <h2 className="text-xl font-bold mb-4">Rich Text Editor</h2>
          <RichTextEditor />
        </div>

        {/* Second Row: Name and ID Form & Contact Details Form */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 h-[500px] flex flex-col">
          <h2 className="text-xl font-bold mb-4">Name and ID Form</h2>
          <NameAndIdForm />
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-6 h-[500px] flex flex-col overflow-hidden">
          <h2 className="text-xl font-bold mb-4">Contact Details Form</h2>
          <ContactDetailsForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
