import Document, {Head, Html, Main, NextScript} from "next/document";
import React from "react";

class MyDocument extends Document {
static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
}

render() {
    return (
        <Html>
            <script src="https://kit.fontawesome.com/e4ca7511c0.js" crossOrigin="anonymous"></script>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <body>

            <Main/>
            <NextScript/>

            </body>
        </Html>
    )
}
}
export default MyDocument