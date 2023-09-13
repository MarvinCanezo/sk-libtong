import { FloatButton } from "antd";
import Container from "@mui/material/Container";
import Navbar from "sections/Navbar/Navbar";
import Home from "../Home/Home";
import Accounts from "sections/Accounts/Accounts";
import About from "sections/About/About";
import Skills from "sections/Skills/Skills";
import Portfolio from "sections/Portfolio/Portfolio";
import WorkExperience from "sections/WorkExperience/WorkExperience";
import Education from "sections/Education/Education";
import Contact from "sections/Contact/Contact";

export default function Main() {
    return (
        <div>
            <div className="main">
                <Navbar />
                <Home />
            </div>

            <Container style={{ paddingBottom: "5em", marginTop: "-2em" }}>
                <Accounts />
                <Container style={{ marginTop: "3em" }}>
                    <About />
                    <Skills />
                    <Portfolio />
                    <WorkExperience />
                    <Education />
                </Container>
            </Container>
            <Contact />
            <FloatButton.BackTop />
        </div>
    );
}
