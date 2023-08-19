import style from '@/styles/Navbar.module.css'


const Navbar = () => {
  return (
   <>
        <nav className={style.container}>
            <div>
                <h2>ABC Site Logo</h2>
            </div>

            <div>
                <ul className={style.navigationLinks}>
                    <li><a href="/contactus">Contact Us</a></li>
                    <li><a href="/login/admin">Admin Login</a></li>
                    <li><a href="/display">feedback</a></li>
                </ul>
            </div>
        </nav>
   </> 
  )
}

export default Navbar