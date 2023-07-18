import React from "react";

import PropTypes from "prop-types";

import Modal from 'react-modal';

import { confirmable, createConfirmation } from "react-confirm";

const Confirmation = ({

    okLabel,

    cancelLabel = "Cancel",

    title = "Confirmation",

    confirmation,

    show, 
    
    proceed, 
    
    enableEscape = true


}) => {

    return (

      <div>

        <Modal
        
        animation={ true }
        
        show={ show }

        onHide={ (e) => {

          e.preventDefault();

          proceed( false )

        } }

        backDrop={ enableEscape ? true : "static" }

        keyboard={ enableEscape }>

        <Modal.Header>
        
        <Modal.Title> {title} </Modal.Title>  
          
        </Modal.Header>          

        <Modal.Body> { confirmation } </Modal.Body>

        <Modal.Footer>

          <button onClick={ (e) => {

            e.preventDefault();
            
            proceed( false )

          } }
          
          > { cancelLabel } </button>

          <button onClick={ (e) => {
            
            e.preventDefault();

            proceed(true);
          
          } }> 
          
          { okLabel }
          
          </button>

        </Modal.Footer>

        </Modal>

      </div>

    );

};

Confirmation.propTypes = {

  okLabel: PropTypes.string,

  cancelLabel: PropTypes.string,

  title: PropTypes.string,

  confirmation: PropTypes.string,

  show: PropTypes.bool,

  proceed: PropTypes.func,

  enableEscape: PropTypes.bool

};

export function confirm (

  confirmation,

  proceedLabel,

  cancelLabel = "Cancel",

  options ={}

) {

  return createConfirmation( confirmable( Confirmation ) ) ({

    confirmation,

    proceedLabel,

    cancelLabel,

    ...options

  });

};