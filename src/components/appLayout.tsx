import { Avatar, Breadcrumb, Button, Dropdown, Layout, Menu, MenuProps, Typography } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content, Header } from "antd/es/layout/layout"
import React, { ReactNode, useRef } from "react";
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { MenuItemType } from "antd/es/menu/hooks/useItems";


const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  
 

 
    const HEADER_HEIGHT = 64
    const SLIDER_WIDTH = 200
export const AppLayout = ({ children } : { children: ReactNode })=>{


    
    const auth = useAuth()
    const onClickLogOut = ()=>{
        auth.logOut()
    }


   

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <Button type="text" onClick={onClickLogOut} >
              Log Out
            </Button>
          ),
        },
      ];


    return (

        <Layout>
            <Header  style={{position:"sticky", top:0, zIndex:"1" ,display: 'flex', alignItems: 'center', justifyContent:"flex-end" }}>
                <div className="demo-logo" />

                    <Dropdown  menu={{items}}  placement="bottomLeft" arrow>  
                        <div  style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <Typography.Text  strong style={{color:"white"}} >{ auth.user?.name || "User" }</Typography.Text>    
                            <Avatar       size="large" icon={<UserOutlined />} />
                        </div>
                    </Dropdown>            
                
                
            </Header>

            <Layout style={{height:"20vh", position: "relative", width:"100%", maxWidth:"100%"}} >
                <Sider width={SLIDER_WIDTH} 
                
                    style={{
                            position:"fixed",
                            left:0,
                            top:"64px",
                            height:"calc(100vh - 64px)",
                            zIndex:1,
                            backgroundColor: "red" }}>

                    <Menu
                        mode="inline"
                        theme="light"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        
                    >

                        <Menu.Item key="1">
                            <Link to="/clients"> Clients </Link>
                        </Menu.Item>

                    </Menu>
                </Sider>
                
                <div  style={{ boxSizing:"border-box", padding: '0 24px 24px', position: "relative",  left:`${SLIDER_WIDTH}px` , width:`calc(100% - ${SLIDER_WIDTH}px)`  , height:"calc(100vh - 64px)" }}>
                
                  

                    <Content
                        style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        
                        width:"100%"
                        }}
                    >
                        {children}
                    </Content>
                </div>
            </Layout>
        </Layout>
    )
}