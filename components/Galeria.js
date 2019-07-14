import React from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import './galeriaCss.sass'

export const Galeria = props => {
    const [fullImage, getFullImage] = React.useState(null)
    const data = props.data

    const Modal = () => {
        return (
            <div className="wrapper-modal">
                
                <div className="modal">
                    <a class="close" onClick={() => {getFullImage(null)}}>X</a>
                    <img src={fullImage} />
                </div>
                
            </div>
                  
        )  
    }

    return (
        <div className="galeria">
            {
                data !== null ?
                    props.data.list.map((item, index) => (
                        <Link key={index} href={{ query: { category: props.data.category, id: index } }}>
                            <a onClick={() => {getFullImage(item)}}><img src={item} /></a>
                        </Link>
                    ))

                : null

            }
            { fullImage !== null ? <Modal /> : null }
        </div>
    )
}


export default Galeria
