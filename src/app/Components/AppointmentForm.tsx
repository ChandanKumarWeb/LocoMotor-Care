"use client";

import { useState } from "react";

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [useCustomTime, setUseCustomTime] = useState(false);
  const [customTime, setCustomTime] = useState("");
  // Calculate today's date and max date (3 months ahead)
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 3);

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const timeSlots = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Appointment booked for ${selectedDate} at ${selectedTime}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-neutral-900 shadow-md rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
        Book an Appointment
      </h2>

      {/* Full Name Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1">First Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1">Last Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            required
          />
        </div>
      </div>

      {/* Contact & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1">Contact Number</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1">Email Address</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
            required
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <label className="font-medium">Street Address</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1">City</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">State</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Zip Code</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
        </div>
      </div>

      {/* Date Picker */}
      <div className="flex flex-col gap-2">
        <label className="font-medium">Select a date</label>
        <input
          type="date"
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
          required
        />
      </div>

      {/* Time Buttons */}
      {selectedDate && (
        <>
          <div className="flex flex-wrap gap-2">
            <label className="w-full font-medium mb-1">Select a time</label>
            {timeSlots.map((time) => (
              <button
                type="button"
                key={time}
                onClick={() => {
                  setSelectedTime(time);
                  setUseCustomTime(false);
                  setCustomTime("");
                }}
                disabled={useCustomTime}
                className={`px-4 py-2 rounded border transition
                  ${
                    selectedTime === time && !useCustomTime
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-neutral-700 hover:bg-blue-100 dark:hover:bg-blue-900"
                  }
                  ${useCustomTime ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                {`${time}:00`.replace(":00:00", "")}
              </button>
            ))}
          </div>
          {/* Custom Time Checkbox */}
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
            <label
              htmlFor="customTime"
              className="text-gray-900 dark:text-gray-100"
            >
              I want to select a custom time
            </label>
          </div>
          {/* Custom Time Picker */}
          {useCustomTime && (
            <div className="mt-2">
              <input
                type="time"
                value={customTime}
                onChange={(e) => setCustomTime(e.target.value)}
                className="p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
                required
              />
            </div>
          )}
        </>
      )}

      {/* Message Box */}
      <div className="flex flex-col">
        <label className="font-medium mb-1">
          What services are you interested in?
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
          rows={4}
          placeholder="Let us know the services you're looking for..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          disabled={!selectedDate || !(selectedTime || customTime)}
        >
          Submit Appointment
        </button>
      </div>
    </form>
  );
}
