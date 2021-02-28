import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Table from "./components/Table.jsx";
import Chart from "./components/chart.jsx";
import Buttons from "./components/buttons.jsx";

function App() {
  const [data, setdata] = useState([]);
  const [nopg, setnopg] = useState(0);
  const [currentpg, setcurrentpg] = useState(0);
  let BASE_URL =
    "http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=10";
  useEffect(() => {
    fetchData(0);
  }, []);
  const saveInlocalStorage = (data, arg) => {
    let k = [];
    data.map((value) => {
      k.push({
        id: value.objectID,
        points: value.points,
        url: value.url,
        num_comments: value.num_comments,
        created_at: value.created_at,
        author: value.author,
        title: value.title,
      });
    });
    if (typeof Storage !== "undefined") {
      localStorage.setItem(`page-${arg}`, JSON.stringify(k));
    }
  };
  const update = (arg) => {
    let temp = localStorage.getItem(`page-${arg}`);
    temp = JSON.parse(temp);
    setdata(temp);
  };
  const fetchData = async (arg) => {
    await axios
      .get(`${BASE_URL}&page=${arg}`)
      .then((res) => {
        setnopg(res.data.nbPages);
        if (localStorage.getItem(`page-${arg}`) === null) {
          saveInlocalStorage(res.data.hits, arg);
          update(arg);
        } else {
          update(arg);
        }
      });
  };
  const prev = () => {
    if (currentpg - 1 >= 0) {
      setcurrentpg(currentpg - 1);
      fetchData(currentpg - 1);
    }
  };
  const next = () => {
    if (currentpg + 1 < nopg) {
      fetchData(currentpg + 1);
      setcurrentpg(currentpg + 1);
    }
  };
  const hide = (id) => {
    let current = localStorage.getItem(`page-${currentpg}`);
    if (!current) {
      current = [];
    } else {
      current = JSON.parse(current);
    }
    const elementsIndex = current.findIndex((element) => element.id == id);
    let newArray = [...current];
    newArray = newArray.filter((el) => {
      return el.id !== id;
    });
    
    // update the local storage
    if (typeof Storage !== "undefined") {
      localStorage.setItem(`page-${currentpg}`, JSON.stringify(newArray));
    }
    setdata(newArray);
  };
  const action = (id) => {
    let current = localStorage.getItem(`page-${currentpg}`);
    if (!current) {
      current = [];
    } else {
      current = JSON.parse(current);
    }
    const elementsIndex = current.findIndex((element) => element.id == id);
    let newArray = [...current];

    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      points: newArray[elementsIndex].points + 1,
    };

    // update the local storage
    if (typeof Storage !== "undefined") {
      localStorage.setItem(`page-${currentpg}`, JSON.stringify(newArray));
    }
    setdata(newArray);
    //     }
    //     else if (button === 2) {
    //       newArray = newArray.filter((el) => {
    //   return el.id !== id;
    // });
    // console.log(newArray);
    //     }
  };
  return (
    <div className="App">
      <div className="base">
        <Table data={data} action={action} hide={hide} />
        <Buttons next={next} prev={prev} />
        <div id="bar"></div>
        <div id="container">
          <div id="vote">Votes</div>
          <Chart info={data} />
        </div>
        <div id="id">ID</div>
        <div id="bar"></div>
      </div>
    </div>
  );
}

export default App;
