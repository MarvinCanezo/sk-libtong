import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fade from "react-reveal/Fade";
export default function Education() {
    return (
        <div style={{ marginTop: "8em" }}>
            <Fade bottom delay={400}>
                <Typography
                    variant="h5"
                    textAlign="center"
                    style={{
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                    }}
                >
                    Education
                </Typography>
            </Fade>
            <Grid
                container
                className="mt-4"
                style={{
                    boxShadow: "0px 10px 15px 4px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Grid item xs={12} md={3}>
                    <Fade left delay={400}>
                        <div
                            style={{
                                height: "25vh",
                                padding: "2em",
                                background: "#378D3E",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                style={{
                                    letterSpacing: "0.5px",
                                    color: "#fefefe",
                                }}
                            >
                                2014 - 2020
                            </Typography>

                            <div>
                                <Typography
                                    variant="h5"
                                    style={{
                                        color: "#fefefe",
                                        letterSpacing: "0.5px",
                                        marginTop: "0.5em",
                                    }}
                                >
                                    Bachelors Degree
                                </Typography>
                            </div>
                        </div>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Fade right delay={400}>
                        <div
                            style={{
                                height: "25vh",
                                padding: "2em",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "start",
                                flexDirection: "column",
                            }}
                        >
                            <div>
                                <Typography
                                    variant="h5"
                                    style={{
                                        letterSpacing: "0.5px",
                                        marginTop: "0.5em",
                                        color: "#424242",
                                    }}
                                >
                                    Bachelor of Science in Architecture
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    style={{
                                        letterSpacing: "0.5px",
                                        color: "#616161",
                                    }}
                                >
                                    Bicol University
                                </Typography>
                            </div>
                        </div>
                    </Fade>
                </Grid>
            </Grid>

            <Grid
                container
                className="mt-4"
                style={{
                    boxShadow: "0px 10px 15px 4px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Grid item xs={12} md={3}>
                    <Fade left delay={500}>
                        <div
                            style={{
                                height: "25vh",
                                padding: "2em",
                                background: "#378D3E",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                style={{
                                    letterSpacing: "0.5px",
                                    color: "#fefefe",
                                }}
                            >
                                2014 - 2020
                            </Typography>

                            <div>
                                <Typography
                                    variant="h5"
                                    style={{
                                        color: "#fefefe",
                                        letterSpacing: "0.5px",
                                        marginTop: "0.5em",
                                    }}
                                >
                                    High School
                                </Typography>
                            </div>
                        </div>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Fade right delay={500}>
                        <div
                            style={{
                                height: "25vh",
                                padding: "2em",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "start",
                                flexDirection: "column",
                            }}
                        >
                            <div>
                                <Typography
                                    variant="h5"
                                    style={{
                                        letterSpacing: "0.5px",
                                        marginTop: "0.5em",
                                        color: "#424242",
                                    }}
                                >
                                    Major in Computer Hardware Servicing
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    style={{
                                        letterSpacing: "0.5px",
                                        color: "#616161",
                                    }}
                                >
                                    Tiwi Agro-Industrial School
                                </Typography>
                            </div>
                        </div>
                    </Fade>
                </Grid>
            </Grid>
        </div>
    );
}
