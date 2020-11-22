import React from 'react';
import styles from './Companies.module.css'
import Post from "./Post/Post";

const Companies: React.FC = () => {
    return (
        <div className={styles.Companies}>
            <Post
                srcAuthor={'Ellipse 3.png'}
                srcCompany={'logo-3 1.png'}
                text={
                    'The AMA’s definitions of marketing and ' +
                    'marketing research are reviewed and ' +
                    'reapproved/modified every three-years by ' +
                    'a panel of five scholars who are active researchers.'
                }
            />
            <Post
                srcAuthor={'Ellipse 4.png'}
                srcCompany={'7 521.png'}
                text={'Marketing is the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large. '}
            />
            <Post
                srcAuthor={'Ellipse 5.png'}
                srcCompany={'unnamed (1) 1.png'}
                text={'A brand is a name, term, design, symbol or any other feature that identifies one seller’s good or service as distinct from those of other sellers.'}
            />
        </div>
    );
};

export default Companies;