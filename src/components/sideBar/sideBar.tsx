import React, { useState } from 'react';
import {
  HomeOutlined,
  TeamOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  FileTextOutlined,
  BookOutlined,
  HeartOutlined,
  DownCircleOutlined,
  SettingOutlined, LeftOutlined
} from '@ant-design/icons';
import './sideBar.css';

const SideBar: React.FC = () => {
    const [activeIcon, setActiveIcon] = useState<string | null>('icon'); // Set 'icon' as the default active icon

    const handleClick = (iconName: string) => {
        setActiveIcon(iconName);
    };

    return (
        <>
            <div className="sidebar">
                <DownCircleOutlined
                    className={`icon1 ${activeIcon === 'icon1' ? 'active' : ''}`}
                    onClick={() => handleClick('icon1')}
                />
                <HomeOutlined
                    className={`icon ${activeIcon === 'icon' ? 'active' : ''}`}
                    onClick={() => handleClick('icon')}
                />
                <TeamOutlined
                    className={`icon ${activeIcon === 'icon2' ? 'active' : ''}`}
                    onClick={() => handleClick('icon2')}
                />
                <CalendarOutlined
                    className={`icon ${activeIcon === 'icon3' ? 'active' : ''}`}
                    onClick={() => handleClick('icon3')}
                />
                <ShareAltOutlined
                    className={`icon ${activeIcon === 'icon4' ? 'active' : ''}`}
                    onClick={() => handleClick('icon4')}
                />
                <FileTextOutlined
                    className={`icon ${activeIcon === 'icon5' ? 'active' : ''}`}
                    onClick={() => handleClick('icon5')}
                />
                <BookOutlined
                    className={`icon ${activeIcon === 'icon6' ? 'active' : ''}`}
                    onClick={() => handleClick('icon6')}
                />
                <HeartOutlined
                    className={`icon ${activeIcon === 'icon7' ? 'active' : ''}`}
                    onClick={() => handleClick('icon7')}
                />
                <LeftOutlined
                    className={`icon4 ${activeIcon === 'icon8' ? 'active' : ''}`}
                    onClick={() => handleClick('icon8')}
                />
                <SettingOutlined
                    className={`icon2 ${activeIcon === 'icon9' ? 'active' : ''}`}
                    onClick={() => handleClick('icon9')}
                />
                <DownCircleOutlined
                    className={`icon3 ${activeIcon === 'icon10' ? 'active' : ''}`}
                    onClick={() => handleClick('icon10')}
                />
            </div>
        </>
    );
};

export default SideBar;


LeftOutlined