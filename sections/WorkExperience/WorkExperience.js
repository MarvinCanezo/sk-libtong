import { Space } from "antd";
import { FaCircle } from "react-icons/fa";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fade from "react-reveal/Fade";
export default function WorkExperience() {
    return (
        <div style={{ marginTop: "10em" }}>
            <Fade bottom delay={400}>
                <Typography
                    variant="h5"
                    textAlign="center"
                    style={{
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                    }}
                >
                    Work Experience
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
                                height: "45vh",
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
                                JULY 2020 - JUNE 2022
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
                                    CCLC Builders
                                </Typography>
                            </div>
                        </div>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Fade right delay={400}>
                        <div className="work work-1">
                            <Typography
                                variant="h5"
                                style={{
                                    letterSpacing: "0.5px",
                                    marginTop: "0.5em",
                                    color: "#424242",
                                }}
                            >
                                Junior Architect
                            </Typography>
                            <div className="mt-3">
                                <Space
                                    className="d-flex align-items-start"
                                    size={20}
                                >
                                    <FaCircle
                                        color="#378D3E"
                                        size={12}
                                        style={{
                                            marginTop: "-10px",
                                        }}
                                    />
                                    <Typography
                                        variant="subtitle2"
                                        style={{
                                            letterSpacing: "0.5px",
                                            color: "#616161",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        Designed and generated construction
                                        drawings and illustrations, ensuring
                                        that the client's needs and goals were
                                        fully met.
                                    </Typography>
                                </Space>

                                <Space
                                    className="mt-3 d-flex align-items-start"
                                    size={20}
                                >
                                    <FaCircle
                                        color="#378D3E"
                                        size={12}
                                        style={{
                                            marginTop: "-10px",
                                        }}
                                    />
                                    <Typography
                                        variant="subtitle2"
                                        style={{
                                            letterSpacing: "0.5px",
                                            color: "#616161",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        Prepared and maintained various
                                        architectural documents, reviewed
                                        construction plans, and monitored the
                                        onsite workmanship; developed 3D models.
                                    </Typography>
                                </Space>

                                <Space
                                    className="mt-3 d-flex align-items-start"
                                    size={20}
                                >
                                    <FaCircle
                                        color="#378D3E"
                                        size={12}
                                        style={{
                                            marginTop: "-10px",
                                        }}
                                    />
                                    <Typography
                                        variant="subtitle2"
                                        style={{
                                            letterSpacing: "0.5px",
                                            color: "#616161",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        Pro-actively participated in weekly team
                                        meetings and contributed to idea
                                        generation.
                                    </Typography>
                                </Space>

                                <Space
                                    className="mt-3 d-flex align-items-start"
                                    size={20}
                                >
                                    <FaCircle
                                        color="#378D3E"
                                        size={12}
                                        style={{
                                            marginTop: "-10px",
                                        }}
                                    />
                                    <Typography
                                        variant="subtitle2"
                                        style={{
                                            letterSpacing: "0.5px",
                                            color: "#616161",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        Worked closely with expeditors,
                                        structural engineers, and general
                                        contractors.
                                    </Typography>
                                </Space>

                                <Space
                                    className="mt-3 d-flex align-items-start"
                                    size={20}
                                >
                                    <FaCircle
                                        color="#378D3E"
                                        size={12}
                                        style={{
                                            marginTop: "-10px",
                                        }}
                                    />
                                    <Typography
                                        variant="subtitle2"
                                        style={{
                                            letterSpacing: "0.5px",
                                            color: "#616161",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        Conducted market research and stayed
                                        up-to-date with current trends.
                                    </Typography>
                                </Space>
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
                                height: "30vh",
                                padding: "2em",
                                background: "#378D3E",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <div>
                                <Typography
                                    variant="h5"
                                    textAlign="center"
                                    style={{
                                        color: "#fefefe",
                                        letterSpacing: "0.5px",
                                        marginTop: "0.5em",
                                    }}
                                >
                                    Freelance Architect
                                </Typography>
                            </div>
                        </div>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Fade right delay={500}>
                        <div className="work work-2">
                            {/* <Typography
                                            variant="h5"
                                            style={{
                                                letterSpacing: "0.5px",
                                                marginTop: "0.5em",
                                                color: "#424242",
                                            }}
                                        >
                                            Junior Architect
                                        </Typography> */}
                            <div className="mt-2">
                                <Typography
                                    variant="subtitle2"
                                    style={{
                                        letterSpacing: "0.5px",
                                        color: "#616161",
                                    }}
                                >
                                    Managed the design, permitting, and
                                    construction oversight of some residential
                                    projects, ensuring adherence to budget and
                                    regulatory requirements while delivering a
                                    modern and functional living space.
                                </Typography>
                            </div>
                        </div>
                    </Fade>
                </Grid>
            </Grid>

            <div id="education" />
        </div>
    );
}
