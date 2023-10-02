import React from 'react';
import "./leftBox.css";
import {SearchOutlined, FileTextOutlined, DownOutlined,ExclamationCircleOutlined} from '@ant-design/icons';

const LeftBox: React.FC = () => {
  return (
    <div className="left-box">
      <div className="search-bar">
        <SearchOutlined />
        <input type="text" placeholder="Search by name, edu, exp or #tag" className='search'/>
        <ExclamationCircleOutlined className='right-icon' />
      </div>
      <div className="filter">
        <span>Filter</span>
        <span>0 selected</span>
      </div>
      <div className="notebook">
        <div className="info">
            <FileTextOutlined className='note-icon'/>
            <span>Personal Information</span>
        </div>
        <DownOutlined className='down-icon'/>
        </div>
      <div className="notebook">
        <div className="info">
            <FileTextOutlined className='note-icon'/>
            <span>Education</span>
        </div>
        <DownOutlined className='down-icon'/>
        </div>
      <div className="notebook">
        <div className="info">
            <FileTextOutlined className='note-icon'/>
            <span>Work Experience</span>
        </div>
        <DownOutlined className='down-icon'/>
        </div>
      <div className="notebook">
        <div className="info">
            <FileTextOutlined className='note-icon'/>
            <span>Alter Activity</span>
        </div>
        <DownOutlined className='down-icon'/>
        </div>
      <div className="advanced">
        <div className="info">
            <FileTextOutlined className='note-icon'/>
            <span>Advanced Filter</span>
        </div>
        </div>
    </div>
  );
}

export default LeftBox;
