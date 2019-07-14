import React from 'react'
import { api } from '../components/api'
import { onBrowser } from '../components/utils/onBrowser'
import Layout from '../components/layout'
import Link from 'next/link'
import './indexCss.sass'

export const Home = props => {
    const [input, setInput] = React.useState('luisa.haddad@gmail.com')
    const [data, getData, context] = api(
        'https://api-iddog.idwall.co/signup',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: `{"email":"${input}"}`
        }
    )
    console.log(data)

    React.useEffect(() => {
        getData()
    }, [])

    onBrowser(() => {
        window.foo = { data, getData, context }
    })

  return (
    <Layout>
        <div className="content">
            <div className="wrapper-input">
                <label className="animated-input">
                    <input type="text" id="inp" placeholder="&nbsp;" onChange={event => setInput(event.target.value)} />
                    <span className="label">Informe seu e-mail</span>
                    <span className="border"></span>
                </label>
            </div>
            <Link href='/feed'>
                <a>Login</a>
            </Link>
        </div>
    </Layout>
  )
}

export default Home