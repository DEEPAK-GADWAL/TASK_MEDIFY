import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import styles from "./Appointment.module.css";

const AppointmentScheduler = ({ hospitalName }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const formatDate = (date) => {
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    localStorage.setItem("selectedDate", date.toDateString());
  };

  const handleTimeSlotChange = (slot) => {
    setSelectedTimeSlot(slot);
    localStorage.setItem("selectedTimeSlot", slot);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    navigate("/mybookings");
  };

  const timeSlots = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  return (
    <div className={styles.schedulerContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        onSlideChange={(swiper) =>
          handleDateChange(generateDates()[swiper.activeIndex])
        }
      >
        {generateDates().map((date, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${styles.dateItem} ${
                date.toDateString() === selectedDate.toDateString()
                  ? styles.dateItemSelected
                  : ""
              }`}
              onClick={() => handleDateChange(date)}
            >
              <div>{formatDate(date)}</div>
              <div className={styles.slotsAvailable}>
                {11 + index} Slots Available
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.timeSlots}>
        {Object.entries(timeSlots).map(([period, slots]) => (
          <div key={period} className={styles.timePeriod}>
            <div className={styles.periodLabel}>{period}</div>
            <div className={styles.slotButtons}>
              {slots.map((slot) => (
                <button
                  key={slot}
                  className={`${styles.timeSlotButton} ${
                    slot === selectedTimeSlot
                      ? styles.timeSlotButtonSelected
                      : ""
                  }`}
                  onClick={() => handleTimeSlotChange(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Appointment</DialogTitle>
        <DialogContent>
          <div>Date: {selectedDate.toDateString()}</div>
          <div>Time: {selectedTimeSlot}</div>
          {/* <div>Hospital: {hospitalName}</div> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AppointmentScheduler;
