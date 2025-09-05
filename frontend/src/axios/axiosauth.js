import api from './axiosapi';

export async function login(email, password) {
  const res = await api.post('http://localhost:4000/admin/login', { email, password });
  return res.data.token;
}