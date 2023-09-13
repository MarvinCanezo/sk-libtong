import { Button, Space } from "antd";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";

export default function Home() {
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            id="home"
        >
            <div className="d-flex justify-content-center flex-column align-items-center mt-4">
                <Zoom>
                    <Avatar
                        alt="Marvin Canezo"
                        src="/marvin.jpg"
                        style={{
                            height: "160px",
                            width: "160px",
                            boxShadow: "0px 100px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                </Zoom>
                <Fade bottom delay={300}>
                    <Typography
                        style={{
                            color: "#fefefe",
                            fontSize: "40px",
                            fontWeight: "bold",
                            marginTop: "0.5em",
                            letterSpacing: "3px",
                        }}
                        variant="h2"
                    >
                        Marvin Cañezo
                    </Typography>
                </Fade>

                <Fade bottom delay={300}>
                    <Typography
                        style={{
                            color: "#e0e0e0",
                            fontSize: "16px",
                            letterSpacing: "1px",
                        }}
                        variant="h2"
                    >
                        JUNIOR ARCHITECT
                    </Typography>
                </Fade>

                <Space className="mt-4" size={20}>
                    <Fade bottom delay={400}>
                        <Button
                            type="link"
                            href="#contact"
                            size="large"
                            style={{
                                background: "#378D3E",
                                color: "#fefefe",
                                border: "none",
                                borderRadius: "5px",
                                width: "170px",
                                fontSize: "14px",
                            }}
                        >
                            <span className="mt-1">Hire Me</span>
                        </Button>
                    </Fade>{" "}
                    <Fade bottom delay={500}>
                        <a
                            href="/cv.pdf"
                            download="Marvin_Canezo_CV"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="large"
                                style={{
                                    background: "#378D3E",
                                    color: "#fefefe",
                                    border: "none",
                                    borderRadius: "5px",
                                    width: "170px",
                                    fontSize: "14px",
                                }}
                            >
                                Download CV
                            </Button>
                        </a>
                    </Fade>
                </Space>
            </div>
        </div>
    );
}
