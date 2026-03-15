const API_BASE = 'https://haven-backend-production-758b.up.railway.app/api';

const authHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('haven_token')}`
});
