import { useState } from "react";
import Modal from "../../components/Modal";
import axios from "axios";
import { Data } from "../../allDataTransfarObjectStucture/allInterface";
import { urlForFeedbackCreation } from "@/urls/urls";

const Contactus = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleFormDataSubmit = async (data: Data) => {
    try {
      const response = await axios.post(urlForFeedbackCreation, data);
      console.log(response.data);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleModalToggleOnClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <button onClick={handleModalToggleOnClick}>Get Ticket</button>
      <Modal
        display={isModalVisible}
        methodTochange={handleModalToggleOnClick}
        title="Submit your Problem"
        methodToCallAfterSubmit={handleFormDataSubmit}
      />
    </>
  );
};



export default Contactus;
