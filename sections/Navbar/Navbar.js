import { Button } from "antd";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Fade from "react-reveal/Fade";
import { Box } from "@mui/material";
import { CgMenu } from "react-icons/cg";
import MobileDrawer from "sections/MobileDrawer/MobileDrawer";

const navItems = [
    "about",
    "skills",
    "portfolio",
    "experience",
    "education",
    "contact",
];

export default function Navbar() {
    const { theme } = useTheme();
    const [hash, setHash] = useState("#home");
    const [mobileDrawer, setMobileDrawer] = useState(false);

    const toggleMobileDrawer = () => setMobileDrawer(!mobileDrawer);

    useEffect(() => {
        setHash(window?.location?.hash ? window?.location?.hash : null);
    }, []);

    return (
        <>
            <AppBar position="static" elevation={0} className="appbar">
                <Container className="h-100 d-flex align-items-center">
                    <Grid container>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "block",
                                },
                            }}
                        >
                            <Fade bottom delay={300}>
                                <a href="#home">
                                    <Typography
                                        variant="h5"
                                        style={{
                                            color: "#fefefe",
                                            fontSize: "16px",
                                            letterSpacing: "2px",
                                        }}
                                    >
                                        HOME
                                    </Typography>
                                </a>
                            </Fade>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            sx={{ display: { xs: "none", lg: "block" } }}
                        >
                            <div className="d-flex justify-content-end align-items-center">
                                {navItems.map((item, idx) => (
                                    <Fade bottom delay={700}>
                                        <Button
                                            key={idx}
                                            type="link"
                                            href={`#${item}`}
                                            className={`menu-item ${
                                                hash === `#${item}` &&
                                                theme === "dark"
                                                    ? "active-menu"
                                                    : ""
                                            }`}
                                            style={
                                                hash === `#${item}` &&
                                                theme === "light"
                                                    ? {
                                                          color: "#23ab73",
                                                          fontWeight: 500,
                                                      }
                                                    : {}
                                            }
                                        >
                                            {item.toUpperCase()}
                                        </Button>
                                    </Fade>
                                ))}
                            </div>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sx={{ display: { xs: "block", lg: "none" } }}
                        >
                            <Box className="d-flex justify-content-end h-100 align-items-center">
                                <Button
                                    type="link"
                                    onClick={toggleMobileDrawer}
                                >
                                    <CgMenu color="#C5C5DA" fontSize={21} />
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
            <MobileDrawer
                navItems={navItems}
                open={mobileDrawer}
                toggleMobileDrawer={toggleMobileDrawer}
            />
        </>
    );
}
