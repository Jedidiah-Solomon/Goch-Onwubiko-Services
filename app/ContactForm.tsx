"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrbkqabb");

  return (
    <div className="shadow-lg border-0 rounded-lg">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Send a Message
        </h3>

        {state.succeeded ? (
          <p className="text-green-600 mb-6 font-semibold">
            Thanks for your message! I&apos;ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Your first name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Your last name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-600 mt-1 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Social Media Management</option>
                <option>Ghost Writing</option>
                <option>Copywriting</option>
                <option>Proofreading</option>
                <option>Graphic Design</option>
                <option>Others..</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, goals, and timeline..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-600 mt-1 text-sm"
              />
            </div>

            {/* ✅ Safe error handling */}
            {Array.isArray(state.errors) && state.errors.length > 0 && (
              <p className="text-red-600 font-semibold">
                Please fix the errors above before submitting.
              </p>
            )}

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-md transition-colors disabled:opacity-50"
            >
              Send Message
            </button>
          </form>
        )}

        {state.succeeded && (
          <button
            onClick={() => window.location.reload()}
            className="mt-4 text-blue-600 underline"
          >
            Send another message
          </button>
        )}
      </div>
    </div>
  );
}
