import { useEffect } from "react";
import { Form, Layout, notification, Spin } from "antd";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import FooterSection from "./components/FooterSection/FooterSection";
import Filters from "./components/Filters/Filters";
import DataSection from "./components/DataSection/DataSection";
import "./styles/global.scss";
import "@ant-design/v5-patch-for-react-19";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/usersSlice";
import type { RootState, AppDispatch } from "./store/store";

const { Content } = Layout;

function App() {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, loading, error, page, pageSize } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      api.error({
        message: "Error",
        description: error,
        placement: "topRight",
      });
    }
  }, [error, api]);

  return (
    <Layout className="layout-wrapper">
      {contextHolder}
      <HeaderSection />
      <Content className="content-wrapper">
        <Filters loading={loading} form={form} />
        <Spin spinning={loading}>
          <DataSection
            users={filteredUsers.slice((page - 1) * pageSize, page * pageSize)}
            loading={loading}
            form={form}
          />
        </Spin>
      </Content>
      <FooterSection />
    </Layout>
  );
}

export default App;
