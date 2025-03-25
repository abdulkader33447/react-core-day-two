import Counter from "./Counter";
import Friends from "./Friends"
import "./App.css";
import Batsman from "./Batsman";
import Bolar from "./Bolar";
import Users from "./Users";
import { Suspense } from "react";
import Posts from "./Posts"


// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json());

// const fetchFriends = async()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json()
// }


const fetchPosts= async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

function App() {
// const friendsPromise = fetchFriends()

const postsPromise = fetchPosts();

  function handleClick() {
    alert("i am clicked");
  }

  const handleClick3 = () => {
    alert("clicked 3");
  };

  const handleClickAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>

<Suspense fallback={<h4>Posts are coming......</h4>}>
<Posts postsPromise={postsPromise}></Posts>
</Suspense>

      {/* <Suspense fallback={<h2>Loading...</h2>}>
      <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
<Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Bolar></Bolar>

      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>

      <button
        onClick={function handleClick2() {
          alert("clicked 2");
        }}
      >
        Click Me 2
      </button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button
        onClick={() => {
          alert("clicked 4");
        }}
      >
        Click Me 4
      </button>

      <button onClick={() => handleClickAdd5(5)}>Click add 5</button>
    </>
  );
}

export default App;
