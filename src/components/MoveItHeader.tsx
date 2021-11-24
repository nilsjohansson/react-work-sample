import './MoveItHeader.css'
import logo from './moveit-icon.svg';

export function MoveItHeader() {

    return (
        <div className='container'>
            <div className='logo-container'>
                <div>MOVE</div>
                <img className='logo' src={logo} alt='' />
                <div>IT</div>
            </div>
        </div>
    );
}