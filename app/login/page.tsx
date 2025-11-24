'use client';
import { PiXLogoBold } from 'react-icons/pi'
import styles from './Login.module.scss'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebaseConfig';
import Link from 'next/link';
import Toast from '../components/Toast';

export const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [showToast, setShowToast] = useState<boolean>(false);
    const router = useRouter();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setShowToast(true);
            router.push("/");
        } catch (error) {
            setError("Failed to login. Pleadse check your email and password.");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
            <div className={styles.loginBox}>
                <PiXLogoBold className={`${styles.icon} ${styles.logo}`}></PiXLogoBold>
            </div>
            <h1 className={styles.header}>Sign in to X</h1>
            {error && <div className={styles.error}>{error}</div>}
            <form onSubmit={handleLogin} className={styles.form}>
                <input type="email" 
                placeholder="Phone, email address or username" 
                value={email} 
                onChange={(event) => setEmail(event.target.value)} 
                className={styles.input}></input>
                <input type="passwprd" 
                placeholder="Password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)} 
                className={styles.input}></input>
                <button type="submit" 
                className={styles.button}
                disabled={!email || !password}>Next</button>
            </form>
            <Link href="#forgotPassword">Forgot password?</Link>
            <div className={styles.signupLink}>Don't have an account? <Link href="/signup">Sign up</Link></div>
            {showToast && (
                <Toast message="Successfully signed in"
                onClose={() => setShowToast(false)} />
            )}
            </div>
        </div>
    )
};

export default LoginPage;

