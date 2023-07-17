import React from 'react';
import { useParams } from 'react-router-dom';
import AppartementDetails from '../components/AppartementDetails';
import './AppartementPage.css';

function AppartementPage() {
  const { id } = useParams();

  return (
    <div className="appartement__page">
      <AppartementDetails id={id} />
    </div>
  );
}

export default AppartementPage;