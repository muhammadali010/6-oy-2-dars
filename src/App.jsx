import React from 'react';
import './components/User/index.css';
import data from './assets/data.json'
const UserCard = ({ data }) => (
    <div className="card">
        <img src={data.image} alt={`${data.firstName} ${data.lastName}`} />
        <h2>{data.firstName} {data.lastName}</h2>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Address:</strong> {data.address.region}, {data.address.zip}</p>
        <p><strong>Cars:</strong> {data.cars.join(', ') || 'No cars'}</p>
    </div>
);

const App = () => (
    <div className="container">
        {data.map(data => (
            <UserCard key={data.id} data={data} />
        ))}
    </div>
);

export default App;
