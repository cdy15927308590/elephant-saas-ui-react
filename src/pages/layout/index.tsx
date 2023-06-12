import { Layout } from 'antd'
const { Header, Sider, Content } = Layout

const App = () => (
    <Layout>
        <Sider>Sider</Sider>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
        </Layout>
    </Layout>
)

export default App
