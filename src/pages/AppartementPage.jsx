import React from 'react';
import { useParams } from 'react-router-dom';
import AppartementDetails from '../components/AppartementDetails';
import Main from "../components/Main"

function AppartementPage() {
  const { id } = useParams();

  return (
    <Main>
      <div className="appartement__page">
        <AppartementDetails id={id} />
      </div>
    </Main>
  );
}

export default AppartementPage;