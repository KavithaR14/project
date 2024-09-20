import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Booknow/TimeSlotSelection.css';
import { FaCalendarAlt, FaClock } from 'react-icons/fa'; // Import icons

const TimeSlotSelection = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const availableSlots = {
        '26 Aug': ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '03:00 PM'],
        '27 Aug': ['12:00 PM', '02:00 PM', '04:00 PM', '05:00 PM'],
        '28 Aug': ['08:30 AM', '10:30 AM', '12:30 PM'],
        '29 Aug': ['09:15 AM', '11:45 AM', '03:15 PM'],
        '30 Aug': ['08:00 AM', '09:30 AM', '11:30 AM', '02:00 PM']
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedSlot(null);
    };

    const handleConfirmAppointment = () => {
        // Navigate to the Login page
        navigate('/login');
    };

    return (
        <div className="time-slot-selection">
            <h2 className="heading">Select a Time Slot</h2>

            {/* Date Selection */}
            <div className="date-selection">
                {Object.keys(availableSlots).map((date, index) => (
                    <div className="date-card" key={index}>
                        <button 
                            className={`date-button ${selectedDate === date ? 'selected' : ''}`}
                            onClick={() => handleDateChange(date)}
                        >
                            <FaCalendarAlt /> {date}
                        </button>
                    </div>
                ))}
            </div>

            {/* Time Slot Selection */}
            <div className="slot-section">
                {selectedDate ? (
                    <>
                        <h3 className="slot-heading">Available Slots for {selectedDate}</h3>
                        <div className="time-slots">
                            {availableSlots[selectedDate].map((time, index) => (
                                <button 
                                    key={index} 
                                    className={`time-button ${selectedSlot === time ? 'selected' : ''}`}
                                    onClick={() => setSelectedSlot(time)}
                                >
                                    <FaClock /> {time}
                                </button>
                            ))}
                        </div>
                        <p className="selected-info">
                            {selectedSlot ? `Selected Time: ${selectedSlot}` : "Please select a time"}
                        </p>
                        {selectedSlot && (
                            <button className="confirm-button" onClick={handleConfirmAppointment}>
                                Confirm Appointment
                            </button>
                        )}
                    </>
                ) : (
                    <p className="select-info">Please select a date to view available slots</p>
                )}
            </div>
        </div>
    );
};

export default TimeSlotSelection;
