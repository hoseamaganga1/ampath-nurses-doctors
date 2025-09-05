import React, { useEffect, useState } from 'react';
import api from './axiosapi';
import { clearToken } from './axiosutils';

function Dashboard({ onLogout }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('http://localhost:4000/uploadedImages')
      .then((res) => setData(res.data))
      .catch(() => {
        clearToken();
        onLogout();
      });
  }, [onLogout]);

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => { clearToken(); onLogout(); }}>Logout</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Dashboard;