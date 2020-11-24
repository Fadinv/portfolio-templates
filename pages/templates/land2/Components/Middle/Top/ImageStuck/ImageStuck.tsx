import React from 'react';
import styles from './ImageStuck.module.css'
import {getElementById} from "domutils";

class ImageStuck extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            active: 'key0',
        }
    }

    toggleImage(event) {
        const key = event.target.dataset.key

        if (key === this.state.active) {
            return
        }

        const oldButton = document.getElementsByClassName(styles.activeButton)[0]
        oldButton.classList.toggle(styles.activeButton)

        event.target.classList.toggle(styles.activeButton)

        const oldElem = document.getElementById(this.state.active)
        oldElem.classList.remove(styles.active)

        const elem = document.getElementById(event.target.dataset.key)
        elem.classList.add(styles.active)

        this.setState({
            active: key
        })
    }

    render() {
        return (
            <div className={styles.ImageStuck}>
                <div id={'key0'} className={styles.ImageBox + ' ' + styles.active}>
                    <img className={styles.ImageItem} src={'/land2/IMaGf.png'}/>
                </div>
                <div id={'key1'} className={styles.ImageBox}>
                    <img className={styles.ImageItem} src={'/land2/germanpassiv2.png'}/>
                </div>
                <div id={'key2'} className={styles.ImageBox}>
                    <img className={styles.ImageItem} src={'/land2/hold.png'}/>
                </div>

                <div className={styles.StuckButtons}>
                    <button className={styles.Button + ' ' + styles.activeButton} onClick={this.toggleImage.bind(this)} data-key={'key0'} key={'0'}></button>
                    <button className={styles.Button} onClick={this.toggleImage.bind(this)} data-key={'key1'} key={'1'}></button>
                    <button className={styles.Button} onClick={this.toggleImage.bind(this)} data-key={'key2'} key={'2'}></button>
                </div>
            </div>
        );
    }
};

export default ImageStuck;