import "../../styles/tab.css";
import styles from "./User.module.css";
import { useState } from "react";
import ModalForm from "../ModalForm/ModalForm";

export default function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

  return (
    <>
      <div className="container">
        <div className="tab__content">
          <h2 className="tab__header">User</h2>
          <div className="tab__description">
            &gt;&gt; Tracking your submitted tickets
          </div>
          <button
            className={styles.tab__addButton}
            onClick={() => setIsModalOpen(true)}
          >
            + NEW REQUEST
          </button>
          <div className="tab__requesWrapp">
            <div className="tab__new">
              <div className="tab__title tab__titleNew">NEW</div>
            </div>
            <div className="tab__process">
              <div className="tab__title tab__titleProcess">IN-PROCESS</div>
            </div>
            <div className="tab__done">
              <div className="tab__title tab__titleDone">DONE</div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <ModalForm setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
