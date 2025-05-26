"use client";

import { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import type { CountryCode } from "libphonenumber-js";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import "../Css/Appointform.css";
import { motion } from "framer-motion";

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [useCustomTime, setUseCustomTime] = useState(false);
  const [customTime, setCustomTime] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [defaultCountry, setDefaultCountry] = useState<CountryCode>('IN');
  // Geo-IP detection
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data?.country_code) {
          setDefaultCountry(data.country_code);
        }
      } catch (err) {
        console.error("Country fetch failed", err);
        setDefaultCountry("US");
      }
    };

    fetchCountry();
  }, []);

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 3);
  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const timeSlots = [
    "10:00", "11:00", "12:00 PM", "1:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timeToShow = useCustomTime ? customTime : selectedTime;
    alert(`Appointment booked for ${selectedDate} at ${timeToShow}`);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-neutral-900 shadow-md rounded-lg space-y-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
        Book an Appointment
      </h2>

      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            required
            className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            required
            className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1">Contact Number</label>
          <PhoneInput
  value={phone}
  onChange={setPhone}
  defaultCountry={defaultCountry}
  international
  className="!w-full"
  inputProps={{
    placeholder: "Enter phone number",
  }}
/>
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <label className="font-medium">Street Address</label>
        <input
          type="text"
          placeholder="Enter your street address"
          required
          className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              required
              className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">State</label>
            <input
              type="text"
              placeholder="Enter your state"
              required
              className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Zip Code</label>
            <input
              type="text"
              placeholder="Enter your zip code"
              required
              className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Date */}
      <div className="flex flex-col gap-2">
        <label className="font-medium">Select a date</label>
        <input
          type="date"
          required
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            setSelectedTime("");
            setCustomTime("");
            setUseCustomTime(false);
          }}
          min={formatDate(minDate)}
          max={formatDate(maxDate)}
          className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
        />
      </div>

      {/* Time */}
      {selectedDate && (
        <>
          <div className="flex flex-wrap gap-2">
            <label className="w-full font-medium mb-1">Select a time</label>
            {timeSlots.map((time, idx) => (
              <motion.button
                key={time}
                type="button"
                disabled={useCustomTime}
                onClick={() => {
                  setSelectedTime(time);
                  setUseCustomTime(false);
                  setCustomTime("");
                }}
                className={`px-4 py-2 rounded border transition
      ${selectedTime === time && !useCustomTime
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-neutral-700 hover:bg-blue-100 dark:hover:bg-blue-900"}
      ${useCustomTime ? "opacity-50 cursor-not-allowed" : ""}
    `}
                whileHover={!useCustomTime ? { scale: 1.08 } : {}}
                whileTap={!useCustomTime ? { scale: 0.96 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: idx * 0.03 }}
              >
                {time}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center mt-2">
            <input
              id="customTime"
              type="checkbox"
              checked={useCustomTime}
              onChange={(e) => {
                setUseCustomTime(e.target.checked);
                setSelectedTime("");
                setCustomTime("");
              }}
              className="mr-2"
            />
            <label htmlFor="customTime" className="text-gray-900 dark:text-gray-100">
              I want to select a custom time
            </label>
          </div>

          {useCustomTime && (
            <div className="mt-4">
              <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">Select Custom Time</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  value={customTime ? dayjs(customTime, 'HH:mm') : null}
                  onChange={(value) => setCustomTime(value ? value.format('HH:mm') : '')}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      className: "bg-white rounded text-gray-900 dark:bg-neutral-800  dark:text-blue-100 border border-gray-300 dark:border-neutral-700"
                    }
                  }}
                />
              </LocalizationProvider>
            </div>
          )}

        </>
      )}

      {/* Message */}
      <div className="flex flex-col">
        <label className="font-medium mb-1">What services are you interested in?</label>
        <textarea
          rows={4}
          placeholder="Let us know the services you're looking for..."
          className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
        />
      </div>

      {/* Submit */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          disabled={!selectedDate || !(selectedTime || customTime)}
        >
          Submit Appointment
        </button>
      </div>
    </motion.form>
  );
}
