import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './FlightBoard.css';

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

const FlightBoard: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFlights = async () => {
    try {
      const response = await axios.get('https://flight-status-mock.core.travelopia.cloud/flights');
      setFlights(response.data);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch flight data. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
    const intervalId = setInterval(fetchFlights, 30000); // Refresh every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <div>Loading flights...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="flight-board">
      <table>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>
                <Link to={`/flight/${flight.id}`}>{flight.flightNumber}</Link>
              </td>
              <td>{flight.airline}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{new Date(flight.departureTime).toLocaleString()}</td>
              <td className={`status ${flight.status.toLowerCase().replace(' ', '-')}`}>
                {flight.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightBoard;
