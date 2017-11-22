import React from 'react'
import { Link } from 'mirrorx'
import { Flex, WhiteSpace } from 'antd-mobile';
import './roompage.css'
const PlaceHolder = props => (
  <div
    style={{
      backgroundColor: '#ebebef',
      color: '#bbb',
      textAlign: 'center',
      height: '30px',
      lineHeight: '30px',
      width: '100%',
    }}
    {...props}
  >Item</div>
);

const FlexExample = () => (
  <div className="flex-container">
    <div className="sub-title">Align</div>
    <Flex justify="center">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex justify="end">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex justify="between">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>

    <WhiteSpace />
    <Flex align="start" >
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline " />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex align="end">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline " />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex align="baseline">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline " />
      <PlaceHolder className="inline" />
    </Flex>
  </div>
);
export default FlexExample;
