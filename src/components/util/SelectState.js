import React from 'react';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
// React Select Dropdown onChange Event Handler Tutorial
import Table from 'react-bootstrap/Table';

function SelectState() {
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = React.useState("");
  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  //  alert(window.location.href);
    let path =  `${value}-pincode`
    navigate(path);
  };


  return (


<Table striped bordered hover>
      
      <tbody>
        <tr>
          <td><a class="text-decoration-none" href='/state/PINCODE-Andaman-and-Nicobar-Islands'>Andaman &amp; Nicobar Islands</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Andhra-Pradesh'>Andhra Pradesh</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Arunachal-Pradesh'>Arunachal Pradesh</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Assam'>Assam</a></td>
        </tr>
        <tr>
        <td><a class="text-decoration-none" href='/state/PINCODE-Bihar'>Bihar</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Chandigarh'>Chandigarh</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Chhattisgarh'>Chhattisgarh</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Dadra-and-Nagar-Haveli'>Dadra & Nagar Haveli</a></td>
        </tr>
        <tr>
          <td><a class="text-decoration-none" href='/state/PINCODE-Daman-and-Diu'>Daman & Diu</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Delhi'>Delhi</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Goa'>Goa</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Gujarat'>Gujarat</a></td>
        </tr>
        <tr>
          <td><a class="text-decoration-none" href='/state/PINCODE-Haryana'>Haryana</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Himachal-Pradesh'>Himachal Pradesh</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Jammu-and-Kashmir'>Jammu & Kashmir</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Jharkhand'>Jharkhand</a></td>
        </tr>
        <tr>
          <td><a class="text-decoration-none" href='/state/PINCODE-Karnataka'>Karnataka</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Kerala'>Kerala</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Lakshadweep'>Lakshadweep</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Madhya-Pradesh'>Madhya Pradesh</a></td>
        </tr>


        <tr>
          <td><a class="text-decoration-none" href='/state/PINCODE-Maharashtra'>Maharashtra</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Manipur'>Manipur</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Meghalaya'>Meghalaya</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Mizoram'>Mizoram</a></td>
        </tr>


        <tr>
          <td><a class="text-decoration-none" href='/state/PINCODE-Nagaland'>Nagaland</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Odisha'>Odisha</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Puducherry'>Puducherry</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Punjab'>Punjab</a></td>
        </tr>


        <tr>
          <td><a class="text-decoration-none" href='/state/PINCODE-Rajasthan'>Rajasthan</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Sikkim'>Sikkim</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Tamil-Nadu'>Tamil Nadu</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Telangana'>Telangana</a></td>
        </tr>



        <tr>
          <td><a class="text-decoration-none" href='/state/PINCODE-Tripura'>Tripura</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Uttar-Pradesh'>Uttar Pradesh</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-Uttarakhand'>Uttarakhand</a></td>
          <td><a class="text-decoration-none" href='/state/PINCODE-West-Bengal'>West Bengal</a></td>
        </tr>



      </tbody>
    </Table>













  );
}

export default SelectState;