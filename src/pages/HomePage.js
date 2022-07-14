import React from "react";
import UserResult from "../components/users/UserResult";
import UserSearch from "../components/users/UserSearch";

export default function HomePage() {
  return (
    <div>
      <UserSearch />
      <UserResult />
    </div>
  );
}
