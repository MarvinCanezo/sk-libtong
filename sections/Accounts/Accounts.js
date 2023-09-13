import { Space } from "antd";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import { Zoom } from "react-reveal";

export default function Accounts() {
    return (
        <Space className="d-flex justify-content-center" size={15}>
            <Zoom delay={400}>
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
            </Zoom>

            <Zoom delay={500}>
                <a
                    href="https://www.linkedin.com/in/marvin-canezo-67143028b/"
                    target="_blank"
                >
                    <Avatar
                        style={{
                            height: "60px",
                            width: "60px",
                            background: "#898988",
                        }}
                    >
                        <FaLinkedin />
                    </Avatar>
                </a>
            </Zoom>
            <Zoom delay={600}>
                <a href="https://www.instagram.com/ar_nivram/" target="_blank">
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
            </Zoom>
        </Space>
    );
}
