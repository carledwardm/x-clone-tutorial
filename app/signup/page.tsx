'use client';
import { PiXLogoBold } from 'react-icons/pi';
import styles from './Signup.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const SignUpPage = () => {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const router = useRouter();
    const handleSignUp = () => {

    }

    return(
    <section className={styles.signupContainer}>
        <div className={styles.logoContainer}>
            <PiXLogoBold className={styles.logo} />
        </div>
        <h1 className={styles.title}>Join X Today</h1>
        <form onSubmit={handleSignUp} className={styles.form}>
            <input className={styles.input} type="text" placeholder="Full Name" value={fullName} onChange={(event) => setFullName(event.target.value)} />
            <input className={styles.input} type="text" placeholder="User Name" value={userName} onChange={(event) => setUserName(event.target.value)} />
            <input className={styles.input} type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <input className={styles.input} type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>{success}</p>}
            <button type="submit" className={styles.button} disabled={isSubmitting}>
                {isSubmitting ? "Signing Up..." : "Create Account"}
            </button>
        </form>
        <p className={styles.footerText}>
            By signing up, you agree to the{" "}
            <Link href="termsofservice" className={styles.link}>
            Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="privacypolicy" className={styles.link}>
            Privacy Policy
            </Link>
            , including{" "}
            <Link href="cookieuse" className={styles.link}>
            Cookie Use
            </Link>
            .
        </p>
        <p className={styles.footerText}>
            Have an account already?{" "}
            <Link href="/login" className={styles.link}>
            Log in
            </Link>
        </p>
    </section>
    )
}

export default SignUpPage;