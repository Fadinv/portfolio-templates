import React, {useRef} from 'react';
import styles from './Person.module.css'

const Person = () => {

    const refToggle = useRef<HTMLDivElement>()

    const hasOpenToggle = () => {
        const toggle = refToggle.current

        toggle.classList.toggle(styles.isOpenButton)

        toggle.firstElementChild.classList.toggle(styles.isOpenCircle)

        console.log(toggle.firstElementChild)
    }

    return (
        <div className={styles.Person}>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div className={styles.Header}>
                    <div className={styles.HeaderTextWrapper}>
                        <div className={styles.NumberWrapper}>
                            <p className={styles.Number}>1</p>
                        </div>
                        <div className={styles.HeaderText}>Unread Notifications</div>
                    </div>
                    <button className={styles.button}>
                        <img src={'/land1/Group 2.svg'}/>
                        Dismiss all
                    </button>
                </div>

                <div className={styles.PersonContent}>

                    <div className={styles.PersonBar}>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                        }}>
                            <div>
                                <div className={styles.Avatar}>
                                    <img src={'/land1/Ellipse 7.png'}/>
                                    <img src={'/land1/vscode-icons_file-type-clojure.svg'} className={styles.imageIcon}/>
                                </div>
                            </div>

                            <div style={{
                                marginLeft: '1.0625em',
                                marginRight: '1.875em',
                            }}>
                                <div style={{
                                    color: '#2D2828',
                                    fontSize: '1.125em',
                                    fontWeight: "bold",
                                    fontFamily: "Segoe UI"
                                }}>Rosario
                                </div>
                                <div style={{
                                    color: 'rgba(45, 40, 40, 0.7)',
                                    whiteSpace: 'nowrap',
                                    fontSize: '1.125em',
                                    fontFamily: "Segoe UI",
                                }}>just now
                                </div>
                            </div>
                        </div>

                        <div className={styles.PersonDescription}>
                            <div style={{
                                fontSize: '1.375em',
                                fontWeight: "bold",
                            }}>Showcasing Customers
                            </div>
                            <div style={{
                                fontSize: '0.875em',
                                marginTop: '0.6875em',
                            }}>Our customers have continued to send
                                in pictures of their finished artwork...
                            </div>
                        </div>

                    </div>

                    <div className={styles.PersonText}>
                        <div style={{
                            fontWeight: "bold",
                            fontSize: '1.375em',
                        }}>Start a thread
                        </div>
                        <div style={{
                            fontSize: '0.875em',
                            marginTop: '1.1875em',
                        }}>Technology trends have the potential
                            to drive significant disruption and
                            deliver significant opportunity. Digital
                            trends such as autonomous things, blockchain,
                            digital twins and smart spaces are rapidly
                            approaching maturity.
                        </div>
                    </div>

                </div>


            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '5.625em',
                marginBottom: '7.5em',
            }}>
                <div className={styles.Header}>
                    <div className={styles.HeaderTextWrapper}>
                        <div className={styles.HeaderText} style={{
                            padding: '0',
                            marginLeft: '0'
                        }}>Recent
                        </div>
                    </div>
                    <button onClick={hasOpenToggle} className={styles.button} style={{
                        paddingRight: '0',
                        paddingLeft: '1em',
                    }}>
                        Unread
                        <div ref={refToggle} className={styles.toggleButton}>
                            <div className={styles.toggleCircle}></div>
                        </div>
                    </button>
                </div>

                <div className={styles.PersonContent}>

                    <div className={styles.PersonBar}>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            height: 'auto',
                        }}>

                            <div>
                                <div className={styles.Avatar}>
                                    <img src={'/land1/Ellipse 8.png'}/>
                                    <img src={'/land1/Group 3.svg'} className={styles.imageIcon}/>
                                </div>
                            </div>

                            <div style={{
                                marginLeft: '1.0625em',
                                marginRight: '1.875em',
                            }}>
                                <div style={{
                                    color: '#2D2828',
                                    fontSize: '1.125em',
                                    fontWeight: "bold",
                                    fontFamily: "Segoe UI"
                                }}>Dan
                                </div>
                                <div style={{
                                    color: 'rgba(45, 40, 40, 0.7)',
                                    fontSize: '1.125em',
                                    fontFamily: "Segoe UI",
                                    whiteSpace: 'nowrap',
                                }}>2 hrs ago
                                </div>
                            </div>
                        </div>

                        <div className={styles.PersonDescription}>
                            <div style={{
                                fontSize: '1.375em',
                                fontWeight: "bold",
                            }}>Thoughts on attending...
                            </div>
                            <div style={{
                                fontSize: '0.875em',
                                marginTop: '0.6875em',
                            }}>Our customers have continued to send
                                in pictures of their finished artwork...
                            </div>
                        </div>
                    </div>

                    <div className={styles.PersonText}>
                        <div style={{
                            fontWeight: "bold",
                            fontSize: '1.5em',
                        }}>Mark the decision
                        </div>
                        <div style={{
                            marginTop: '1em',
                        }}>This continuous technology innovation
                            will enable the alignment of the physical
                            and digital worlds and create competitive
                            advantage for some. Are you ready?
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Person;