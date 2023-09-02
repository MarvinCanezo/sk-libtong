import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Container, Button } from "@mui/material";
import Appbar from "sections/Header/Header";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Marvin Canezo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Appbar />
            </div>

            {/* <main>
                <Container maxWidth="lg">
                    <Button>Sample</Button>
                    <Header title="Welcome to my app!" />
                    <p className="description">
                        Get started by editing <code>pages/index.js</code>
                    </p>
                </Container>
            </main> */}

            {/* <Footer /> */}
        </div>
    );
}
