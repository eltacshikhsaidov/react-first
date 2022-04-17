import './Header.css';
import Swal from 'sweetalert2';
import headerLogo from './headerLogo.png';

function Header () {

    const showAlert = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
          
        Toast.fire({
            icon: 'success',
            title: 'Clicked successfully',
            width: '55vw'
        })
    }

    return (
        <div className="Header">
            <ul>
                <li><img className="Logo" src={headerLogo} alt="Header Logo"/></li>
                <li onClick={showAlert}>Home</li>
                <li onClick={showAlert}>Contact</li>
                <li onClick={showAlert}>About</li>
            </ul>
        </div>
    );
}

export default Header;