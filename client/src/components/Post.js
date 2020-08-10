import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Strapi from 'strapi-sdk-javascript/build/main';

const strapi = new Strapi('http://localhost:1337');

const Post = (props) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const dbPosts = await strapi.getEntries('blog-posts');
				setPosts(dbPosts);
				console.log('posts :>> ', dbPosts);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	return (
		<div>
			<div className='container'>
				<div className='row'>
					{posts.map((post, i) => (
						<div className='col-md' key={i}>
							<div className='card' style={{width: '18rem'}}>
								<img
									src={`http://localhost:1337${post.img.formats.thumbnail.url}`}
									className='card-img-top'
									alt='drone'
								/>
								<div className='card-body'>
									<h5 className='card-title'>{post.title}</h5>
									<p className='card-title'>By {post.author.username}</p>
									<p className='card-title'>{post.content}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Post;
