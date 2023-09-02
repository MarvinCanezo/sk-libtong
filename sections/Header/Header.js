import Grid from "@mui/material/Grid";
import { Button, Space, Typography } from "antd";
import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { AppBar, Avatar, Container } from "@mui/material";
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
} from "react-icons/fa";

const navItems = ["about", "skills", "portfolio", "contact"];

export default function Appbar() {
    const { theme, setTheme } = useTheme();
    const [hash, setHash] = useState("#home");

    useEffect(() => {
        setHash(window?.location?.hash ? window?.location?.hash : null);
    }, []);

    return (
        <div>
            <AppBar position="fixed" elevation={0} className="appbar">
                <Container className="h-100 d-flex align-items-center">
                    <Grid container>
                        <Grid item xs={6}>
                            <a href="#home">
                                <Typography
                                    variant="h5"
                                    style={{
                                        color: "#fefefe",
                                        fontSize: "16px",
                                        letterSpacing: "2px",
                                    }}
                                >
                                    CREATIVE CV
                                </Typography>
                                {/* <img
                                            alt="diamond"
                                            src="/images/bridge3.jpg"
                                            className="logo"
                                        /> */}
                            </a>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            className="d-flex justify-content-end align-items-center"
                        >
                            {navItems.map((item, idx) => (
                                <Button
                                    key={idx}
                                    type="link"
                                    // onClick={() => setHash(`#${item}`)}
                                    className={`menu-item ${
                                        hash === `#${item}` && theme === "dark"
                                            ? "active-menu"
                                            : ""
                                    }`}
                                    // href={`#${item}`}
                                    style={
                                        hash === `#${item}` && theme === "light"
                                            ? {
                                                  color: "#23ab73",
                                                  fontWeight: 500,
                                              }
                                            : {}
                                    }
                                >
                                    {item.toUpperCase()}
                                </Button>
                            ))}
                            <Button
                                type="link"
                                className="theme-btn"
                                // onClick={() =>
                                //     setTheme(
                                //         theme === "light"
                                //             ? "dark"
                                //             : "light"
                                //     )
                                // }
                            >
                                {theme === "light" ? (
                                    <MdDarkMode className="theme-icon" />
                                ) : (
                                    <MdLightMode className="theme-icon" />
                                )}
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>

            <div className="main">
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center flex-column align-items-center">
                        <Avatar
                            alt="Marvin Canezo"
                            src="/marvin.jpg"
                            style={{
                                height: "160px",
                                width: "160px",
                                boxShadow:
                                    "0px 100px 15px -3px rgba(0, 0, 0, 0.1)",
                            }}
                        />
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

                        <Typography
                            style={{
                                color: "#e0e0e0",
                                fontSize: "16px",
                                letterSpacing: "1px",
                            }}
                            variant="h2"
                        >
                            ARCHITECT
                        </Typography>

                        <Space className="mt-4" size={20}>
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
                                Hire Me
                            </Button>

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
                        </Space>
                    </div>
                </div>
            </div>

            <Container
                style={{
                    minHeight: "100vh",
                    marginTop: "-2em",
                }}
            >
                <Space className="d-flex justify-content-center">
                    <a
                        href="https://www.facebook.com/marvinvillafuertecanezo"
                        target="_blank"
                    >
                        <Avatar
                            style={{
                                height: "60px",
                                width: "60px",
                                background: "#898988",
                            }}
                        >
                            <FaFacebookF />
                        </Avatar>
                    </a>
                    <Avatar
                        style={{
                            height: "60px",
                            width: "60px",
                            background: "#898988",
                        }}
                    >
                        <FaTwitter />
                    </Avatar>{" "}
                    <Avatar
                        style={{
                            height: "60px",
                            width: "60px",
                            background: "#898988",
                        }}
                    >
                        <FaGooglePlusG />
                    </Avatar>{" "}
                    <Avatar
                        style={{
                            height: "60px",
                            width: "60px",
                            background: "#898988",
                        }}
                    >
                        <FaInstagram />
                    </Avatar>
                </Space>
            </Container>
        </div>
    );
}
