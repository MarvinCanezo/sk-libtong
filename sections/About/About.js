import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Fade from "react-reveal/Fade";

export default function About() {
    return (
        <Fade bottom delay={300}>
            <Paper
                id="about"
                style={{
                    minHeight: "35vh",
                    boxShadow: "0px 10px 15px 4px rgba(0, 0, 0, 0.1)",
                    padding: "2em",
                }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: "bold" }}>
                            About
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            textAlign="justify"
                            className="mt-3"
                            style={{ letterSpacing: "0.5px" }}
                        >
                            Hello! I am Marvin Canezo. A competent Architectural
                            Designer offering a wealth of experience in Project
                            Management, Revit modeling, graphic presentations
                            and sustainable strategies.
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            className="mt-3"
                            textAlign="justify"
                            style={{ letterSpacing: "0.5px" }}
                        >
                            Detail-oriented and certified Junior Architect who
                            excels at developing construction drawings,
                            generating 3D models, monitoring the onsite
                            workmanship, and conducting market research.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: "bold" }}>
                            Basic Information
                        </Typography>

                        {["age", "email", "phone", "address", "language"].map(
                            (item, idx) => (
                                <Grid
                                    container
                                    className={`mt-${idx === 0 ? "3" : "2"}`}
                                    key={idx}
                                >
                                    <Grid item xs={4}>
                                        <Typography
                                            variant="subtitle2"
                                            style={{
                                                letterSpacing: "0.5px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {item.toUpperCase()}:
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Typography
                                            variant="subtitle2"
                                            style={{
                                                letterSpacing: "0.5px",
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                            {
                                                {
                                                    age: 26,
                                                    email: "marvincanezo2897@gmail.com",
                                                    phone: "+63-9100193231",
                                                    address:
                                                        "Libtong, Tiwi, Albay, Philippines",
                                                    language:
                                                        "English, Tagalog",
                                                }[item]
                                            }
                                        </Typography>
                                    </Grid>
                                </Grid>
                            )
                        )}
                    </Grid>
                </Grid>
            </Paper>
        </Fade>
    );
}
