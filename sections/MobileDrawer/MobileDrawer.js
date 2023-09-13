import { Button, Space, Drawer } from "antd";
// import { useTranslation } from "react-i18next";
import { GiConversation } from "react-icons/gi";
import { HiHome, HiLightBulb } from "react-icons/hi";
import { MdMiscellaneousServices, MdEmail } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const MobileDrawer = (props) => {
    const { navItems, open, toggleMobileDrawer } = props;

    return (
        <Drawer
            closable={true}
            placement={"top"}
            onClose={toggleMobileDrawer}
            open={open}
            height={340}
            className="mobile-drawer"
            drawerStyle={{
                background: "#378D3E",
            }}
        >
            <Space direction="vertical">
                {navItems.map((item, idx) => {
                    return (
                        <Button
                            key={idx}
                            type="link"
                            href={`#${item}`}
                            style={{ color: "#fefefe" }}
                        >
                            {item === "home" ? (
                                <HiHome className="mobileMenuIcon" />
                            ) : item === "introduction" ? (
                                <HiLightBulb className="mobileMenuIcon" />
                            ) : item === "features" ? (
                                <MdMiscellaneousServices className="mobileMenuIcon" />
                            ) : item === "usecase" ? (
                                <RiTeamFill className="mobileMenuIcon" />
                            ) : item === "contact-us" ? (
                                <MdEmail className="mobileMenuIcon" />
                            ) : item === "consulting" ? (
                                <GiConversation className="mobileMenuIcon" />
                            ) : (
                                ""
                            )}

                            {item[0].toUpperCase() + item.slice(1)}
                        </Button>
                    );
                })}
            </Space>
        </Drawer>
    );
};

export default MobileDrawer;
