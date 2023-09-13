import { Progress, Space } from "antd";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Fade from "react-reveal/Fade";
export default function Skills() {
    return (
        <div style={{ marginTop: "7em" }} id="skills">
            <Fade bottom delay={300}>
                <Typography
                    variant="h5"
                    textAlign="center"
                    style={{ fontWeight: "bold" }}
                >
                    Professional Skills
                </Typography>
            </Fade>

            <Paper
                style={{
                    minHeight: "35vh",
                    boxShadow: "0px 10px 15px 4px rgba(0, 0, 0, 0.1)",
                    padding: "2em",
                    marginTop: "1.5em",
                }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Fade bottom delay={500}>
                            <div>
                                <Space className="d-flex justify-content-between">
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        REVIT
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        90%
                                    </Typography>
                                </Space>
                                <Progress
                                    percent={90}
                                    showInfo={false}
                                    status="success"
                                    strokeColor={"#378D3E"}
                                />
                            </div>
                        </Fade>

                        <Fade bottom delay={600}>
                            <div className="mt-2">
                                <Space className="d-flex justify-content-between">
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        SKETCH UP
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        85%
                                    </Typography>
                                </Space>
                                <Progress
                                    percent={85}
                                    showInfo={false}
                                    status="success"
                                    strokeColor={"#378D3E"}
                                />
                            </div>
                        </Fade>

                        <Fade bottom delay={700}>
                            <div className="mt-2">
                                <Space className="d-flex justify-content-between">
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        ENSCAPE
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        85%
                                    </Typography>
                                </Space>
                                <Progress
                                    percent={85}
                                    showInfo={false}
                                    status="success"
                                    strokeColor={"#378D3E"}
                                />
                            </div>
                        </Fade>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Fade bottom delay={500}>
                            <div>
                                <Space className="d-flex justify-content-between">
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        LUMION
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        80%
                                    </Typography>
                                </Space>
                                <Progress
                                    percent={80}
                                    showInfo={false}
                                    status="success"
                                    strokeColor={"#378D3E"}
                                />
                            </div>
                        </Fade>

                        <Fade bottom delay={600}>
                            <div className="mt-2">
                                <Space className="d-flex justify-content-between">
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        PHOTOSHOP
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        80%
                                    </Typography>
                                </Space>
                                <Progress
                                    percent={80}
                                    showInfo={false}
                                    status="success"
                                    strokeColor={"#378D3E"}
                                />
                            </div>
                        </Fade>

                        <Fade bottom delay={700}>
                            <div className="mt-2">
                                <Space className="d-flex justify-content-between">
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        GRAPHIC DESIGN
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        style={{
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        85%
                                    </Typography>
                                </Space>
                                <Progress
                                    percent={85}
                                    showInfo={false}
                                    status="success"
                                    strokeColor={"#378D3E"}
                                />
                            </div>
                        </Fade>
                    </Grid>
                </Grid>
            </Paper>
            <div id="portfolio" />
        </div>
    );
}
