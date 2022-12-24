
import Modal from 'react-modal';
let ProductModal =(props)=>{
    return     (<Modal isOpen={props.product} onRequestClose={props.closeModal}>
    <span className="close-item" onClick={props.closeModal}>&times;</span>
    <div className="product-info">
      <img src={props.product.imageUrl}/>
      <p>{props.product.title}</p>
      <p>{props.product.description}</p>
    </div>
  </Modal>)
}

export default ProductModal