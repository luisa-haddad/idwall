import React from "react"
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import Galeria from './Galeria'
import './getFeedDataCss.sass'

export const GetFeedData = props => {
    const [dataFeed, getDataFeed] = React.useState(null)
    const router = useRouter()

    if(dataFeed === null) {
        fetch(
            "https://api-iddog.idwall.co/feed",
            {
                method: 'GET',
                headers: {'Authorization': props.value ? props.value : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZGRvZy1zZXJ2aWNlIiwic3ViIjoiNWQxZTA4MWQyOWVkM2ZkM2M4YjIxNTZmIiwiaWF0IjoxNTYyMjQ5MjQ1LCJleHAiOjE1NjM1NDUyNDV9.3ii4R9MDsPzAIFc3X7cHE4D49azpz9cDT3j4aJzUl6A','Content-Type': 'application/json'}
            }
        )
        .then(async res => {
            const response = await res.json()
            return getDataFeed(response)
        })
    }

  return (
    <Layout>
        <div className="wrapper-galeria">
            <div className="titles">
                <Link href={{ query: { category: 'husky' } }}>
                    <a 
                        className={ router.asPath.indexOf('husky') > 0 ? 'active' : 'husky' } 
                        onClick={() => { clickHandler('husky', props, getDataFeed) }}>
                    Husky</a>
                </Link>
                <Link href={{ query: { category: 'labrador' } }}>
                    <a 
                        className={ router.asPath.indexOf('labrador') > 0 ? 'active' : 'husky' } 
                        onClick={() => { clickHandler('labrador', props, getDataFeed) }}>
                    Labrador</a>
                </Link>
                <Link href={{ query: { category: 'hound' } }}>
                    <a 
                        className={ router.asPath.indexOf('hound') > 0 ? 'active' : 'husky' } 
                        onClick={() => { clickHandler('hound', props, getDataFeed) }}>
                    Hound</a>
                </Link>
                <Link href={{ query: { category: 'pug' } }}>
                    <a 
                        className={ router.asPath.indexOf('pug') > 0 ? 'active' : 'husky' } 
                        onClick={() => { clickHandler('pug', props, getDataFeed) }}>
                    Pug</a>
                </Link>
            </div>
            <Galeria data={dataFeed}/>
        </div>
    </Layout>
  );
};

function clickHandler(category, props, getDataFeed) {

    fetch(
        `https://api-iddog.idwall.co/feed?category=${category}`,
        {
            method: 'GET',
            headers: {'Authorization': props.value ? props.value : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZGRvZy1zZXJ2aWNlIiwic3ViIjoiNWQxZTA4MWQyOWVkM2ZkM2M4YjIxNTZmIiwiaWF0IjoxNTYyMjQ5MjQ1LCJleHAiOjE1NjM1NDUyNDV9.3ii4R9MDsPzAIFc3X7cHE4D49azpz9cDT3j4aJzUl6A','Content-Type': 'application/json'}
        }
    )
    .then(async res => {
        const response = await res.json()
        return getDataFeed(response)
    })
}

export default GetFeedData