import React from 'react';
//import { useNavigate } from "react-router-dom";
//import Form from 'react-bootstrap/Form';
// React Select Dropdown onChange Event Handler Tutorial
import Table from 'react-bootstrap/Table';

function SelectState() {
 // const navigate = useNavigate();
 // const [selectValue, setSelectValue] = React.useState("");


  // const onChange = (event) => {
  //   const value = event.target.value;
  //   setSelectValue(value);
  //   //  alert(window.location.href);
  //   let path = `${value}-pincode`
  //   navigate(path);
  // };


  return (


    <Table striped bordered hover>

      <tbody>
        <tr>
          <td><a class="text-decoration-none" href='/state/Pincode-Andaman-and-Nicobar-Islands'>Andaman &amp; Nicobar Islands</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Andhra-Pradesh'>Andhra Pradesh</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Arunachal-Pradesh'>Arunachal Pradesh</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Assam'>Assam</a></td>
        </tr>
        <tr>
          <td><a class="text-decoration-none" href='/state/Pincode-Bihar'>Bihar</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Chandigarh'>Chandigarh</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Chhattisgarh'>Chhattisgarh</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Dadra-and-Nagar-Haveli'>Dadra & Nagar Haveli</a></td>
        </tr>
        <tr>
          <td><a class="text-decoration-none" href='/state/Pincode-Daman-and-Diu'>Daman & Diu</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Delhi'>Delhi</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Goa'>Goa</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Gujarat'>Gujarat</a></td>
        </tr>
        <tr>
          <td><a class="text-decoration-none" href='/state/Pincode-Haryana'>Haryana</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Himachal-Pradesh'>Himachal Pradesh</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Jammu-and-Kashmir'>Jammu & Kashmir</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Jharkhand'>Jharkhand</a></td>
        </tr>
        <tr>
          <td><a class="text-decoration-none" href='/state/Pincode-Karnataka'>Karnataka</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Kerala'>Kerala</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Lakshadweep'>Lakshadweep</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Madhya-Pradesh'>Madhya Pradesh</a></td>
        </tr>
        <tr>
          <td><a class="text-decoration-none" href='/state/Pincode-Maharashtra'>Maharashtra</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Manipur'>Manipur</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Meghalaya'>Meghalaya</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Mizoram'>Mizoram</a></td>
        </tr>
        <tr>
          <td><a class="text-decoration-none" href='/state/Pincode-Nagaland'>Nagaland</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Odisha'>Odisha</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Puducherry'>Puducherry</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Punjab'>Punjab</a></td>
        </tr>
        <tr>
          <td><a class="text-decoration-none" href='/state/Pincode-Rajasthan'>Rajasthan</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Sikkim'>Sikkim</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Tamil-Nadu'>Tamil Nadu</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Telangana'>Telangana</a></td>
        </tr>
        <tr>
          <td><a class="text-decoration-none" href='/state/Pincode-Tripura'>Tripura</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Uttar-Pradesh'>Uttar Pradesh</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-Uttarakhand'>Uttarakhand</a></td>
          <td><a class="text-decoration-none" href='/state/Pincode-West-Bengal'>West Bengal</a></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SelectState;