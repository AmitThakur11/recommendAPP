import React, { useState } from "react";
import "./styles.css";

const moviesData = {
  HORROR: [
    {
      name: "HIS HOUSE",
      releaseDate: "OCT 30,2020",
      rating: "⭐⭐⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "HOST",
      releaseDate: "JULY 30,2020",
      rating: "⭐⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "LA LLORONA",
      releaseDate: "AUG 6,2020",
      rating: "⭐⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "THE MORTUARY COLLECTION",
      releaseDate: "OCT 15,2020",
      rating: "⭐⭐⭐",
      link: "www.fb.com"
    }
  ],

  ACTION: [
    {
      name: "BLACK PANTHER",
      releaseDate: "FEB 6,2018",
      rating: "⭐⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "AVENGER ENDGAME",
      releaseDate: "AUG 16,2019",
      rating: "⭐⭐⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "MISSION IMPOSSIBLE -FALLOUT",
      releaseDate: "JUL 27,2018",
      rating: "⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "SPIDERMAN INTO THE SPIDER-VERSE",
      releaseDate: "DEC 14,2018",
      rating: "⭐⭐⭐⭐",
      link: "www.fb.com"
    }
  ],
  COMEDY: [
    {
      name: "SCARY MOVIE",
      releaseDate: "JUL 7,2000",
      rating: "⭐⭐⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "MEAN GIRLS",
      releaseDate: "AUG 30,2004",
      rating: "⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "STEP BROTHERS",
      releaseDate: "JULY 25,2008",
      rating: "⭐⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "BOOKSMART",
      releaseDate: "MAY 24,2019",
      rating: "⭐⭐⭐⭐",
      link: "www.fb.com"
    }
  ],
  SCIFI: [
    {
      name: "A SPACE ODYSSEY",
      releaseDate: "FEB 6 ,2001",
      rating: "⭐⭐⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "ARRIVAL",
      releaseDate: "NOV 11,2016",
      rating: "⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "THE MARTIAN",
      releaseDate: "OCT 2,2015",
      rating: "⭐⭐⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "STAR TREK",
      releaseDate: "MAY 7,2019",
      rating: "⭐⭐⭐⭐",
      link: "www.fb.com"
    }
  ],

  ROMANCE: [
    {
      name: "ASH IS PUREST WHITE",
      releaseDate: "MAY 15,2019",
      rating: "⭐⭐⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "HER",
      releaseDate: "JAN 10,2014",
      rating: "⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "TITANIC",
      releaseDate: "DEC 19,1997",
      rating: "⭐⭐⭐⭐",
      link: "www.fb.com"
    },

    {
      name: "A SUMMER'S TALE",
      releaseDate: "JUN 20,2014",
      rating: "⭐⭐⭐",
      link: "www.fb.com"
    }
  ]
};

export default function App() {
  var [move, setmove] = useState("HORROR");
  function movieClickHandler(item) {
    setmove(item);
  }
  return (
    <div className="App">
      <div style={{ backgroundColor: "#edf5e1" }}>
        <span className="head">MUST WATCH</span>
      </div>
      <div class="comb-button">
        {Object.keys(moviesData).map((item) => (
          <button onClick={() => movieClickHandler(item)}>{item}</button>
        ))}
      </div>
      <div>
        <ul className="movie-list">
          {moviesData[move].map((item) => (
            <li className="list" key={item.name}>
              <div className="name">MOVIE : {item.name}</div>
              <div className="releaseDate">RELEASE : {item.releaseDate}</div>
              <div className="rating">RATING: {item.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
