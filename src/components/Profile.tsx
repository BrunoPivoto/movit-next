import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/BrunoPivoto.png" alt="Bruno Pivoto" />
            <div>
                <strong>Bruno Pivoto</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                     Level {level}</p>
            </div>
        </div>
    )
}