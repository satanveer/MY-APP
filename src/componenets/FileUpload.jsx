import React from 'react';

function FileUpload({ file, setFile }) {
  return (
    <div className="mt-4">
      <label
        htmlFor="file"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Upload a File:
      </label>
      <div className="relative">
        <input
          type="file"
          id="file"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0] || null;
            if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
              alert('File size exceeds 5MB. Please choose a smaller file.');
              setFile(null);
              return;
            }
            setFile(selectedFile);
          }}
          className="hidden" 
        />
        <label
          htmlFor="file"
          className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
        >
          <span>
            {file
              ? `Selected File: ${file.name}` 
              : 'Click to Choose File'} 
          </span>
        </label>
      </div>
      {!file && (
        <p className="mt-2 text-xs text-gray-500">
          No file chosen. Please select a file under 5MB.
        </p>
      )}
    </div>
  );
}

export default FileUpload;
