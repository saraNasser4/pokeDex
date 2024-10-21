import ReactDom from 'react-dom'

function Modal (props) {
  return ReactDom.createPortal(
    <div className=''>
      <button className='w-[100%] h-[100%] fixed top-0 bg-black opacity-50' onClick={props.handleCloseModal} />
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-black dark:text-white bg-yellow-100 w-[80%] max-w-[550px] min-h-[350px] py-10 px-5 rounded flex flex-col items-center justify-center'>
        {props.children}
      </div>
    </div>,
    document.getElementById("portal")
  )
}

export default Modal