import React from 'react';
import './rightBox.css';
import {MailOutlined, } from '@ant-design/icons';
import { Select } from 'antd';
import { RiUserUnfollowLine, RiUserFollowLine ,RiSpeakLine,RiPriceTag3Line} from 'react-icons/ri';
import {BookOutlined, PlayCircleOutlined} from '@ant-design/icons';

const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

// const defaultValue = {
//   value: 'opportunity browsing',
//   label: (
//     <div>
//       <span>Opportunity Browsing</span> <span>243</span>
//     </div>
//   ),
// };

// Modify the label prop to only show the first span
const modifiedDefaultValue = {
  value: 'opportunity browsing',
  label: <span>Opportunity Browsing</span>,
};

// const value ={
//   value:'vidoe',
//   label: <span>Move To Video Interview</span>
// }


const RightBox: React.FC = () => {
  return (
    <div className='main'>
    <div className="container">
    <Select
  labelInValue
  defaultValue={modifiedDefaultValue}
  style={{ width: 500 }}
  onChange={handleChange}
  options={[
    {
      value: 'applied',
      label: <div className='option'><span>Applied</span> <span >100</span></div>,
    },
    {
      value: 'shortlisted',
      label: <div className='option'><span>Shortlisted</span> <span >101</span></div>,
    },
    {
      value: 'technical',
      label: <div className='option'><span>Shortlisted</span> <span >101</span></div>,
    },
    {
      value: 'opportunity',
      label: <div className='option'><span>Opportunity Browsing</span> <span >243</span></div>,
    },
    {
      value: 'video interview I',
      label: <div className='option'><span>Video Interview I</span> <span >25</span></div>,
    },
    {
      value: 'video interview II',
      label: <div className='option'><span>Video Interview II</span> <span >25</span></div>,
    },
    {
      value: 'video interview III',
      label: <div className='option'><span>Video Interview III</span> <span >25</span></div>,
    },
    {
      value: 'other',
      label: <div className='option'><span>Other</span> <span >25</span></div>,
    },
    {
      value: 'withdraw',
      label: <div className='option'><span>Withdraw</span> <span >25</span></div>,
    },
  ]}
  className="custom-select"
/>


<div className="icons">
  <RiPriceTag3Line style={{ fontSize: '20px' }} />
  <RiUserUnfollowLine style={{ fontSize: '20px' }} />
  <RiUserFollowLine style={{ fontSize: '20px' }} />
  <RiSpeakLine style={{ fontSize: '20px' }} />
  <MailOutlined style={{ fontSize: '20px' }} />
</div>



<select className="select2">
  <option value="" selected>Move To Video Interview  |</option>
</select>






</div>

    <div className="right-box">
        <div className='candidate'>
            <div className="left">
                <input type="checkbox" style={{transform: 'scale(1.5)'}} />
                <span style={{color: "#5e81e2", fontWeight:"bolder"}}>247 Candidates</span>
            </div>

            <div className="right">
                <span style={{color: "#5e81e2"}}>Qualified</span>
                <span className='separator'>|</span>
                <span>Task</span>
                <span className='task-number'>25</span>
                <span className='separator'>|</span>
                <span>Disqualified</span>
                <span className='disqualified-number'>76</span>
            </div>

        </div>
        <div className="people">

            <div className="checkbox">
                <input type="checkbox" style={{transform: 'scale(1.5)'}} />
            </div>

            <div className="name">
                <span>AS</span>
            </div>

            <div className="details">
                <div className="infos">
                    <span style={{fontWeight:"bolder", fontSize:"25px"}}>Aaliyah Sanderson</span>
                </div>

                <div className="infos">
                    <span style={{fontWeight:"bold"}}>Riyadh, Saudi Arabia</span>
                </div>

                <div className="infos">
                    <span>Bachelor - Cambridge University (2023-2023)</span>
                </div>

                <div className="infos">
                    <span style={{color:"#1d4ed8"}}>#top_candidate #top_candidate</span>
                </div>

        <div className="more-details">

          <div className="extra-infoss">
            <span>New York</span>
          </div>

          <div className="extra-infos">
            <span>Marketing</span>
          </div>

          <div className="extra-infos">
            <span>London</span>
          </div>

        </div>
      </div>
    </div>
        <div className="people">

            <div className="checkbox">
                <input type="checkbox" style={{transform: 'scale(1.5)'}} />
            </div>

            <div className="name">
                <span>AS</span>
            </div>

            <div className="details">
                <div className="infos">
                    <span style={{fontWeight:"bolder", fontSize:"25px"}}>John Doe</span>
                </div>

                <div className="infos">
                    <span style={{fontWeight:"bold"}}>Boston, USA</span>
                </div>

                <div className="infos">
                    <span>Bachelor - MIT (2023-2020)</span>
                </div>

                <div className="infos">
                    <span style={{color:"#1d4ed8"}}>#top_candidate #top_candidate</span>
                </div>

        <div className="more-details">

          <div className="extra-infos">
            <span>New York</span>
          </div>

          <div className="extra-infos">
            <span>Marketing</span>
          </div>

          <div className="extra-infos">
            <span>London</span>
          </div>

        </div>
      </div>
    </div>
        <div className="people">

            <div className="checkbox">
                <input type="checkbox" style={{transform: 'scale(1.5)'}} />
            </div>

            <div className="name">
                <span>AS</span>
            </div>

            <div className="details">
                <div className="infos">
                    <span style={{fontWeight:"bolder", fontSize:"25px"}}>Thomas Matt</span>
                </div>

                <div className="infos">
                    <span style={{fontWeight:"bold"}}>Edinburgh, UK</span>
                </div>

                <div className="infos">
                    <span>Bachelor - Harvard University (2023-2023)</span>
                </div>

                <div className="infos">
                    <span style={{color:"#1d4ed8"}}>#top_candidate #top_candidate</span>
                </div>

        <div className="more-details">

          <div className="extra-infos">
            <span>New York</span>
          </div>

          <div className="extra-infos">
            <span>Marketing</span>
          </div>

          <div className="extra-infos">
            <span>London</span>
          </div>

        </div>
      </div>
    </div>
        <div className="people">

            <div className="checkbox">
                <input type="checkbox" style={{transform: 'scale(1.5)'}} />
            </div>

            <div className="name">
                <span>AS</span>
            </div>

            <div className="details">
                <div className="infos">
                    <span style={{fontWeight:"bolder", fontSize:"25px"}}>Kamilia Smith</span>
                </div>

                <div className="infos">
                    <span style={{fontWeight:"bold"}}>London, UK</span>
                </div>

                <div className="infos">
                    <span>Bachelor - Boston University (2023-2023)</span>
                </div>

                <div className="infos">
                    <span style={{color:"#1d4ed8"}}>#top_candidate #top_candidate</span>
                </div>

        <div className="more-details">

          <div className="extra-infos">
            <span>New York</span>
          </div>

          <div className="extra-infos">
            <span>Marketing</span>
          </div>

          <div className="extra-infos">
            <span>London</span>
          </div>

        </div>
      </div>
    </div>
        <div className="people">

            <div className="checkbox">
                <input type="checkbox" style={{transform: 'scale(1.5)'}} />
            </div>

            <div className="name">
                <span>AS</span>
            </div>

            <div className="details">
                <div className="infos">
                    <span style={{fontWeight:"bolder", fontSize:"25px"}}>Roy Jade</span>
                </div>

                <div className="infos">
                    <span style={{fontWeight:"bold"}}>Cambridge, UK</span>
                </div>

                <div className="infos">
                    <span>Bachelor - Yale (2023-2023)</span>
                </div>

                <div className="infos">
                    <span style={{color:"#1d4ed8"}}>#top_candidate #top_candidate</span>
                </div>

        <div className="more-details">

          <div className="extra-infos">
            <span>New York</span>
          </div>

          <div className="extra-infos">
            <span>Marketing</span>
          </div>

          <div className="extra-infos">
            <span>London</span>
          </div>

        </div>
      </div>
    </div>
        <div className="people">

            <div className="checkbox">
                <input type="checkbox" style={{transform: 'scale(1.5)'}} />
            </div>

            <div className="name">
                <span>AS</span>
            </div>

            <div className="details">
                <div className="infos">
                    <div className='infos-left'>
                    <span style={{fontWeight:"bolder", fontSize:"25px"}}>Ahmed Salman</span>
                    </div>
                    <div className='infos-right'>
                    <div className='ldiv'>
                      <div className='infos-licon'>
                      <PlayCircleOutlined />
                      </div>
                      <span>4</span>
                    </div>
                    <div className='rdiv'>
                      <div className='infos-ricon'>
                      <BookOutlined />
                      </div>
                      <span>5 Programs</span>
                    </div>
                    
                    </div>
                </div>

                <div className="infos">
                    <span style={{fontWeight:"bold"}}>New York, USA</span>
                </div>

                <div className="infos">
                    <span>Bachelor - Cambridge Cambridge (2023-2023)</span>
                </div>

                <div className="infos">
                    <span style={{color:"#1d4ed8"}}>#top_candidate #top_candidate</span>
                </div>

        <div className="more-details">

          <div className="extra-infos">
            <span>New York</span>
          </div>

          <div className="extra-infos">
            <span>Marketing</span>
          </div>

          <div className="extra-infos">
            <span>London</span>
          </div>

        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default RightBox;