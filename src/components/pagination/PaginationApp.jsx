import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const PaginationApp = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    setLoading(true);
    (async () => {
      await axios.get(baseURL).then((res) => setPostData(res.data));
    })();
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPagePosts = postData.slice(firstIndex, lastIndex);

  const showPages = (number) => setCurrentPage(number);
  return (
    <div>
      <ul>
        {currentPagePosts.map((post) => {
          return <PostList post={post} key={post.id} />;
        })}
      </ul>
      <NavButtons
        postData={postData}
        postPerPage={postPerPage}
        showPages={showPages}
      />
    </div>
  );
};

export default PaginationApp;

const PostList = ({ post }) => {
  return <li> {post.title} </li>;
};

const NavButtons = ({ postData, postPerPage, showPages }) => {
  const numberofposts = [];
  for (let i = 1; i <= Math.ceil(postData.length / postPerPage); i++) {
    numberofposts.push(i);
  }

  return (
    <>
      {numberofposts.map((navbtn) => (
        <Button
          key={navbtn}
          onClick={() => showPages(navbtn)}
          variant="contained"
          color="secondary"
          sx={{ m: 1 }}
        >
          {navbtn}
        </Button>
      ))}
    </>
  );
};
