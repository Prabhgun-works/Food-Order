export default function({children , textOnly ,className , ...props }) {
    let cssClass = textOnly ? 'textButton': 'button'; 
    cssClass += ' ' + className; 
    return(
        <button 
            className={cssClass}{...props}>
            {children}
        </button>
    )
} 