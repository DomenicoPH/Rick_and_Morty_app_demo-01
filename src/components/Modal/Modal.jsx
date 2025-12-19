import style from './Modal.module.css'

export const Modal = ({ 
    isOpen, 
    onClose, 
    title,
    onConfirm,
    confirmText = 'Confirm', 
    children 
}) => {

    if(!isOpen) return null;

    return (
        <div 
            className={style.overlay}
            onClick={onClose}
        >
            <div
                className={style.modal}
                onClick={e => e.stopPropagation()}
            >
                <header className={style.header}>
                    <h2>{title}</h2>
                    <button
                        className={style.close}
                        onClick={onClose}
                    >
                        X
                    </button>
                </header>

                <div className={style.content}>
                    {children}
                </div>

                {onConfirm && (
                    <footer className={style.footer}>
                        <button
                            className={style.confirmButton}
                            onClick={onConfirm}
                        >
                            {confirmText}
                        </button>
                    </footer>
                )}
            </div>

        </div>
    )
}