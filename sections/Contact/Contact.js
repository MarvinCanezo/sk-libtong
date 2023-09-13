import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Zoom } from "react-reveal";
export default function Contact() {
    return (
        <>
            <div className="contact" id="contact">
                <Container maxWidth="sm">
                    <Zoom>
                        <Paper
                            style={{
                                height: "50vh",
                                padding: "2em",
                            }}
                        >
                            <Typography
                                variant="h5"
                                style={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                Contact Me
                            </Typography>
                            <div className="mt-4">
                                <Typography
                                    variant="subtitle2"
                                    style={{
                                        letterSpacing: "0.5px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Address:
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    style={{
                                        letterSpacing: "0.5px",
                                        color: "#616161",
                                    }}
                                >
                                    Libtong, Tiwi, Albay, Philippines
                                </Typography>
                            </div>

                            <div className="mt-4">
                                <Typography
                                    variant="subtitle2"
                                    style={{
                                        letterSpacing: "0.5px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Phone:
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    style={{
                                        letterSpacing: "0.5px",
                                        color: "#616161",
                                    }}
                                >
                                    +63-9100193231
                                </Typography>
                            </div>
                            <div className="mt-4">
                                <Typography
                                    variant="subtitle2"
                                    style={{
                                        letterSpacing: "0.5px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Email:
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    style={{
                                        letterSpacing: "0.5px",
                                        color: "#616161",
                                    }}
                                >
                                    marvincanezo2897@gmail.com
                                </Typography>
                            </div>
                        </Paper>
                    </Zoom>
                </Container>
            </div>
            <div style={{ height: "10vh" }}></div>
        </>
    );
}
