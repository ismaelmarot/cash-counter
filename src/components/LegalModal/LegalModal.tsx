import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { getCurrentYear } from '../../helpers/getCurrentYear';
import type { LegalModalProps } from '../../interface/LegalModal.interface';
import { ModalBodyStyled, StyledLink } from './LegalModal.styled';

const LegalModal: React.FC<LegalModalProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Legal</Modal.Title>
            </Modal.Header>
            <ModalBodyStyled>
                <p>
                Este sitio y la aplicación de carga de productos son proporcionados 
                “tal cual”, sin garantías explícitas ni implícitas, incluyendo pero 
                no limitadas a la idoneidad para un propósito particular...
                </p>
             
                <p>Responsable: <span>Ismael Marot</span></p>
                <p>Dirección: La Plata, Buenos Aires, Argentina</p>
                <p>Correo electrónico:
                    <StyledLink href='mailto:ismaelmarot@hotmail.com'> ismaelmarot@hotmail.com</StyledLink>
                </p>

                <p>Sitio web:
                     <StyledLink href='https://ismaelmarot.github.io'> www.ismaelmarot.github.io</StyledLink>
                </p>
                <p>Licencia del código:
                    El código de este <i>Sitio/Aplicación</i> y de los proyectos que contiene se distribuye bajo la <span style={{fontWeight:'bold'}}>licencia MIT</span>. Esto permite su uso, copia, modificación y distribución siempre que se mantenga la atribución correspondiente.
                </p>
                <p>Propiedad intelectual de contenidos:
                    El contenido textual, logotipos y elementos gráficos propios de este sitio no se distribuyen bajo la  <span style={{fontWeight:'bold'}}>licencia MIT</span> y permanecen bajo derechos reservados, salvo que se indique expresamente lo contrario.
                </p>
                <p>Enlaces externos:
                    Este <i>Sitio/Aplicación</i> puede contener enlaces a otros sitios web de terceros. Ismael Marot no se hace responsable del contenido o de las políticas de privacidad de dichos sitios.
                </p>
                <p>Privacidad y cookies:
                    Este <i>Sitio/Aplicación</i> no recopila datos personales sensibles, salvo los que proporcione voluntariamente (por ejemplo, a través de formularios o correo electrónico).
                </p>

                <p>Última actualización: {getCurrentYear()}</p> 

            </ModalBodyStyled>
            <Modal.Footer>
                <Button variant='secondary' onClick={onClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LegalModal;