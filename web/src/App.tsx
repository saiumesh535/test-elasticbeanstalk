import React, { useEffect, useState } from 'react';
import { Statuses, getStatusesAPI } from './api/api';


function App() {

  const [statuses, setStatuses] = useState<Statuses[]>([]);

  async function getStatuses() {
    try {
      const statuses = await getStatusesAPI();
      setStatuses(statuses);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getStatuses();
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
