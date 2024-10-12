import React, { useState } from 'react';
import NavBar from './NavBar';
import './Account.css'; // Link your CSS file here

const Account = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // For editing fields

  const [userDetails, setUserDetails] = useState({
    name: 'Amritjot Kaur',
    email: 'amritjot@example.com',
    phone: '+1234567890',
    address: '123 Example St, City, Country',
    dateOfBirth: '1995-10-04',
    role: 'Faculty',
  });

  const [designationDetails, setDesignationDetails] = useState({
    facultyUserId: '',
    startDate: '',
    endDate: '',
  });

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDesignationChange = (e) => {
    const { name, value } = e.target;
    setDesignationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Role Designation Details:', designationDetails);
    // Submit the designationDetails to the backend or API
    toggleFormVisibility();
  };

  return (
    <div className="account-page">
      <NavBar />

      <div className="account-info-box">
        <h2 className="account-heading">PROFILE</h2>
        <div className="user-details-box">
    <div className="field-wrapper">
        <p>NAME</p>
        {isEditing ? (
            <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
            />
        ) : (
            <div className="value">{userDetails.name}</div>
        )}
    </div>

    <div className="field-wrapper">
        <p>EMAIL</p>
        {isEditing ? (
            <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
            />
        ) : (
            <div className="value">{userDetails.email}</div>
        )}
    </div>

    <div className="field-wrapper">
        <p>PHONE NUMBER</p>
        {isEditing ? (
            <input
                type="text"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
            />
        ) : (
            <div className="value">{userDetails.phone}</div>
        )}
    </div>

    <div className="field-wrapper">
        <p>ADDRESS</p>
        {isEditing ? (
            <input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
            />
        ) : (
            <div className="value">{userDetails.address}</div>
        )}
    </div>

    <div className="field-wrapper">
        <p>DATE OF BIRTH</p>
        <div className="value">{new Date(userDetails.dateOfBirth).toLocaleDateString()}</div>
    </div>

    <div className="field-wrapper">
        <p>ROLE</p>
        <div className="value">{userDetails.role}</div>
    </div>

    <div className='button-section'>
        <button className="edit-btn" onClick={toggleEditing}>
            {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="designate-role-btn" onClick={toggleFormVisibility}>
            Designate
        </button>
    </div>
</div>

    
      </div>

  
      {isFormVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={toggleFormVisibility}>&times;</span>
            <form className="designation-form-box" onSubmit={handleSubmit}>
              <h3 className="form-heading">DESIGNATE</h3>
              <div className="form-group">
                <label htmlFor="facultyUserId">USER ID</label>
                <input
                  type="text"
                  id="facultyUserId"
                  name="facultyUserId"
                  value={designationDetails.facultyUserId}
                  onChange={handleDesignationChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="startDate">START DATE</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={designationDetails.startDate}
                  onChange={handleDesignationChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="endDate">END DATE</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={designationDetails.endDate}
                  onChange={handleDesignationChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
