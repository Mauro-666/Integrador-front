import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return(
        <div className="header">
            <div className="logo">
            <img src='../img/arlequinLogo.jpg'></img>
                
            </div>
            <span className='centering'>
                <span className='box'>
                    <input
                        className='search'
                        placeholder=' '
                        spellCheck='false'
                    />
                </span>
            </span>
        </div>
    )
}

export default Header;