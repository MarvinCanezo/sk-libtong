import { Image } from "antd";
import Grid from "@mui/material/Grid";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";
const itemData = [
    {
        img: "/car-port.jpg",
        title: "Two Storey Residential House",
        author: "Car Port",
    },
    {
        img: "/lanai.jpg",
        title: "Two Storey Residential House",
        author: "Lanai",
        cols: 2,
    },
    {
        img: "/dining-patio.jpg",
        title: "Two Storey Residential House",
        author: "Dining Patio",
        cols: 2,
    },
    {
        img: "/living-area.jpg",
        title: "Two Storey Residential House",
        author: "Living Area",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "/minimalist-dining-area.jpg",
        title: "Two Storey Residential House",
        author: "Minimalist Dining Area",
    },
    {
        img: "/exterior-perspective.jpg",
        title: "Bungalow House",
        author: "Exterior Perspective",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "/living-area-two-storey-house.jpg",
        title: "Two Storey Residential House",
        author: "Living Area",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "/entry-porch.jpg",
        title: "Bungalow House",
        author: "Entry Porch",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "/front-elevation.jpg",
        title: "Front Elevation",
        author: "Entry Porch",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "/remorosa.jpg",
        title: "Remorosa",
        author: "Entry Porch",
        rows: 2,
        cols: 2,
        featured: true,
    },
    // to add image just copy the last bracket
    // {
    //     img: "/entry-porch.jpg",
    //     title: "Bungalow House",
    //     author: "Entry Porch",
    //     rows: 2,
    //     cols: 2,
    //     featured: true,
    // },
];

export default function Portfolio() {
    return (
        <div style={{ marginTop: "7em" }}>
            <Fade bottom delay={500}>
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
            </Fade>

            <Grid container spacing={3} className="mt-2">
                {itemData.map((item, idx) => (
                    <Grid item xs={12} sm={12} md={6} key={idx}>
                        <Zoom delay={300}>
                            <ImageListItem key={item.img}>
                                <Image
                                    alt={item.title}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    style={{
                                        boxShadow:
                                            "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                        height: "100%",
                                    }}
                                />

                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                />
                            </ImageListItem>
                        </Zoom>
                    </Grid>
                ))}
            </Grid>
            <Grid container style={{ marginTop: "2em" }} spacing={4}>
                <Grid item xs={12}>
                    <Fade bottom delay={500}>
                        <video
                            className="border"
                            controls
                            width="100%"
                            // width="100%"
                            height={500}
                            src="/video1.mp4"
                        />
                    </Fade>
                </Grid>

                <Grid item xs={12}>
                    <Fade bottom delay={500}>
                        <video
                            className="border"
                            controls
                            width="100%"
                            // width="100%"
                            height={500}
                            src="/video1.mp4"
                        />
                    </Fade>
                </Grid>
                <Grid item xs={12}>
                    <Fade bottom delay={500}>
                        <video
                            className="border"
                            controls
                            width="100%"
                            // width="100%"
                            height={500}
                            src="/video1.mp4"
                        />
                    </Fade>
                </Grid>
                {/*  TO ADD ANOTHER VIDEO JUST COPY FROM GRID ITEM */}
            </Grid>
        </div>
    );
}
