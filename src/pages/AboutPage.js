import React from "react";

export default function AboutPage() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is subjected to React's useReducer Hook, context API and React
        Router Dom v6.
      </p>
      <p className="text-lg text-gray-400">
        Version: <span className="text-black">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Reference By:{" "}
        <span className="text-black">
          https://docs.github.com/en/rest/users/users
        </span>
      </p>
    </>
  );
}
