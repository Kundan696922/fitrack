import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<HomePage search={search} />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  );
}
