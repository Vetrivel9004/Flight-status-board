import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './FlightDetails.css';

interface FlightDetail {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  status: string;
  gate: string;
  terminal: string;
  aircraft: string;
}

const FlightDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [flight, setFlight] = useState<FlightDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await axios.get(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`);
        setFlight(response.data);
        setError(null);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch flight details. Please try again later.');
        setLoading(false);
      }
    };

    fetchFlightDetails();
  }, [id]);

  if (loading) return <div>Loading flight details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!flight) return <div>No flight details found.</div>;

  return (
    <div className="flight-details">
      <Link to="/" className="back-link">← Back to Flight Board</Link>
      <h2>Flight Details</h2>
      <div className="details-grid">
        <div className="detail-item">
          <strong>Flight Number:</strong> {flight.flightNumber}
        </div>
        <div className="detail-item">
          <strong>Airline:</strong> {flight.airline}
        </div>
        <div className="detail-item">
          <strong>Origin:</strong> {flight.origin}
        </div>
        <div className="detail-item">
          <strong>Destination:</strong> {flight.destination}
        </div>
        <div className="detail-item">
          <strong>Departure Time:</strong> {new Date(flight.departureTime).toLocaleString()}
        </div>
        <div className="detail-item">
          <strong>Arrival Time:</strong> {new Date(flight.arrivalTime).toLocaleString()}
        </div>
        <div className="detail-item">
          <strong>Status:</strong> <span className={`status ${flight.status.toLowerCase().replace(' ', '-')}`}>{flight.status}</span>
        </div>
        <div className="detail-item">
          <strong>Gate:</strong> {flight.gate}
        </div>
        <div className="detail-item">
          <strong>Terminal:</strong> {flight.terminal}
        </div>
        <div className="detail-item">
          <strong>Aircraft:</strong> {flight.aircraft}
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
