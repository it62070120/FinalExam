import React, { useState } from 'react'; 
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () =>{
    const [curriculums, setCurriculum] = useState([]);
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedTerm, setSelectedTerm] = useState(null);
    const [selectedCurriculum, setSelectedCurriculum] = useState(null);
    const [selectedOther, setSelectedOther] = useState(null);


    const faculty = [
        { value: 'อุตสาหกรรมอาหาร', label: 'อุตสาหกรรมอาหาร' },
        { value: 'ครุศาสตร์อุตสาหกรรมและเทคโนโลยี', label: 'ครุศาสตร์อุตสาหกรรมและเทคโนโลยี' },
        { value: 'แพทยศาสตร์', label: 'แพทยศาสตร์' },
        { value: 'สถาปัตยกรรม ศิลปะและการออกแบบ', label: 'สถาปัตยกรรม ศิลปะและการออกแบบ' },
        { value: 'เทคโนโลยีการเกษตร', label: 'เทคโนโลยีการเกษตร' },
        { value: 'เทคโนโลยีสารสนเทศ', label: 'เทคโนโลยีสารสนเทศ' },
        { value: 'เทคโนโลยีและนวัตกรรมวัสดุ', label: 'เทคโนโลยีและนวัตกรรมวัสดุ' },
        { value: 'วิทยาเขตชุมพรเขตรอุดมศักดิ์', label: 'วิทยาเขตชุมพรเขตรอุดมศักดิ์' },
        { value: 'บริหารธุรกิจ', label: 'บริหารธุรกิจ' },
        { value: 'ศิลปศาสตร์', label: 'ศิลปศาสตร์' },
        { value: 'วิศวกรรมศาสตร์', label: 'วิศวกรรมศาสตร์' },
        { value: 'นวัตกรรมการผลิตขั้นสูง', label: 'นวัตกรรมการผลิตขั้นสูง' },
        { value: 'วิศวกรรมสังคีต', label: 'วิศวกรรมสังคีต' },
    ];
    const project = [];
    const term = [];
    const curriculum = [];
    const other = [];


    return(
        <div className="App" style={{ backgroundColor: "#73BBA9" }}>
          <div className='container' style={{ padding: "5%" }}>
            <h3 style={{fontSize: "30px"}}>ระบบรับสมัครนักศึกษาระดับปริญญาโท</h3>
            <h3 style={{fontSize: "30px"}}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h3>

            <div className="row" style={{ backgroundColor: "#4D7D71", padding: "2%" }}>
                <h4>ค้นหาหลักสูตรที่เปิด</h4>
                <div className="row" style={{ backgroundColor: "#fff", padding: "2%" }}>
                    <div className="col" style={{ padding: "2%" }}>
                        <label>ค้นหา 'คณะ'</label>
                        <Select isMulti options={faculty} className="basic-multi-select" defaultValue={ selectedFaculty } onChange={ setSelectedFaculty } />
                        <label>ค้นหา 'โครงการ'</label>
                        <Select isMulti options={project} className="basic-multi-select" defaultValue={ selectedProject } onChange={ setSelectedProject } />
                    </div>
                    <div className="col" style={{ padding: "2%" }}>
                        <label>ค้นหา 'รอบรับสมัคร'</label>
                        <Select isMulti options={term} className="basic-multi-select" defaultValue={ selectedTerm } onChange={ setSelectedTerm } />
                        <label>ค้นหาหลักสูตร ไทย / นานาชาติ</label>
                        <Select isMulti options={curriculum} className="basic-multi-select" defaultValue={ selectedCurriculum } onChange={ setSelectedCurriculum } />
                    </div>
                    <label>คำค้นหาเพิ่มเติม (Enter เพื่อแยกคำ) [ระบบจะค้นจากชื่อคณะ,หลักสูตร]</label>
                    <Select isMulti options={other} className="basic-multi-select" defaultValue={ selectedOther } onChange={ setSelectedOther } />
                </div>
            </div>
            <div className="row" style={{ backgroundColor: "#fff" }}>
                <h3 style={{fontSize: "30px"}}>ผลการค้นหา : { curriculums.length } รายการ</h3>
            </div>
            <div className="row" style={{ backgroundColor: "#D1E9E3" }}>
                <h2 style={{fontSize: "30px"}}><b>กทม.</b></h2>
                <label style={{ color: 'red' }}>หมายเหตุ</label>
                <label style={{ color: 'red' }}>กรณีเปลี่ยนสาขาวิชาที่สมัครหรืออันดับหรือโครงการที่สมัคร ต้องสมัครใหม่ และชำระเงินค่าสมัครใหม่เท่านั้น โดยสถาบันฯ จะถือว่าการสมัครครั้งสุดท้ายที่มีการชําระเงินค่าสมัครเรียบร้อยแล้วเป็นครั้งที่ต้องการเข้าสอบ และครั้งที่สมัครก่อนหน้าจะถือเป็นโมฆะ แม้ว่าจะชําระเงินค่าสมัครแล้วก็ตาม</label>
            </div>
          </div>
      </div>
    )
}

export default Home;