import Head from "next/head";
import Main from "sections/Main/Main";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Marvin Canezo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Main />
            </div>
        </div>
    );
}
