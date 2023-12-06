import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { HiOutlineCalendar, HiOutlineHome, HiOutlinePencilAlt, HiOutlinePlus, HiOutlinePlusSm, HiOutlineUsers } from "react-icons/hi";
import { FcPlus } from "react-icons/fc";
import DataUser from "./DataUser";
import DataActivity from "./DataActivity";
import AddUserToHome from "../../../components/modal/User/AddUserToHome";
import axios from "axios";

const TABLE_HEAD = ["ลำดับ", "รหัส", "ชื่อ", "เลือก"];

const TABLE_ROWS = [
  {
    name: "1",
    job: "U00001",
    date: "User-01",
  },
  {
    name: "2",
    job: "U00002",
    date: "User-02",
  },
  {
    name: "3",
    job: "U00003",
    date: "User-03",
  },
];

const ManageUser = () => {
  const [statusBtn , setStatusBtn] = useState(1)
  const [data, setData] = useState({})

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const handleBtnPage = (number)=>{
    setStatusBtn(number)
  }

const fetchDataMyUser = async()=>{
try {
  const res = await axios.get(`${import.meta.env.VITE_APP_API}/sharehouse/usere-search`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,

    }
  })
  console.log(res.data);
} catch (error) {
  console.log(error);
}
}

useEffect(()=>{
  fetchDataMyUser()
},[])

  return (
    <div>
      <AddUserToHome handleOpen={handleOpen} open={open}  />

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="ring-2 ring-gray-800/5 w-full md:w-1/3">
          <CardBody>
            <div className="flex flex-col md:flex-row   md:justify-between">
              <h2 className="text-lg text-black font-bold flex items-center gap-3">
                <HiOutlineUsers />
                ลูกแชร์ (3)
              </h2>
              <Button className="text-[14px] flex items-center gap-2  text-sm" color="purple" size="sm" variant="filled" onClick={handleOpen}>
                <HiOutlinePlusSm size={20}   />เพิ่มลูกแชร์ใหม่
              </Button>
            </div>
            <div className="mt-3">
              <Input className="" label="ค้นหา รหัส หรือ ชื่อลูกค้า" color="purple" />
            </div>

            <ul className="mt-5 overflow-y-scroll">
                {TABLE_ROWS.map((item, index) => (
                  <li className=" hover:bg-gray-200 py-2 flex justify-between items-center" key={index}>
                    {`${item.date} (${item.job})`}
                    <FcPlus className=" cursor-pointer" onClick={() => handleClick_1(index)} size={23} />
                  </li>
                ))}
              </ul>



     
          </CardBody>
        </Card>

        <div className="w-full md:w-2/3 ">
          <div className="flex flex-row gap-4 justify-center md:justify-start">
            <Button color="blue" size="sm" className=" text-sm flex items-center gap-2 " onClick={()=>handleBtnPage(1)}><HiOutlineHome size={20} /> ข้อมูลลูกแชร์</Button>
            <Button color="green" size="sm" className=" text-sm flex items-center gap-2" onClick={()=>handleBtnPage(2)}> <HiOutlineCalendar size={20}/> ข้อมูลกิจกรรม</Button>

          </div>
          <Card className="ring-2  ring-gray-800/5 mt-6 ">
            <CardBody>
              <div>
                {statusBtn === 1 && <DataUser data={data}/>}
                {statusBtn === 2 && <DataActivity/>}

              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
