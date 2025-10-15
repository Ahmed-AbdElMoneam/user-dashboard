import { Avatar, Modal, Image, Flex, Typography } from "antd";
import type { IUser } from "../../types/user";

const { Paragraph, Text } = Typography;

const DetailsModal: React.FC<{
  currentUser: IUser | undefined;
  isModalOpen: boolean;
  handleCancel: () => void;
}> = ({ currentUser, isModalOpen, handleCancel }) => {
  return (
    <Modal
      title={`${currentUser?.name?.title} ${currentUser?.name?.first} ${currentUser?.name?.last}`}
      footer={null}
      centered
      destroyOnHidden={true}
      open={isModalOpen}
      onCancel={handleCancel}
    >
      <Flex
        className="details-modal"
        justify="flex-start"
        align="flex-start"
        gap="large"
      >
        <Avatar
          size={128}
          src={
            <Image
              src={currentUser?.picture?.large}
              preview={false}
              alt="avatar"
            />
          }
        />

        <div>
          <Paragraph>
            <Text strong>Full Name:</Text>{" "}
            {`${currentUser?.name?.title} ${currentUser?.name?.first} ${currentUser?.name?.last}`}
          </Paragraph>
          <Paragraph>
            <Text strong>Email:</Text> {currentUser?.email}
          </Paragraph>
          <Paragraph>
            <Text strong>Phone:</Text> {currentUser?.phone}
          </Paragraph>
          <Paragraph>
            <Text strong>Location:</Text>{" "}
            {`${currentUser?.location?.city}-${currentUser?.location?.state}-${currentUser?.location?.country}`}
          </Paragraph>
        </div>
      </Flex>
    </Modal>
  );
};

export default DetailsModal;
