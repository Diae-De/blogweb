import Sidebar from '../../components/sidebar/Sidebar'
import './setting.css'

export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='DEPR'/>
                    <label>Email</label>
                    <input type="email" placeholder='DEPR@gmail.com'/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
