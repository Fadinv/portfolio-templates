import React from 'react';
import styles from './References.module.css'
import Link from "next/link";
import {useRouter} from "next/router";

const References = () => {
    const router = useRouter()
    let counter

    if (+router.pathname.match(/\d/)) {
        counter = +router.pathname.match(/\d/)
    }
    return (
        <>

            {counter === 1 ? null :
                <div className={styles.References + ' ' + styles.Left}>
                    <Link href={`/templates/land${counter - 1}`}>
                        <a className={styles.Ref}>&#171; previous</a>
                    </Link>
                </div>}


            {counter === 3 ? null :
                <div className={styles.References + ' ' + styles.Right}>
                    <Link href={`/templates/land${counter + 1}`}>
                        <a className={styles.Ref}>next &#187;</a>
                    </Link>
                </div>}
        </>
    );
};

export default References;