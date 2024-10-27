import { useState } from 'react'
import { useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'

import PostWithComment from './components/PostWithComment'

export default function App() {

  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    try {
      const getResponse = (r) => r.data;
      Promise.all([axios.get("https://jsonplaceholder.typicode.com/posts").then(getResponse),  
                   axios.get("https://jsonplaceholder.typicode.com/comments").then(getResponse)
                  ])
          .then( values => {
                  const [p, c] = values
                  let cp = []

                  for (let post of p) {
                      let postId = post.id;
                      let relatedComments = c.filter(celem => celem.postId == postId).slice();
                      cp.push({ ...post, relatedComments: relatedComments });
                  }
                  setPosts(cp)
          })
           
    }catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []) // run once 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Posts & Comments</h1>
      <p>by Yevhen Mozoliak</p>
      <div className="cards-container">
        {
          posts.map(p => <PostWithComment post={p}/>)
        }
      </div>
    </>
  )
}


