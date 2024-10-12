import React from "react";
import NavBar from "./NavBar";
import Calendar from "react-calendar";
import './MainPage.css';
const MainPage = () => {
    return(
        <div className="main-page">
            <NavBar/>
            <div className="calendar-container">
                {/* <Calendar /> Add the calendar component here */}
            </div>
        </div>
    );
};

export default MainPage;