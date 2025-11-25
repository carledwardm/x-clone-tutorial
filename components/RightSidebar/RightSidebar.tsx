import { FaSearch } from 'react-icons/fa';
import styles from './RightSidebar.module.scss';
import Link from 'next/link';

const RightSidebar = () => {
    return (
        <div className={styles.rightSidebar}>
            <div className={styles.searchBar}>
                <FaSearch className={styles.searchIcon} />
                <input 
                    type="text"
                    placeholder="search"
                    className={styles.searchInput} />
            </div>
            <div className={styles.upgradeBanner}>
                <div className={styles.upgradeContent}>
                    <h2>Upgrade to Premium+</h2>
                    <p>Enjoy additional benefits, zero ads, and the largest reply
                        prioritization
                    </p>
                    <button className={styles.upgradeButton}>Upgrade to Premium+</button>
                </div>
            </div>
            <div className={styles.trending}>
                <h2>Explore <span className={styles.betaTag}>Beta</span></h2>
                <ul className={styles.trendingList}>
                    <li>
                        <div className={styles.trendInfo}>
                            <span>CSS · 1 hour ago</span>
                            <h3>Developer spend 4 hours centering a div, finally gives up</h3>
                        </div>
                    </li>
                    <li>
                        <div className={styles.trendInfo}>
                            <span>CSS · 3 hours ago</span>
                            <h3>Flexbox vs. Grid: The ultimate showdown</h3>
                        </div>
                    </li>
                    <li>
                        <div className={styles.trendInfo}>
                            <span>Web Development · 4 hours ago</span>
                            <h3>Inline Styles: the controversial method splitting the community</h3>
                        </div>
                    </li>
                </ul>
                <Link className={styles.showMore} href="#showMore">Show more</Link>
            </div>
            <div className={styles.whoToFollow}>
                <h2>Who to follow</h2>
                <ul className={styles.followList}>
                    <li>
                        <div className={styles.userInfo}>
                            <img 
                                src="https://randomuser.me/api/portraits/men/42.jpg"
                                alt="chiller" />
                            <div>
                                <h3>chiller</h3>
                                <span>@chiller</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </li>
                                        <li>
                        <div className={styles.userInfo}>
                            <img 
                                src="https://randomuser.me/api/portraits/men/45.jpg"
                                alt="John" />
                            <div>
                                <h3>John</h3>
                                <span>@beardlessjohn</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </li>
                                        <li>
                        <div className={styles.userInfo}>
                            <img 
                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                alt="Jo B" />
                            <div>
                                <h3>Jo B</h3>
                                <span>@saas_boss</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </li>
                </ul>
                <Link className={styles.showMore} href="#showMore">Show more</Link>
            </div>
            <div className={styles.footerLinks}>
                <Link href="#TermsOfService">Terms of Service</Link> · <Link href="#PrivacyPolicy">Privacy Policy</Link> 
                <Link href="#CookiePolicy">Cookie Policy</Link> · <Link href="#Accessibility">Accessibility</Link>
                <Link href="#AdsInfo">Ads info</Link> · <Link href="#More">More...</Link>
                <p>© 2024 X Corp.</p>
            </div>
        </div>
    )
}

export default RightSidebar;