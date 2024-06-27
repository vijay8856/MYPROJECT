import './manageusers.css';
import React, { useState, useEffect } from 'react';
import { _userapiurl } from '../../../Api.url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Manageusers() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  const [filteredUserDetails, setFilteredUserDetails] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(4);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalEntries, setTotalEntries] = useState(0);

  useEffect(() => {
    axios.get(_userapiurl + "fetch?role=user")
      .then((response) => {
        setUserDetails(response.data);
        setTotalEntries(response.data.length);
        applyPagination(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  useEffect(() => {
    applyPagination(userDetails);
  }, [currentPage, userDetails]);

  const applyPagination = (data) => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    setFilteredUserDetails(data.slice(startIndex, endIndex));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredData = userDetails.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTotalEntries(filteredData.length);
    setCurrentPage(1);
    applyPagination(filteredData);
  };

  const handleRowSelect = (event, _id) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, _id]);
    } else {
      setSelectedRows(selectedRows.filter(id => id !== _id));
    }
  };

  const changeStatus = (_id, status) => {
    // Modify this function according to your requirements
    console.log("Selected Rows:", selectedRows);
     // Implement your logic for status change or deletion here
    if (status=='verify')
    {
      let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}}
    axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
      navigate("/manageusers")
    }).catch((error)=>{
    console.log(error);
    });
    }
    else if (status=="block")
    {
      let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}}
    axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
      navigate("/manageusers")
    }).catch((error)=>{
    console.log(error);
    });
    }
    else
    {
      let deleteDetails={"data":{"_id":_id}};
    axios.delete(_userapiurl+"delete",deleteDetails).then((response)=>{
      navigate("/manageusers")
    }).catch((error)=>{
    console.log(error);
    });
    }
   
  };

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="content">
        <div id="about" className="about ">
          <div className="container" style={{ "textAlign": "center" }}>
            <div className="titlepage">
              <h3 style={{ "textDecoration": "underline" }}>View And Manage Users Details</h3>
              <div>
                <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
              </div>
              <center>
                <table className="table table-bordered" >
                  <thead>
                    <tr>
                      <th>RegID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>Gender</th>
                      <th>Info</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUserDetails.map((row) => (
                      <tr key={row._id}>
                        <td><input type="checkbox" onChange={(event) => handleRowSelect(event, row._id)} /></td>
                        <td>{row._id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.mobile}</td>
                        <td>{row.address}</td>
                        <td>{row.city}</td>
                        <td>{row.gender}</td>
                        <td>{row.info}</td>
                        <td>
                          {row.status === 1 && <font color="green">Verified</font> }
                          {row.status==0 && <font color="red">Not Verified</font>} 
                        </td>
                        <td>
                          {row.status === 1 &&
                            <font onClick={() => { changeStatus(row._id, 'block') }} color="blue">Change Status</font>   }
                            {row.status === 0&& <font onClick={() => { changeStatus(row._id, 'verify') }} color="blue">Change Status</font>}
                        
                          <br />
                          <font onClick={() => { changeStatus(row._id, 'delete') }} color="red">Delete</font>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div>
                  <span>Showing {((currentPage - 1) * entriesPerPage) + 1} to {Math.min(((currentPage - 1) * entriesPerPage) + entriesPerPage, totalEntries)} of {totalEntries} entries</span>
                  <br />
                  <span>Page:</span>
                  {Array.from({ length: Math.ceil(totalEntries / entriesPerPage) }, (_, i) => (
                    <button key={i + 1} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                  ))}
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manageusers;

