import { Avatar, Layout, Typography, Image } from "antd";
import QuantumAvatar from "../../assets/quantum.png";

const { Header } = Layout;
const { Title } = Typography;

const HeaderSection = () => {
  return (
    <Header className="header-wrapper">
      <Avatar size={64} src={<Image src={QuantumAvatar} preview={false} />} />
      <Title level={2}>User Management Dashboard</Title>
    </Header>
  );
};

export default HeaderSection;
