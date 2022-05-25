import { Col, Row } from 'antd';
import FormComp222 from './form';
import TableComp26 from './Table';

const ContentComp58 = () => {
    return (
        <>
        <TableComp26 />
    <Row>
    <Col span={12}></Col>
    <Col span={12}>
      <FormComp222 />
    </Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
    <Row>
    <Col span={12}>col-12</Col>
    <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
    </>
    );
};

export default ContentComp58;
