import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import './modal.css';

import { onDelete, closeModal } from '../../actions';
 
const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};
 
Modal.setAppElement('#modal')
 
const ModalWindow =({ onDelete, closeModal, modalIsOpen, alertIsOpen, textAlert, colorTextAlert })=> {
  let subtitle;
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = colorTextAlert;
  }

  const deleteModal =()=> {
    onDelete();
    closeModal();
  }

  const closeAlert =()=> {
    setTimeout(closeModal, 1000);
    clearTimeout();
  }
 
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          closeTimeoutMS={1000}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {
            alertIsOpen ?
              <>
                <h2 ref={_subtitle => (subtitle = _subtitle)}>{textAlert}</h2>
                {closeAlert()}
              </>
              :
              <>
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Подтвердите действие</h2>
                <div className="mt-3">Вы уверенны?... Данные будут удалены безвозвратно!!!</div>
                <div className="float-right mt-3">
                  <button className="btn btn-info float-right " onClick={closeModal}>Отмена</button>
                  <button className="btn btn-danger mr-2" onClick={deleteModal}>Удалить</button>
                </div>
              </>
          }
        </Modal>
      </div>
    );
}

const mapStateToProps = ({modalIsOpen,  alertIsOpen, textAlert, colorTextAlert}) => {
  return {
    modalIsOpen,
    alertIsOpen,
    textAlert,
    colorTextAlert
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(onDelete(id)),
    closeModal: ()=> dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);

//ReactDOM.render(<ModalWindow />, appElement);