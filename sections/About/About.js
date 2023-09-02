import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";

export default function About() {
    return (
        <Paper
            style={{
                height: "35vh",
                boxShadow: "0px 10px 15px 10px rgba(0, 0, 0, 0.1)",
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
                        // textAlign="justify"
                        className="mt-3"
                        style={{ letterSpacing: "0.5px" }}
                    >
                        Hello! I am Anthony Barnett. Web Developer, Graphic
                        Designer and Photographer.
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        className="mt-3"
                        textAlign="justify"
                        style={{ letterSpacing: "0.5px" }}
                    >
                        Creative CV is a HTML resume template for professionals.
                        Built with Bootstrap 4, Now UI Kit and FontAwesome, this
                        modern and responsive design template is perfect to
                        showcase your portfolio, skills and experience.
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
                                        }}
                                    >
                                        {
                                            {
                                                age: 26,
                                                email: "marvincanezo2897@gmail.com",
                                                phone: "09100123456",
                                                address:
                                                    "Libtong, Tiwi, Albay, Philippines",
                                                language:
                                                    "Mandarin, English, Korean, Tagalog",
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
    );
}
