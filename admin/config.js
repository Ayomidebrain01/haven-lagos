const API_BASE = 'https://haven-backend-t7o8.onrender.com/api';

const authHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('haven_token')}`
});
