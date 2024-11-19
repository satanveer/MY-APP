import React, { useState } from 'react';
import NameInput from './NameInput';
import AgeSelect from './AgeSelect';
import FileUpload from './FileUpload';
import SubmitButton from './SubmitButton';

function Dashboard() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log('Submitted:', { name, age, file });
      alert('Form submitted successfully!');
      setIsLoading(false);
      setName('');
      setAge('');
      setFile(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Healthcare Dashboard</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <NameInput name={name} setName={setName} />
          <AgeSelect age={age} setAge={setAge} />
          <FileUpload file={file} setFile={setFile} />
          <SubmitButton isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
}

export default Dashboard;