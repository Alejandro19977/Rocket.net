import '../estilos/Modal.css'
import cerrar from './img/x2.png';
const Modal = ({children, isOpen, closeModal}) => {
    const handleModalContainerClick = e => e.stopPropagation();
    return(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-contenedor" onClick={handleModalContainerClick}>
                <button onClick={closeModal} className="modal-close">
                    <img className='imagen-close' src={cerrar} alt="cerrar" />
                </button>
                {children}
            </div>
        </article>
    );
}

export default Modal;