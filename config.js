const API_BASE = 'https://haven-backend-ecru.vercel.app/api';

const authHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('haven_token')}`
});
