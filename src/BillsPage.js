import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BillsPage = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your API key and endpoint
  const apiKey = 'UtI71qSuQv8K1RRLEbR5pzQbBSi2zcGWA6BcL9aH';
  const endpoint = 'https://api.example.com/bills'; // Replace with the actual API endpoint

  // Fetch data function
  const fetchBills = async () => {
    try {
      const response = await axios.get(endpoint, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });
      setBills(response.data); // Store the data in state
    } catch (err) {
      setError(err.message); // Handle any errors
    } finally {
      setLoading(false); // Stop loading once data is fetched
    }
  };

  useEffect(() => {
    fetchBills();
    const intervalId = setInterval(fetchBills, 60000); // Update every 60 seconds
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading text while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error if the fetch fails
  }

  return (
    <div>
      <h1>Live Legislation Bills Tracking</h1>
      <ul>
        {bills.map((bill, index) => (
          <li key={index}>
            <h2>{bill.title}</h2>
            <p>{bill.description}</p>
            <p><strong>Status:</strong> {bill.status}</p> {/* Display the current status of the bill */}
            <a href={bill.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillsPage;