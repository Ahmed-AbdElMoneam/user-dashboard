import { useState } from "react";
import {
  Button,
  Col,
  Flex,
  List,
  Row,
  Typography,
  Pagination,
  type FormInstance,
} from "antd";
import { ReloadOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import DetailsModal from "../DetailsModal/DetailsModal";
import type { IUser } from "../../types/user";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setPage, setPageSize } from "../../store/usersSlice";
import type { RootState, AppDispatch } from "../../store/store";

const { Title, Paragraph, Text } = Typography;

const DataSection: React.FC<{
  users: IUser[];
  loading: boolean;
  form: FormInstance;
}> = ({ users, loading, form }) => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const { page, pageSize, filteredUsers } = useSelector(
    (state: RootState) => state.users
  );

  const showModal = (user: IUser) => {
    setIsModalOpen(true);
    setCurrentUser(user);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Flex vertical align="stretch">
      <Flex
        justify="space-between"
        align="center"
        className="list-header"
        wrap
        gap={8}
      >
        <Title level={3}>
          <UserOutlined style={{ marginInlineEnd: "8px", color: "#13c2c2" }} />
          User Management
        </Title>
        <Button
          color="cyan"
          variant="solid"
          icon={<ReloadOutlined />}
          iconPosition="end"
          onClick={() => {
            form.resetFields();
            dispatch(fetchUsers());
          }}
          disabled={loading}
        >
          Reload New users
        </Button>
      </Flex>

      <List
        bordered
        dataSource={users}
        pagination={false}
        renderItem={(item) => (
          <List.Item>
            <Row style={{ width: "100%" }}>
              <Col xl={{ span: 8 }} md={{ span: 12 }} span={24}>
                <Paragraph>
                  <Text strong>Full Name:</Text>{" "}
                  {`${item?.name?.title} ${item?.name?.first} ${item?.name?.last}`}
                </Paragraph>
              </Col>
              <Col xl={{ span: 8 }} md={{ span: 12 }} span={24}>
                <Paragraph>
                  <Text strong>Email:</Text> {item?.email}
                </Paragraph>
              </Col>
              <Col span={24}>
                <Paragraph>
                  <Text strong>City / Country:</Text>{" "}
                  {`${item?.location?.city} / ${item?.location?.country}`}
                </Paragraph>
              </Col>
            </Row>
            <Button
              className="user-details-btn"
              color="purple"
              variant="solid"
              icon={<RightOutlined />}
              iconPosition="end"
              onClick={() => showModal(item)}
            >
              User Details
            </Button>
          </List.Item>
        )}
      />

      <Pagination
        current={page}
        pageSize={pageSize}
        total={filteredUsers.length}
        onChange={(p, ps) => {
          dispatch(setPage(p));
          dispatch(setPageSize(ps));
        }}
        style={{ marginTop: 16, alignSelf: "flex-end" }}
      />

      <DetailsModal
        currentUser={currentUser}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
    </Flex>
  );
};

export default DataSection;
