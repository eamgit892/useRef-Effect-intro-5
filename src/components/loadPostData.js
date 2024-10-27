import axios from 'axios'

export default function loadPostData() {

    
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
                    return cp;
            })
             
    }catch (error) {
        console.error('Error fetching data:', error);
    }
};
