import React from "react";
import "../App.css";
import Chart from "./chart";

const Table = ({ data, action, hide }) => {
  return (
    <table>
      <thead>
        <tr
          style={{
            backgroundColor: "#ff6600",
            color: "#F4F4ED",
            textAlign: "left",
          }}
        >
          <th>Comments</th>
          <th>Vote Count</th>
          <th>UpVote</th>
          <th>News Detalis</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, index) => {
          let k = value.url != null ? value.url.indexOf("/", 8) : 0;

          let now = new Date();

          return (
            <tr key={index} className="items">
              <td style={{ color: "#292E30", fontWeight: 800 }}>
                {value.num_comments == undefined ? 0 : value.num_comments}
              </td>
              <td
                style={{
                  color:
                    value.points < 70
                      ? "#292E30"
                      : value.points > 100
                      ? "#FE6723"
                      : "#AC4B22",
                  fontWeight: 800,
                }}
              >
                {value.points}
              </td>
              <td>
                <a onClick={(e) => action(value.id)} value='vote' >
                  <div className="votearrow"></div>
                </a>
              </td>
              <td className="title" style={{ textAlign: "left" }}>
                <a className="head">{value.title}</a>
                <a href={`${value.url}`} className="k">
                  ({value.url != null ? value.url.slice(8, k) : null})
                </a>
                <span className="k">by</span>{" "}
                <a className="auth">{value.author}</a>
                <span className="k">
                  {Math.round(
                    (now.getTime() - new Date(value.created_at).getTime()) /
                      3.6e6
                  )}{" "}
                  hours ago
                </span>
                <a style={{ color: "#000000" }} value='hide' onClick={() => hide(value.id) }>
                  <span className="s">[</span>hide<span className="s">]</span>
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
