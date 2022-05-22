const Button = ({ setCount, buttonText }) => {
    return <button className="custom-btn btn-16 mll" onClick={() => setCount(0)}>{buttonText}</button>
}

export default Button