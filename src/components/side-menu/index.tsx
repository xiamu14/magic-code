import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import {
    AppstoreOutlined,
    BuildOutlined,
    PictureOutlined,
} from "@ant-design/icons";
import { useHistory, useLocation } from "react-router-dom";

export default function SideMenu() {
    const history = useHistory();
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState("1");

    const handleSwitch = (path: string) => {
        history.push(path);
    };

    useEffect(() => {
        history.push("/"); // 这里是因为生产环境 首页初始化时 react-router-dom 无法匹配到 ‘/’ , 只能手动跳转一次，体验没有差异
    }, [history]);

    useEffect(() => {
        setSelectedKey(location.pathname);
    }, [location]);

    return (
        <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
            <Menu.Item key="/image" onClick={() => handleSwitch("/image")}>
                <PictureOutlined />
                <span>管理图片</span>
            </Menu.Item>
            <Menu.Item key="/" onClick={() => handleSwitch("/")}>
                <AppstoreOutlined />
                <span>生成代码</span>
            </Menu.Item>
            {/* 移动到公共网站 */}
            <Menu.Item key="/setup" onClick={() => handleSwitch("/setup")}>
                <BuildOutlined />
                <span>配置生成器</span>
            </Menu.Item>
        </Menu>
    );
}
