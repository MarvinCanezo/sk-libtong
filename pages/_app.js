import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "next-themes";
import { StyledEngineProvider } from "@mui/material";
import "../styles/global.scss";
import "../styles/home.scss";

function Application({ Component, pageProps }) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider
                attribute="class"
                disableTransitionOnChange
                defaultTheme="light"
            >
                <Component {...pageProps} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default Application;
