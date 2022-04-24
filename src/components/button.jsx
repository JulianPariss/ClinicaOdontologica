import React from 'react';
import 'antd/dist/antd.css';
import { Button, Tooltip } from 'antd';
import { RedoOutlined  } from '@ant-design/icons';

export default () => (
    <Tooltip title="search">
        <Button shape="default" icon={<RedoOutlined />} size="large" style={{width: "100vw"}}/>
    </Tooltip>
)