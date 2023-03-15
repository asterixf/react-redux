import {useState} from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage(){
  const [showModal, setShowModal] = useState(false)

  const clickHandler= () => setShowModal(true);

  const handleClose= () => setShowModal(false);

  const actionBar = (
  <div>
    <Button onClick={handleClose} primary>I Accept</Button>
  </div>
  );

  const modal = (
  <Modal onClose={handleClose} actionBar={actionBar}>
    <p>This is a very important agreement to accept!</p>
  </Modal>
  );

  return (
    <div>
      <Button primary onClick={clickHandler}>Show Modal!</Button>
      {showModal && modal}
    </div>
  );

}

export default ModalPage;
