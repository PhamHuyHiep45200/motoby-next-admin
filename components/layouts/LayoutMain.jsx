'use client'
import { itemsLayout } from '@/data/layout';
import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { useRouter } from 'next/navigation';
import React from 'react'

function LayoutMain({children}) {
    const router=useRouter()
    const changeMenu = (e)=>{
        router.push(e.key)
    }
  return (
    <Layout style={{height:'100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={itemsLayout}
          onClick={changeMenu}

        />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutMain