import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchBlogs = () => {

	const [blogs, setBlog] = useState([{}]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchBlogs = async () => {
			let response = await axios.get("/api/GetBlogs")
				.then(res => {
					if (res.status != 200) { throw Error("Cannot reach api endpoint"); }
					return res.data;
				})
				.then(res => {
					setBlog(res);
					setIsLoading(false);
				})
				.catch(err => {
					console.log(err.message);
				});
		}
		fetchBlogs();
	}, [blogs]);

	return { blogs, isLoading };
}

export default useFetchBlogs;