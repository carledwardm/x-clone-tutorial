import { useEffect, useState } from 'react';
import styles from './MainContent.module.scss';
import { useAuth } from '@/app/context/AuthContext';
import { addDoc, collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { auth, db } from '@/lib/firebaseConfig';

const MainContent = () => {
    const [tweets, setTweets] = useState<any[]>([]);
    const [newTweet, setNewTweet] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState("For you");
    const [fullName, setFullName] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const { user } = useAuth();

    const avatarUrl = user
    ? "https://randomuser.me/api/portraits/men/8.jpg"
    :null;

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const q = query(collection(db, "tweets"), orderBy("createdAt", "desc"));
                const querySnapShot = await getDocs(q);
                const tweetsData = querySnapShot.docs.map((doc) => {
                    const data = doc.data();
                    const date = new Date(
                        data.createdAt.seconds * 1000 +
                        data.createdAt.nanoseconds / 1000000,
                    );
                    return {
                        id: doc.id,
                        ...data,
                        time: data.toLocaleDateString("en=US", {
                        year:"numeric",
                        month: "long",
                        day: "numeric",
                        }),
                    };
                });
                setTweets(tweetsData);
                } catch (error) {
                    console.error("Error fetching tweets:", error);
                }
            };

            const fetchUserData = async () => {
                const user = auth.currentUser;
                if (user) {
                    const userDoc = await getDoc(doc(db, "users", user.uid));
                    if (userDoc.exists()) {
                        const data = userDoc.data();
                        setFullName(data.fullName);
                        setUserName(data.userName);
                    }
                }
            };

            fetchTweets();
            fetchUserData();
        }, []);

        const handleMenuClock = (menu: string) => {
            setActiveMenu(menu);
        };

        const handleSubmit = async (event: React.FormEvent) => {
            event.preventDefault();

            if (newTweet.trim().length > 1 && user) {
                try {
                    setIsSubmitting(true);
                    const tweetData = {
                        content: newTweet,
                        userId: user.uid,
                        createdAt: new Date(),
                    };
                    const docRef = await addDoc(collection(db, "tweets"), tweetData);
                    const date = new Date();
                    const newTweetData = {
                        id: docRef.id,
                        ...tweetData,
                        time: date.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }),
                    };
                    setTweets([newTweetData, ...tweets]);
                    setNewTweet("");
                } catch (error) {
                    console.error("Error submitting tweet:", error);
                } finally {
                    setIsSubmitting(false)
                } } else {
                    console.log("Tweet not submitted. Missing content or user");
                }
            }

            const handleDelete = (tweetId: string) => {
                setTweets((prevTweets) => 
                    prevTweets.filter((tweet) => tweet.id !== tweetId),
                );
            };

    return (
        <h1>Main Content</h1>>
    )
}

export default MainContent;