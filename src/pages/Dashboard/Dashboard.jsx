import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";

function Dashboard({ organizationName, totalCertificates, eventsData, coursesData }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const eventDropdownRef = useRef(null);
  const courseDropdownRef = useRef(null);

  // Close the event dropdown when user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        eventDropdownRef.current &&
        !eventDropdownRef.current.contains(event.target) &&
        selectedEvent !== null
      ) {
        setSelectedEvent(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedEvent]);

  // Close the course dropdown when user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        courseDropdownRef.current &&
        !courseDropdownRef.current.contains(event.target) &&
        selectedCourse !== null
      ) {
        setSelectedCourse(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedCourse]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{organizationName} Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Certificates */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Certificates</h3>
          <p className="text-3xl font-bold">{totalCertificates}</p>
        </div>

        {/* Certificates by Events Dropdown */}
        <div className="relative" ref={eventDropdownRef}>
          <button
            onClick={() => setSelectedEvent(eventsData && eventsData.length > 0 ? eventsData[0] : null)}
            className="bg-green-100 p-4 rounded-lg shadow-md w-full text-left focus:outline-none"
          >
            <h3 className="text-xl font-semibold mb-2">Certificates by Events</h3>
            <div className="flex items-center">
              <span className="mr-2">{selectedEvent ? selectedEvent.eventName : "Select an Event"}</span>
              <svg
                className={`h-4 w-4 transition-transform transform ${
                  selectedEvent ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
          <Transition
            show={selectedEvent !== null}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {(ref) => (
              <div ref={ref} className="absolute top-0 mt-16 w-full z-10 bg-white border rounded-lg shadow-md">
                {eventsData.map((event) => (
                  <div key={event.id} className="p-4 border-b">
                    <h4 className="text-lg font-semibold">{event.eventName}</h4>
                    <p className="text-gray-600">Total Certificates: {event.totalCertificates?event.totalCertificates:24}</p>
                  </div>
                ))}
              </div>
            )}
          </Transition>
        </div>

        {/* Certificates by Courses Dropdown */}
        <div className="relative" ref={courseDropdownRef}>
          <button
            onClick={() => setSelectedCourse(coursesData && coursesData.length > 0 ? coursesData[0] : null)}
            className="bg-yellow-100 p-4 rounded-lg shadow-md w-full text-left focus:outline-none"
          >
            <h3 className="text-xl font-semibold mb-2">Certificates by Courses</h3>
            <div className="flex items-center">
              <span className="mr-2">{selectedCourse ? selectedCourse.courseName : "Select a Course"}</span>
              <svg
                className={`h-4 w-4 transition-transform transform ${
                  selectedCourse ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
          <Transition
            show={selectedCourse !== null}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {(ref) => (
              <div ref={ref} className="absolute top-0 mt-16 w-full z-10 bg-white border rounded-lg shadow-md">
                {coursesData.map((course) => (
                  <div key={course.id} className="p-4 border-b">
                    <h4 className="text-lg font-semibold">{course.courseName}</h4>
                    <p className="text-gray-600">Total Certificates: {course.totalCertificates}</p>
                  </div>
                ))}
              </div>
            )}
          </Transition>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;