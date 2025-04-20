
function Appointmentbtn() {
  return (
    <div>
      <button
              type="button"
              className="relative appointmentBtn rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:text-white 
             ring-2 ring-white ring-offset-2 ring-offset-gray-800 outline-hidden
             active:scale-95 transition duration-100 transform"
            >
              <span className="absolute -inset-1.5" />
              <span className="">Get Appointment</span>
            </button>
    </div>
  )
}

export default Appointmentbtn
