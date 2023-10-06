// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "../components/Posts.scss";
// import { Button } from "bootstrap";

// const Posts = () => {
//   const [allPosts, setAllPosts] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);

//   // PAGINATION
//   let limit = 3;
//   let numOfpages = Math.ceil(allPosts.length / limit);
//   let arrBtns = [];
//   for (let i = 1; i <= numOfpages; i++) {
//     arrBtns.push(i);
//   }

//   const fetchPosts = async (page) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:3000/news?_page=${page}&_limit=${limit}`
//       );
//       setPosts(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     const fetchAllPosts = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/news");
//         setAllPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchAllPosts();
//   }, []);

//   useEffect(() => {
//     fetchPosts(page);
//   }, [page]);

//   return (
//     <div>
//       <ul className="d-flex flex-column align-items-center">
//         <div className=" cards">
//           {posts.map((news, index) => (
//             <div key={index} className="cards-item">
//               <div className="bg-img">
//                 <div className="boxs">img</div>
//                 <p>{news.category}</p>
//               </div>
//               <h3 className="des">{news.description}</h3>
//               <div className="autors">
//                 <p className="user">{news.autor}</p>
//                 <p className="user">{news.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="d-flex justify-center buttons">
//           {arrBtns?.map((item) => (
//             <button key={item} onClick={() => setPage(item)}>
//               {item}
//             </button>
//           ))}
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Posts;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "../components/Posts.scss";
import { Button } from "bootstrap";
import { Form } from "react-router-dom";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  // PAGINATION
  let limit = 3;
  let numOfpages = Math.ceil(allPosts.length / limit);
  let arrBtns = [];
  for (let i = 1; i <= numOfpages; i++) {
    arrBtns.push(i);
  }

  const fetchPosts = async (page) => {
    try {
      let url = `http://localhost:3000/news?_page=${page}&_limit=${limit}`;
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      const res = await axios.get(url);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/news");
      setAllPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    fetchPosts(page);
  }, [page, selectedCategory]);

  const filterPostsByCategory = (category) => {
    setSelectedCategory(category);
    setPage(2);
  };

  return (
    <div>
      <div className="d-flex justify-center categorys position-fixed z-3 absolute">
        <button onClick={() => filterPostsByCategory("")}>All</button>
        <button onClick={() => filterPostsByCategory("bussiness")}>
          Bussiness
        </button>
        <button onClick={() => filterPostsByCategory("category3")}>
          Entertainment
        </button>
        <button onClick={() => filterPostsByCategory("category4")}>
          General
        </button>
        <button onClick={() => filterPostsByCategory("category6")}>
          Health
        </button>
        <button onClick={() => filterPostsByCategory("category6")}>
          Science
        </button>
        <button onClick={() => filterPostsByCategory("category6")}>
          Sports
        </button>
        <button onClick={() => filterPostsByCategory("category6")}>
          Technology
        </button>
      </div>
      <input className="search-input" type="text" placeholder="" />

      <ul className="d-flex flex-column align-items-center">
        <div className=" cards">
          {posts.map((news, index) => (
            <div key={index} className="cards-item">
              <div className="bg-img">
                <div className="boxs">img</div>
                <p>{news.category}</p>
              </div>
              <h3 className="des">{news.description}</h3>
              <div className="autors">
                <p className="user">{news.autor}</p>
                <p className="user">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-center buttons">
          {arrBtns?.map((item) => (
            <button key={item} onClick={() => setPage(item)}>
              {item}
            </button>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Posts;
