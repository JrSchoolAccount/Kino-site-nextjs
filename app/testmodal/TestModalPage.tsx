import React from 'react';
import BookTicket from '../components/bookModal';

const TestModalPage: React.FC = () => {
  const mockProps = {
    open: true, // Set open to true to show the modal
    onClose: () => {}, // Provide a dummy function for onClose
    onConfirm: () => {}, // Provide a dummy function for onConfirm
  };
  return (
    <div>
      <h1>Test Modal Page</h1>
      <BookTicket {...mockProps} />
    </div>
  );
};

export default TestModalPage;
