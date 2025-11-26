import { useState } from 'react';
import styles from './Tweet.module.scss';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';

interface TweetProps {
    tweetId: string;
    avatarUrl: string;
    name: string;
    handle: string;
    time: string;
    content: string;
    comments: number;
    retweets: number;
    likes: number;
    onDelete: (tweetId: string) => void;
}

const Tweet = ({
    tweetId,
    avatarUrl,
    name,
    handle,
    time,
    content,
    comments, 
    retweets, 
    likes,
    onDelete}: TweetProps) => {
    const [commentCount, setCommentCount] = useState(comments);
    const [retweetCount, setRetweetCount] = useState(retweets);
    const [likeCount, setLikeCount] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => setShowMenu(!showMenu);

    const handleLike = async () => {
        const newLikeCount = isLiked ? likeCount - 1 : likeCount + 1;
        setIsLiked(!isLiked);
        setLikeCount(newLikeCount);

        try {
            const tweetRef = doc(db, "tweets", tweetId);
            await updateDoc(tweetRef, {
                likes: newLikeCount,
            });
        } catch (error) {
            console.log("Failed to update likes:", error);
        }
    };

    const handleRetweet = async () => {
        const newRetweetCount = retweetCount + 1;
        setRetweetCount(newRetweetCount);


        try {
            const tweetRef = doc(db, "tweets", tweetId);
            await updateDoc(tweetRef, {
                retweets: newRetweetCount,
            });
        } catch (error) {
            console.log("Failed to update retweets:", error);
        }
    };

    const handleComment = async () => {
        const newCommentCount = commentCount + 1;
        setCommentCount(commentCount);


        try {
            const tweetRef = doc(db, "tweets", tweetId);
            await updateDoc(tweetRef, {
                comments: newCommentCount,
            });
        } catch (error) {
            console.log("Failed to update comments:", error);
        }
    };

    const handleDelete = async () => {
        try {
            const tweetRef = doc(db, "tweets", tweetId);
            await deleteDoc(tweetRef);
            onDelete(tweetId);
        } catch (error) {
            console.log("Failed to delete tweet:", error);
        }
    };

    return (
        <h1>Tweet</h1>
    )
}

export default Tweet;