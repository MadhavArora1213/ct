import React from 'react';

const STATES = ['California', 'New York', 'Texas', 'Florida', 'Illinois'];
const CAMPUSES = ['Main Campus', 'City Campus', 'Downtown Campus'];
const COURSES = ['Computer Science', 'Business', 'Engineering', 'Medicine'];

const SignUpForm = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md text-black">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Enquire Now</h2>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-black"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-black"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-black"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-400">
            <option value="">Select State</option>
            {STATES.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <select className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-400">
            <option value="">Select Campus</option>
            {CAMPUSES.map(campus => (
              <option key={campus} value={campus}>{campus}</option>
            ))}
          </select>
        </div>
        <div>
          <select className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-400">
            <option value="">Select Course</option>
            {COURSES.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;