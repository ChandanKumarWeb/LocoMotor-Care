"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"
import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

interface ValidationErrors {
  [key: string]: string
}

// Add this interface for country codes after the ValidationErrors interface
interface CountryCode {
  country: string
  code: string
  flag: string
}

// Add this to the FormData interface
interface FormData {
  fullName: string
  phone: string
  phoneCountryCode: string
  email: string
  country: string
  state: string
  city: string
  zip: string
  street: string
  date: string
  time: string
  message: string
}

// Add this constant after the FormData interface
const countryCodes: CountryCode[] = [
  { country: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { country: "Albania", code: "+355", flag: "🇦🇱" },
  { country: "Algeria", code: "+213", flag: "🇩🇿" },
  { country: "Argentina", code: "+54", flag: "🇦🇷" },
  { country: "Australia", code: "+61", flag: "🇦🇺" },
  { country: "Austria", code: "+43", flag: "🇦🇹" },
  { country: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { country: "Belgium", code: "+32", flag: "🇧🇪" },
  { country: "Brazil", code: "+55", flag: "🇧🇷" },
  { country: "Canada", code: "+1", flag: "🇨🇦" },
  { country: "China", code: "+86", flag: "🇨🇳" },
  { country: "Egypt", code: "+20", flag: "🇪🇬" },
  { country: "France", code: "+33", flag: "🇫🇷" },
  { country: "Germany", code: "+49", flag: "🇩🇪" },
  { country: "Greece", code: "+30", flag: "🇬🇷" },
  { country: "India", code: "+91", flag: "🇮🇳" },
  { country: "Indonesia", code: "+62", flag: "🇮🇩" },
  { country: "Italy", code: "+39", flag: "🇮🇹" },
  { country: "Japan", code: "+81", flag: "🇯🇵" },
  { country: "Mexico", code: "+52", flag: "🇲🇽" },
  { country: "Netherlands", code: "+31", flag: "🇳🇱" },
  { country: "New Zealand", code: "+64", flag: "🇳🇿" },
  { country: "Nigeria", code: "+234", flag: "🇳🇬" },
  { country: "Pakistan", code: "+92", flag: "🇵🇰" },
  { country: "Russia", code: "+7", flag: "🇷🇺" },
  { country: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { country: "Singapore", code: "+65", flag: "🇸🇬" },
  { country: "South Africa", code: "+27", flag: "🇿🇦" },
  { country: "South Korea", code: "+82", flag: "🇰🇷" },
  { country: "Spain", code: "+34", flag: "🇪🇸" },
  { country: "Sweden", code: "+46", flag: "🇸🇪" },
  { country: "Switzerland", code: "+41", flag: "🇨🇭" },
  { country: "Thailand", code: "+66", flag: "🇹🇭" },
  { country: "Turkey", code: "+90", flag: "🇹🇷" },
  { country: "UAE", code: "+971", flag: "🇦🇪" },
  { country: "UK", code: "+44", flag: "🇬🇧" },
  { country: "USA", code: "+1", flag: "🇺🇸" },
  { country: "Vietnam", code: "+84", flag: "🇻🇳" },
]

export default function AppointmentForm() {
  // Update the initial formData state to include phoneCountryCode
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    phoneCountryCode: "+1", // Will be updated by geo-detection
    email: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    street: "",
    date: "",
    time: "",
    message: "",
  })

  // Add this function after the useEffect hooks
  // Function to get country code by country name
  const getCountryCodeByCountry = (countryName: string): string => {
    const country = countryCodes.find((c) => c.country === countryName)
    return country?.code || "+91" // Default to India's code if not found
  }

  // Add this useEffect to sync country with phone country code
  useEffect(() => {
    const countryCode = getCountryCodeByCountry(formData.country)
    setFormData((prev) => ({ ...prev, phoneCountryCode: countryCode }))
  }, [formData.country])

  // Location data
  const [countries, setCountries] = useState<string[]>([])
  const [states, setStates] = useState<string[]>([])
  const [cities, setCities] = useState<string[]>([])

  // Time selection
  const [useCustomTime, setUseCustomTime] = useState(false)
  const [customTime, setCustomTime] = useState("")

  // Validation
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  type CountryApiCountry = { name: string }
  type CountriesApiResponse = { data: CountryApiCountry[] }
  type StateApiState = { name: string }
  type StatesApiResponse = { data: { states: StateApiState[] } }

  // Fetch countries
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/positions")
      .then((res) => res.json())
      .then((data: CountriesApiResponse) => setCountries(data.data.map((c) => c.name)))
      .catch(() => setCountries(["India", "United States", "United Kingdom", "Canada", "Australia"]))
  }, [])

  // Fetch states for selected country
  useEffect(() => {
    if (!formData.country) {
      setStates([])
      setFormData((prev) => ({ ...prev, state: "", city: "" }))
      return
    }
    fetch("https://countriesnow.space/api/v0.1/countries/states", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country: formData.country }),
    })
      .then((res) => res.json())
      .then((data: StatesApiResponse) => setStates(data.data.states.map((s) => s.name)))
      .catch(() => setStates([]))
    setFormData((prev) => ({ ...prev, state: "", city: "" }))
    setCities([])
  }, [formData.country])

  // Fetch cities for selected state
  useEffect(() => {
    if (!formData.state) {
      setCities([])
      setFormData((prev) => ({ ...prev, city: "" }))
      return
    }
    fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country: formData.country, state: formData.state }),
    })
      .then((res) => res.json())
      .then((data) => setCities(data.data))
      .catch(() => setCities([]))
    setFormData((prev) => ({ ...prev, city: "" }))
  }, [formData.state, formData.country])

  // Add geo-location detection for default country code
  useEffect(() => {
    const detectUserCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()
        if (data?.country_name && data?.country_calling_code) {
          // Find matching country in our list
          const matchedCountry = countryCodes.find(
            (cc) =>
              cc.country.toLowerCase().includes(data.country_name.toLowerCase()) ||
              cc.code === `+${data.country_calling_code}`,
          )
          if (matchedCountry) {
            setFormData((prev) => ({
              ...prev,
              phoneCountryCode: matchedCountry.code,
              country: data.country_name,
            }))
          }
        }
      } catch {
        console.log("Could not detect user location, using default")
      }
    }

    detectUserCountry()
  }, [])

  const today = new Date()
  const minDate = new Date(today)
  minDate.setDate(today.getDate() + 1)
  const maxDate = new Date()
  maxDate.setMonth(today.getMonth() + 3)
  const formatDate = (date: Date) => date.toISOString().split("T")[0]

  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Update the validatePhone function to handle country codes
  const validatePhone = (phone: string, countryCode: string): boolean => {
    // Remove the country code from validation if it's at the beginning of the phone
    const phoneWithoutCode = phone.startsWith(countryCode) ? phone.substring(countryCode.length).trim() : phone.trim()

    // Basic validation for phone numbers - just check if it has digits
    return /^\d{5,15}$/.test(phoneWithoutCode.replace(/[\s\-()]/g, ""))
  }

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {}
    const missingFields: string[] = []

    // Required field validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
      missingFields.push("Full Name")
    }

    // Update the validateForm function's phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
      missingFields.push("Phone Number")
    } else if (!validatePhone(formData.phone, formData.phoneCountryCode)) {
      newErrors.phone = "Please enter a valid phone number"
    }

   if (formData.email.trim() && !validateEmail(formData.email)) {
  newErrors.email = "Please enter a valid email address"
}

    if (!formData.street.trim()) {
      newErrors.street = "Street address is required"
      missingFields.push("Street Address")
    }

    if (!formData.country) {
      newErrors.country = "Country is required"
      missingFields.push("Country")
    }

    if (!formData.state) {
      newErrors.state = "State is required"
      missingFields.push("State")
    }

    if (!formData.city) {
      newErrors.city = "City is required"
      missingFields.push("City")
    }

    if (!formData.zip.trim()) {
      newErrors.zip = "Zip code is required"
      missingFields.push("Zip Code")
    }

    if (!formData.date) {
      newErrors.date = "Date is required"
      missingFields.push("Appointment Date")
    }

    const finalTime = useCustomTime ? customTime : formData.time
    if (!finalTime) {
      newErrors.time = "Time is required"
      missingFields.push("Appointment Time")
    }

    if (missingFields.length > 0) {
      newErrors.general = `You have not filled the following fields: ${missingFields.join(", ")}`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    const finalTime = useCustomTime ? customTime : formData.time

    // Update the handleSubmit function to combine country code with phone
    const submissionData = {
      access_key: "d12ae869-f420-43f0-a23e-b52f9670df4e",
      subject: "New Appointment Request",
      ...formData,
      phone: formData.phone.startsWith(formData.phoneCountryCode)
        ? formData.phone
        : `${formData.phoneCountryCode}${formData.phone}`,
      time: finalTime,
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()
      if (result.success) {
        alert("Appointment request sent successfully!")
        alert(`Appointment booked for ${formData.date} at ${finalTime}`)

        // Reset form
        setFormData({
          fullName: "",
          phone: "",
          phoneCountryCode: formData.phoneCountryCode, // Keep the detected country code
          email: "",
          country: formData.country, // Keep the detected country
          state: "",
          city: "",
          zip: "",
          street: "",
          date: "",
          time: "",
          message: "",
        })
        setCustomTime("")
        setUseCustomTime(false)
        setErrors({})
      } else {
        alert("Failed to send appointment request.")
      }
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-neutral-900 shadow-md rounded-lg space-y-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Book an Appointment</h2>

      {/* Full Name */}
      <div className="flex flex-col">
        <label className="font-medium mb-1">Full Name *</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          placeholder="Enter your full name"
          className={`w-full p-2 border rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 ${
            errors.fullName ? "border-red-500" : "border-gray-300 dark:border-neutral-700"
          }`}
        />
        {errors.fullName && <span className="text-red-500 text-sm mt-1">{errors.fullName}</span>}
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {/* Replace the phone input in the form with this new implementation */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Contact Number *</label>
          <div className="flex gap-2">
            <select
              value={formData.phoneCountryCode}
              onChange={(e) => handleInputChange("phoneCountryCode", e.target.value)}
              className={`w-32 p-2 border-y border rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 text-sm ${
                errors.phone ? "border-red-500" : "border-gray-300 dark:border-neutral-700"
              }`}
            >
              {countryCodes.map((cc) => (
  <option key={cc.country + cc.code} value={cc.code}>
    {cc.flag} {cc.country} {cc.code}
  </option>
))}
            </select>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Phone number"
              className={`flex-1 p-2 border-y border rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 ${
                errors.phone ? "border-red-500" : "border-gray-300 dark:border-neutral-700"
              }`}
            />
          </div>
          {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1">Email Address </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter your email address"
            className={`w-full p-2 border rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 ${
              errors.email ? "border-red-500" : "border-gray-300 dark:border-neutral-700"
            }`}
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <label className="font-medium">Street Address *</label>
        <input
          type="text"
          value={formData.street}
          onChange={(e) => handleInputChange("street", e.target.value)}
          placeholder="Enter your street address"
          className={`w-full p-2 border rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 ${
            errors.street ? "border-red-500" : "border-gray-300 dark:border-neutral-700"
          }`}
        />
        {errors.street && <span className="text-red-500 text-sm mt-1">{errors.street}</span>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Country *</label>
            <select
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              className={`w-full p-2 border rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 ${
                errors.country ? "border-red-500" : "border-gray-300 dark:border-neutral-700"
              }`}
            >
              <option value="">Select country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && <span className="text-red-500 text-sm mt-1">{errors.country}</span>}
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">State *</label>
            <select
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              className={`w-full p-2 border rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 ${
                errors.state ? "border-red-500" : "border-gray-300 dark:border-neutral-700"
              }`}
            >
              <option value="">Select state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && <span className="text-red-500 text-sm mt-1">{errors.state}</span>}
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">City *</label>
            <select
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              disabled={!formData.state}
              className={`w-full p-2 border rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 ${
                errors.city ? "border-red-500" : "border-gray-300 dark:border-neutral-700"
              } ${!formData.state ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <option value="">Select city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && <span className="text-red-500 text-sm mt-1">{errors.city}</span>}
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Zip Code *</label>
            <input
              type="text"
              value={formData.zip}
              onChange={(e) => handleInputChange("zip", e.target.value)}
              placeholder="Enter your zip code"
              className={`w-full p-2 border rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 ${
                errors.zip ? "border-red-500" : "border-gray-300 dark:border-neutral-700"
              }`}
            />
            {errors.zip && <span className="text-red-500 text-sm mt-1">{errors.zip}</span>}
          </div>
        </div>
      </div>

      {/* Date */}
      <div className="flex flex-col gap-2">
        <label className="font-medium">Select a date *</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => {
            handleInputChange("date", e.target.value)
            handleInputChange("time", "")
            setCustomTime("")
            setUseCustomTime(false)
          }}
          min={formatDate(minDate)}
          max={formatDate(maxDate)}
          className={`w-full p-2 border rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 ${
            errors.date ? "border-red-500" : "border-gray-300 dark:border-neutral-700"
          }`}
        />
        {errors.date && <span className="text-red-500 text-sm mt-1">{errors.date}</span>}
      </div>

      {/* Time */}
      {formData.date && (
        <>
          <div className="flex flex-wrap gap-2">
            <label className="w-full font-medium mb-1">Select a time *</label>
            {timeSlots.map((time, idx) => (
              <motion.button
                key={time}
                type="button"
                disabled={useCustomTime}
                onClick={() => {
                  handleInputChange("time", time)
                  setUseCustomTime(false)
                  setCustomTime("")
                }}
                className={`px-4 py-2 rounded border transition ${
                  formData.time === time && !useCustomTime
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-neutral-700 hover:bg-blue-100 dark:hover:bg-blue-900"
                } ${useCustomTime ? "opacity-50 cursor-not-allowed" : ""}`}
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
                setUseCustomTime(e.target.checked)
                handleInputChange("time", "")
                setCustomTime("")
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
                  value={customTime ? dayjs(customTime, "HH:mm") : null}
                  onChange={(value) => setCustomTime(value ? value.format("HH:mm") : "")}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      className:
                        "bg-white rounded text-gray-900 dark:bg-neutral-800 dark:text-blue-100 border border-gray-300 dark:border-neutral-700",
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
          )}

          {errors.time && <span className="text-red-500 text-sm mt-1">{errors.time}</span>}
        </>
      )}

      {/* Message */}
      <div className="flex flex-col">
        <label className="font-medium mb-1">What services are you interested in?</label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Let us know the services you're looking for..."
          className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
        />
      </div>
{/* General Error Message */}
      {errors.general && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div className="text-red-700 dark:text-red-300 text-sm">{errors.general}</div>
        </div>
      )}
      {/* Submit */}
<div className="flex justify-center">
  <motion.button
    type="submit"
    disabled={isSubmitting}
    whileTap={{ scale: 0.96 }}
    className={`relative flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200
      ${
        isSubmitting
          ? "bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed shadow-none"
          : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl"
      }
      text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`}
  >
    {isSubmitting && (
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    )}
    {isSubmitting ? "Submitting..." : "Submit Appointment"}
  </motion.button>
</div>
    </motion.form>
  )
}
