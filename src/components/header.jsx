import { PageHeader } from 'antd';
import { Link } from 'react-router-dom';

export default (props) => (
    <PageHeader
        className="site-page-header"
        title="Clinica"
        subTitle= {props.subTitle}
    />
);