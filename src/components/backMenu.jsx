import React from "react";
import { Link } from "react-router-dom"

import HeaderPage from "./header";

import { Menu } from 'antd';
import { 
    ArrowLeftOutlined 
} from '@ant-design/icons';


const BackMenu = (props) => (
    <div>
    <HeaderPage subTitle={props.subTitle}></HeaderPage>
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
            <Menu.Item key="back" icon={<ArrowLeftOutlined />}>
                <Link to={"/home"}>Volver</Link>
            </Menu.Item>
    </Menu>
    </div>
);

export default BackMenu;
