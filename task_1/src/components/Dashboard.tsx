import React, { useState, useEffect } from "react";

function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    // Create a new worker instance
    const worker = new Worker(
      new URL("../workers/calculator.worker.ts", import.meta.url),
      { type: "module" }
    );

    // Set up message handler
    worker.onmessage = (event) => {
      setD(event.data);
      worker.terminate(); // Clean up the worker when done
    };

    // Start the computation
    worker.postMessage(null);

    // Clean up worker on component unmount
    return () => {
      worker.terminate();
    };
  }, []);

  return <div>{d}</div>;
}

export default Dashboard;
