import './newUser.css'

export default function NewUser() {
  return (
    <div className="newUser">
        <hi className="newUserTitle">New User</hi>
        <form action="" className="newUserForm">
            <div className="newUserItem">
                <label htmlFor="">User Name</label>
                <input type="text" placeholder='john'/>
            </div>
            <div className="newUserItem">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='John Smith'/>
            </div>
            <div className="newUserItem">
                <label htmlFor="">E-Mail</label>
                <input type="email" placeholder='john@gmail.com'/>
            </div>
            <div className="newUserItem">
                <label htmlFor="">Password</label>
                <input type="password" placeholder='password'/>
            </div>
            <div className="newUserItem">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='010-1234-6789'/>
            </div>
            <div className="newUserItem">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='New York | USA'/>
            </div>
            <div className="newUserItem">
                <label htmlFor="">Gender</label>
                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="mail">MALE</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="femail">FEMALE</label>
                    <input type="radio" name="gender" id="other" value="other" />
                    <label for="other">OTHER</label>
                </div>
            </div>
            <div className="newUserItem">
                <label htmlFor="">Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">YES</option>
                    <option value="no">NO</option>
                </select>
            </div>
            <button className="newUserButton">CREATE</button>
        </form>
    </div>
  )
}
