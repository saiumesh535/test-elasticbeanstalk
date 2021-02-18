import React, { useEffect, useState } from 'react';
import { Statuses, getStatusesAPI } from './api/api';


function App() {

  const [statuses, setStatuses] = useState<Statuses>({});

  async function getStatuses() {
    try {
      const statusesResp = await getStatusesAPI();
      setStatuses(statusesResp);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getStatuses();
  }, []);

  return (
    <div className="App">
      {Object.keys((statuses)).map((key) => (
        <div className="status">
          <p>Name: {key}</p>
          <p>Status: {statuses[key]}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
