import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

const FooterSection = () => {
  return (
    <Footer className="footer-wrapper">
      Developed For QuantumHR © 2025. <Text strong>Version 1.0.0.0</Text>
    </Footer>
  );
};

export default FooterSection;
