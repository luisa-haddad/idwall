import WindowDimensions from './utils/windowDimensions.js'
import Link from 'next/link'
import logo from '../static/images/logo-idwall.svg'
import './headerCss.sass'

const Header = (props) => {
    return (
        <div className='infos'>
            <div className='idwall'>
                { props.isMobileSized ? null : <p>Front-end test from </p> }
                <Link href="/"><img src={logo} alt='Logo IDWall' /></Link>
            </div>
            <div className='myinfos'>
                <p><strong>Nome:</strong> Luisa Haddad</p>
                <p><strong>E-mail:</strong> luisa.haddad@gmail.com</p>
            </div>
        </div>
    )
}

export default WindowDimensions(Header)