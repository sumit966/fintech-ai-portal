import { useState } from 'react';
import { useRouter } from 'next/router';
import { Shield, Lock, Mail } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@fintech.com' && password === 'Fintech2025') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      router.push('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8"><Shield className="w-12 h-12 text-blue-400 mx-auto mb-2" /><h1 className="text-2xl font-bold text-white">Fintech AI Portal</h1><p className="text-gray-400">Secure Access</p></div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div><label className="block text-gray-400 mb-1">Email</label><div className="relative"><Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" placeholder="admin@fintech.com" required /></div></div>
          <div><label className="block text-gray-400 mb-1">Password</label><div className="relative"><Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} /><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" placeholder="••••••" required /></div></div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" className="w-full py-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition">Sign In</button>
        </form>
        <p className="text-center text-gray-500 text-xs mt-4">Demo: admin@fintech.com / Fintech2025</p>
      </div>
    </div>
  );
}
