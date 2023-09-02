import Grid from "@mui/material/Grid";
import { Button, Progress, Space } from "antd";
import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import {
    AppBar,
    Avatar,
    Box,
    Container,
    Paper,
    Typography,
} from "@mui/material";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
} from "react-icons/fa";

const navItems = ["about", "skills", "portfolio", "contact"];

const itemData = [
    {
        img: "/portfolio1.jpg",
        title: "Breakfast",
        author: "@bkristastucchio",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "/portfolio2.jpg",
        title: "Burger",
        author: "@rollelflex_graphy726",
    },
    {
        img: "/portfolio3.jpg",
        title: "Camera",
        author: "@helloimnik",
    },
    {
        img: "/portfolio4.jpg",
        title: "Coffee",
        author: "@nolanissac",
        cols: 2,
    },
    {
        img: "/portfolio5.jpg",
        title: "Hats",
        author: "@hjrc33",
        cols: 2,
    },
    {
        img: "/portfolio6.jpg",
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "/portfolio7.jpg",
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "/portfolio8.jpg",
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
        featured: true,
    },
];
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
                            xs={12}
                            sm={6}
                            className="d-flex justify-content-end align-items-center"
                        >
                            {navItems.map((item, idx) => (
                                <Button
                                    key={idx}
                                    type="link"
                                    href={`#${item}`}
                                    className={`menu-item ${
                                        hash === `#${item}` && theme === "dark"
                                            ? "active-menu"
                                            : ""
                                    }`}
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
                            <Box
                                sx={{
                                    display: {
                                        xs: "none",
                                        sm: "block",
                                    },
                                }}
                            >
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
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>

            <div className="main">
                <div
                    className="h-100 d-flex justify-content-center align-items-center"
                    id="home"
                >
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
                            JUNIOR ARCHITECT
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
                    // minHeight: "100vh",
                    paddingBottom: "5em",
                    marginTop: "-2em",
                }}
            >
                <Space className="d-flex justify-content-center" size={15}>
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
                    <a
                        href="https://www.instagram.com/ar_nivram/"
                        target="_blank"
                    >
                        <Avatar
                            style={{
                                height: "60px",
                                width: "60px",
                                background: "#898988",
                            }}
                        >
                            <FaTwitter />
                        </Avatar>
                    </a>
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
                            <FaGooglePlusG />
                        </Avatar>
                    </a>

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
                            <FaInstagram />
                        </Avatar>
                    </a>
                </Space>
                <Container style={{ marginTop: "3em" }}>
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
                                <Typography
                                    variant="h5"
                                    style={{ fontWeight: "bold" }}
                                >
                                    About
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    textAlign="justify"
                                    className="mt-3"
                                    style={{ letterSpacing: "0.5px" }}
                                >
                                    Hello! I am Marvin Canezo. A competent
                                    Architectural Designer offering a wealth of
                                    experience in Project Management, Revit
                                    modeling, graphic presentations and
                                    sustainable strategies.
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    className="mt-3"
                                    textAlign="justify"
                                    style={{ letterSpacing: "0.5px" }}
                                >
                                    Detail-oriented and certified Junior
                                    Architect who excels at developing
                                    construction drawings, generating 3D models,
                                    monitoring the onsite workmanship, and
                                    conducting market research.
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Typography
                                    variant="h5"
                                    style={{ fontWeight: "bold" }}
                                >
                                    Basic Information
                                </Typography>

                                {[
                                    "age",
                                    "email",
                                    "phone",
                                    "address",
                                    "language",
                                ].map((item, idx) => (
                                    <Grid
                                        container
                                        className={`mt-${
                                            idx === 0 ? "3" : "2"
                                        }`}
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
                                ))}
                            </Grid>
                        </Grid>
                    </Paper>

                    <div style={{ marginTop: "7em" }} id="skills">
                        <Typography
                            variant="h5"
                            textAlign="center"
                            style={{ fontWeight: "bold" }}
                        >
                            Professional Skills
                        </Typography>

                        <Paper
                            style={{
                                minHeight: "35vh",
                                boxShadow:
                                    "0px 10px 15px 4px rgba(0, 0, 0, 0.1)",
                                padding: "2em",
                                marginTop: "1.5em",
                            }}
                        >
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6}>
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
                                </Grid>

                                <Grid item xs={12} sm={6}>
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
                                </Grid>
                            </Grid>
                        </Paper>
                        <div id="portfolio" />
                    </div>

                    <div style={{ marginTop: "7em" }}>
                        <Typography
                            variant="h5"
                            textAlign="center"
                            style={{
                                fontWeight: "bold",
                                letterSpacing: "0.5px",
                            }}
                        >
                            Portfolio
                        </Typography>

                        <Grid container spacing={3} className="mt-2">
                            {itemData.map((item) => (
                                <Grid item xs={12} sm={12} md={6}>
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                            style={{
                                                boxShadow:
                                                    "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                                height: "100%",
                                            }}
                                        />
                                        {/* <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.author}
                                        /> */}
                                    </ImageListItem>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Container>
            </Container>
        </div>
    );
}
