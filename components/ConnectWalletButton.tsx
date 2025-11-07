"use client";

import React, { useState } from "react";
import { useOnboarding } from "../context/OnboardingContext";

export default function ConnectWalletButton() {
  const { completeTask } = useOnboarding();
  const [connected, setConnected] = useState(false);

  function connect() {
    // placeholder: simulate connect
    setConnected(true);
    completeTask("connect_wallet");
  }

  return (
    <button
      onClick={connect}
      className={`px-3 py-1 rounded ${connected ? "bg-[rgba(91,77,244,0.9)] text-white" : "bg-[#5B4DF4] text-white"}`}
      aria-pressed={connected}
    >
      {connected ? "Wallet Connected" : "Connect Wallet"}
    </button>
  );
}
