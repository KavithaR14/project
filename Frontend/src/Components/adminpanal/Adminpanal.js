import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // Must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Adminpanal.css'; // Your custom styles

const AdminPanel = () => {
  const [events] = useState([
    { title: 'Long Event', start: '2024-09-07', end: '2024-09-10' },
    { title: 'Conference', start: '2024-09-11', end: '2024-09-13' },
    { title: 'Birthday Party', start: '2024-09-13T07:00:00' }
  ]);

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-profile">
          <img src="images/doctor image.jpg" alt="Doctor Profile" className="profile-img" />
          <h3>Dr. John</h3>
          <p>Welcome</p>
        </div>
        <div className="today-report">
          <div>16 Patients</div>
          <div>20 Pending</div>
          <div>4 Visits</div>
        </div>
        <nav className="admin-nav">
          <ul>
            <li><button onClick={() => alert('Navigate to Dashboard')}>Dashboard</button></li>
            <li><button onClick={() => alert('Navigate to Doctor Schedule')}>Doctor Schedule</button></li>
            <li><button onClick={() => alert('Navigate to Book Appointment')}>Book Appointment</button></li>
            <li><button onClick={() => alert('Navigate to Doctors')}>Doctors</button></li>
            <li><button onClick={() => alert('Navigate to Patients')}>Patients</button></li>
            <li><button onClick={() => alert('Navigate to Payments')}>Payments</button></li>
            <li><button onClick={() => alert('Navigate to Reports')}>Reports</button></li>
            <li><button onClick={() => alert('Navigate to Settings')}>Settings</button></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="admin-content">
        <header className="admin-header">
          <h2>Doctor Schedule</h2>
          <button className="add-event-btn">+ Events</button>
        </header>

        <div id="calendar">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
