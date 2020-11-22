import React, {HTMLAttributes} from 'react';
import styles from './Post.module.css'

type PostType = HTMLAttributes<HTMLDivElement> & PostInterface

interface PostInterface {
    srcAuthor: string
    srcCompany: string
    text: string
}

const Post: React.FC<PostType> = (
    {
        srcAuthor,
        srcCompany,
        text,
        ...props
    }
) => {
    return (
        <div {...props} className={styles.Post}>
            <div className={styles.Header}>
                <img src={srcAuthor}/>
                <img className={styles.companyImage} src={srcCompany} />
            </div>
            <span className={styles.text}>
                {text}
            </span>
        </div>
    );
};

export default Post;