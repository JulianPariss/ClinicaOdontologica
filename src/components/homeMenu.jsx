import React from "react";
import { Link } from "react-router-dom"

import HeaderPage from "./header";

import { Menu } from 'antd';
import { 
    UserOutlined, 
    SearchOutlined,
    UnorderedListOutlined,
    MedicineBoxOutlined,
    UserDeleteOutlined,
    UserAddOutlined,
    BookOutlined,
    LogoutOutlined   
} from '@ant-design/icons';


const HomeMenu = () => (
    <div>
    <HeaderPage subTitle = "Panel de gestion"></HeaderPage>
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>

        <Menu.SubMenu key="SubMenu1" title="Pacientes" icon={<UserOutlined />}>
        <Menu.ItemGroup title="Paciente">
            <Menu.Item key="CargarListaPacientes" icon={<UnorderedListOutlined/>}>
                <Link to="paciente/CargarLista">Mostrar todos</Link>
            </Menu.Item>
            <Menu.Item key="BuscarPorIDPacientes" icon={<SearchOutlined />}>
                <Link to="paciente/BuscarPorID">Buscar paciente</Link>
            </Menu.Item>
            <Menu.Item key="EliminarPaciente" icon={<UserDeleteOutlined />}>
                <Link to="paciente/EliminarPaciente">Eliminar paciente</Link>
            </Menu.Item>
            <Menu.Item key="CrearPaciente" icon={<UserAddOutlined />}>
                <Link to="paciente/CrearPaciente">Crear paciente</Link>
            </Menu.Item>
        </Menu.ItemGroup>
        </Menu.SubMenu>
    
        <Menu.SubMenu key="SubMenu2" title="Odontologos" icon={<MedicineBoxOutlined />}>
        <Menu.ItemGroup title="Odontologo">
            <Menu.Item key="CargarListaOdontolgo" icon={<UnorderedListOutlined/>}>
                <Link to="odontologo/CargarLista">Mostrar todos</Link>
            </Menu.Item>
            <Menu.Item key="BuscarPorIDOdontolgo"r icon={<SearchOutlined />}>
                <Link to="odontologo/BuscarPorID">Buscar odontologo</Link>
            </Menu.Item>
            <Menu.Item key="EliminarOdontologo" icon={<UserDeleteOutlined />}>
                <Link to="odontologo/EliminarOdontologo">Eliminar odontologo</Link>
            </Menu.Item>
            <Menu.Item key="CrearOdontologo" icon={<UserAddOutlined />}>
                <Link to="odontologo/CrearOdontologo">Crear odontologo</Link>
            </Menu.Item>
        </Menu.ItemGroup>
        </Menu.SubMenu>

        <Menu.Item key="AsignarTurno" icon={<BookOutlined />}>
            <Link to={"asignarTurno"}>Turno</Link>
        </Menu.Item>
        <Menu.Item key="LogOut" icon={<LogoutOutlined />}>
            <Link to={"/"}>Log out</Link>
        </Menu.Item>
    </Menu>
    </div>
);

export default HomeMenu;



/* const Menu = () => {
    return (
    <nav>
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="odontologo">Odontologo</Link></li>
            <li><Link to="paciente">Paciente</Link></li>     
        </ul>
        </div>
    </nav>        
    )
} */

//export default Menu;