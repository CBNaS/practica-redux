import React from "react";
import { Row, Col, Card } from "antd";
import { connect } from "react-redux";
import { addAction, substractAction } from "../redux/actions/actions";

const Home = props => {
  console.log(props.number);
  return (
    <Row gutter={48} type="flex" justify="space-around" align="middle">
      <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
        <Card title={props.number}>
          <p>{props.number}</p>
          <button type="primary">Agregar</button>
          <button type="secondary" />
        </Card>
      </Col>
      <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
        <Card title="Card title">
          <p>{props.number}</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return { number: state.mathReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch(addAction()),
    decrement: () => dispatch(substractAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
