import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

let contdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false)


    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteL, minuteR] = String(minutes).padStart(2, '0').split('');
    const [secondL, secondR] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(contdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            contdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteL}</span>
                    <span>{minuteR}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondL}</span>
                    <span>{secondR}</span>
                </div>
            </div>
                {isActive ? (
                    <button type='button'
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}>
                        Abandonar Contagem
                    </button>
                ) : (
                    <button type='button'
                        className={styles.countdownButton}
                        onClick={startCountdown}>
                        Iniciar Ciclo
                    </button>
                )}
        </div>
    );
}