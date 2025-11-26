'use client';
import LeftSidebar from '../LeftSidebar';
import MainContent from '../MainContent';
import RightSidebar from '../RightSidebar';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <LeftSidebar avatarUrl={'https://randomuser.me/api/portraits/men/8.jpg'}/>
            <MainContent />
            <RightSidebar />
        </div>
    );
}

export default HomePage;