import { useState } from "react";
import style from "../styles/Modal.module.css";
import { Data } from "../allDataTransfarObjectStucture/allInterface"
import { Topic } from "../allDataTransfarObjectStucture/allEnums";

const Modal = (props: props) => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userSubject, setUserSubject] = useState<string>("");
  const [userDescription, setUserDescription] = useState<string>("");
  const [userTopic, setUserTopic] = useState<string>(Topic.PRODUCT);

  const handleSubmitFeedbackForm = () => {
    const data: Data = {
      email: userEmail,
      subject: userSubject,
      topic: userTopic as keyof typeof Topic,
      description: userDescription,
    };
    setUserDescription("");
    setUserEmail("");
    setUserSubject("");
    setUserTopic(Topic.PRODUCT);
    props.methodTochange();
    props.methodToCallAfterSubmit(data);
  };

  return (
    <div
      className={props.display ? `${style.container}` : `${style.notVisible}`}
    >
      <div className={style.main_modal}>
        <div className={style.heading}>
          <h1 className={style.title}>{props.title}</h1>
          <span
            className={style.modalCloseButton}
            onClick={props.methodTochange}
          >
            &times;
          </span>
        </div>
        <div>
          <div className={style.modalForm}>
            <div>
              <label className={style.fieldLabel}>Email: </label>
              <input
                className={style.fieldInput}
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
                type="email"
              />
            </div>
            <div>
              <label className={style.fieldLabel}>Subject</label>
              <input
                className={style.fieldInput}
                value={userSubject}
                onChange={(event) => setUserSubject(event.target.value)}
                type="text"
              />
            </div>
            <div>
              <label className={style.fieldLabel}>Related To: </label>

              <select
                name="cars"
                id="cars"
                className={style.fieldInput}
                onChange={(event) => setUserTopic(event.target.value)}
              >
                <option value={Topic.TECHNICAL}>TECHNICAL</option>
                <option value={Topic.PRODUCT}>PRODUCT</option>
              </select>
            </div>
            <div>
              <label className={style.fieldLabel}>Description: </label>
              <textarea
                className={style.fieldTextArea}
                value={userDescription}
                onChange={(event) => setUserDescription(event.target.value)}
              />
            </div>
            <button
              className={style.formSubmitButton}
              onClick={handleSubmitFeedbackForm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface props {
  display: boolean;
  methodTochange: () => void;
  title: string;
  methodToCallAfterSubmit: (data: Data) => void;
}

export default Modal;
