import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import './user.css';
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to='/newUser'>
                <button className="userAddButton">CREATE</button>            
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img className="userShowImg" alt="" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Anna Becker</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Detail</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon' />
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon' />
                        <span className="userShowInfoTitle">3.2.1999</span>
                    </div>
                    <span className="userShowTitle">Contact Detail</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon' />
                        <span className="userShowInfoTitle">010-1234-5678</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon' />
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon' />
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label htmlFor="">User Name</label>
                            <input 
                                type="text" 
                                placeholder='annabeck99' 
                                className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Full Name</label>
                            <input 
                                type="text" 
                                placeholder='Anna Becker' 
                                className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">E-Mail</label>
                            <input 
                                type="email" 
                                placeholder='annabeck99@gmail.com' 
                                className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Phone</label>
                            <input 
                                type="text" 
                                placeholder='010-1234-5678' 
                                className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Address</label>
                            <input 
                                type="text" 
                                placeholder='New York | USA' 
                                className="userUpdateInput" 
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img alt="" className="userUpdateImg" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                            <label htmlFor="file"><Publish className='userUpdateIcon'/> </label>
                            <input type="file" id='file' style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">UPDATE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
