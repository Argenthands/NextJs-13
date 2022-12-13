

export function PopUp({children, show, close}) {
    const {title, content} = show
    return (
        <>
            {show && 
                <div className="PopUp">
                    <div className="OcerLay">
                        <div className="ModalContainer">
                            <div className="ModalHeader">
                                <h3>{title}</h3>
                                <button onClick={()=>close(false)}>X</button>
                            </div>
                            <div className="ModalBody">
                                {content}
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
