import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './ViewModal.scss';

const ViewModal = (props) => {
  const { show, content, closeModal } = props;

  return (
    <>
      <Modal title="查看待办事项" visible={show} footer={null}>
        <p>
          <span>时间：</span>
          <span>{content.id}</span>
        </p>
        <p>
          <span>内容：</span>
          <span>{content.content}</span>
        </p>
        <p>
          <span>状态：</span>
          <span>{content.completed ? '完成' : '未完成'}</span>
        </p>
        <div className="btn">
          <Button type="primary" onClick={closeModal}>
            确定
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ViewModal;
