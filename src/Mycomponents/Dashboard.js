
import React from 'react';

const Dashboard = (props) => {

  // handle click event of logout button
  const handleLogout = () => {
    props.history.push('/Login');
  }

  return (
    <div>
      Welcome User!  <br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;