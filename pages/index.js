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
        </div>
    );
}
