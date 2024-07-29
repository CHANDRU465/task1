import React, { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { SiKlarna } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const ContactTable = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAllChange = (e) => {
    const { checked } = e.target;
    setSelectAll(checked);
    setSelectedRows(checked ? data.map((item) => item.id) : []);
  };

  const handleRowCheckboxChange = (e, id) => {
    const { checked } = e.target;
    setSelectedRows((prevState) =>
      checked ? [...prevState, id] : prevState.filter((rowId) => rowId !== id)
    );
  };

  const data = [
    {
      id: 1,
      person: "Janny Wielson",
      company: "Facebook",
      companyIcon: (
        <FaFacebook style={{ marginRight: "10px", color: "#1b95e4" }} />
      ),

      leadSource: "Advertisement",
      callingIcon: (
        <LuPhone className="contact-icon" style={{ marginRight: "10px" }} />
      ),
      mailIcon: <MdOutlineMailOutline className="contact-icon" />,
    },
    {
      id: 2,
      person: " Kristin Watson",
      company: "Klarna",
      companyIcon: <SiKlarna style={{ marginRight: "10px" }} />,
      leadSource: "	Online Store",
      callingIcon: (
        <LuPhone className="contact-icon" style={{ marginRight: "10px" }} />
      ),
      mailIcon: <MdOutlineMailOutline className="contact-icon" />,
    },
    // Add more rows as needed
  ];
  return (
    <div className="contact-container">
      <div className="contact-header">
        <p className="contact-content">
          <CiUser style={{ fontSize: "18px" }} /> Contacts
        </p>
        <div className="Search-header">
          <CiSearch style={{ fontSize: "18px" }} />
          <input
            type="search"
            className="search-bar"
            placeholder="Search Contact.."
            alt="search"
          />
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                />
              </th>
              <th>Person</th>
              <th>Company</th>
              <th>Lead Source</th>
              <th>Contact Info</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={(e) => handleRowCheckboxChange(e, row.id)}
                  />
                </td>
                <td>
                  <FaUserCircle style={{ marginRight: "10px" }} />
                  {row.person}
                </td>
                <td>
                  {row.companyIcon}
                  {row.company}
                </td>
                <td>
                  <p className="table-lead-source">{row.leadSource}</p>
                </td>
                <td>
                  {row.callingIcon} {row.mailIcon}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
