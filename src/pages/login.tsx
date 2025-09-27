// pages/login
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
    const [tokenInput, setTokenInput] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: tokenInput }),
        });

        if (res.ok) {
            toast.success('Access granted');
            router.push('/blog/admin');
        } else {
            toast.error('Invalid token');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="password"
                value={tokenInput}
                onChange={e => setTokenInput(e.target.value)}
                placeholder="Enter admin token"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
}