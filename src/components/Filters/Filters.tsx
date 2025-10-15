import { useState } from "react";
import {
  Typography,
  Collapse,
  type CollapseProps,
  Form,
  Input,
  Button,
  Flex,
  Row,
  Col,
  type FormInstance,
} from "antd";
import {
  CaretRightOutlined,
  ControlOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { filterUsers, clearUsersFilter } from "../../store/usersSlice";
import type { AppDispatch } from "../../store/store";

const { Text } = Typography;

const Filters: React.FC<{
  loading: boolean;
  form: FormInstance;
}> = ({ loading, form }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [fullName, setFullName] = useState<string>("");

  const onFinish = (values: { full_name: string }) => {
    dispatch(filterUsers(values.full_name));
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <div>
          <ControlOutlined style={{ color: "#13c2c2" }} />
          <Text strong style={{ marginInlineStart: "8px" }}>
            Filters
          </Text>
        </div>
      ),
      children: (
        <Form
          form={form}
          name="filter-form"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row>
            <Col lg={{ span: 8 }} sm={{ span: 12 }} span={24}>
              <Form.Item<string> label="Full Name" name="full_name">
                <Input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  prefix={<UserOutlined />}
                />
              </Form.Item>
            </Col>
          </Row>

          <Flex justify="flex-end" gap={8}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading || fullName.trim().length === 0}
            >
              Filter
            </Button>

            <Button
              onClick={() => {
                form.resetFields();
                setFullName("");
                dispatch(clearUsersFilter());
              }}
              loading={loading}
              disabled={loading}
            >
              Clear
            </Button>
          </Flex>
        </Form>
      ),
    },
  ];

  return (
    <Collapse
      items={items}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      expandIconPosition="end"
    />
  );
};

export default Filters;
