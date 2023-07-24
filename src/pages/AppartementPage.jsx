import React from 'react';
import { useParams } from 'react-router-dom';
import AppartementDetails from '../components/AppartementDetails';

function AppartementPage() {
  const { id } = useParams();

  return (
    <div className="appartement__page">
      <AppartementDetails id={id} />
    </div>
  );
}

export default AppartementPage;