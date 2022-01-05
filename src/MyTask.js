import React, { Component } from 'react'

export default class MyTask extends Component {
  state = {
    task: [
      {
        id: 1,
        task: "Complete Web Development Batch(4)",
        author: "Jhanker Mahbub",
        status: "Done",
      },
      {
        id: 2,
        task: "Master Of Node ",
        author: "Canel Roland ",
        status: "Pending",
      },
      {
        id: 3,
        task: "Backend Development By Phyton  ",
        author: "Alex Roy  ",
        status: "Pending",
      },
      {
        id: 4,
        task: "Full React Basic To Advamced",
        author: "Aktaruzazmana Akter",
        status: "Done",
      },
      {
        id: 5,
        task: "Web development 2021 ",
        author: "Josim Uddin",
        status: "Done",
      },
      {
        id: 6,
        task: "Django Super Plus",
        author: "Josim Uddin",
        status: "Pending",
      },
    ],
  };

  render() {
    return (
      <div>
        <h2> Task Apps</h2>
        <hr />
        {this.state.task.map((element) => (
          <ul>
            <li>
              {" "}
              {element.task} -- {element.author} -- {element.status}
            </li>
          </ul>
        ))}

        <table>
          <thead>
            <tr>
              <th> SL No. </th>
              <th> Course Name </th>
              <th> Author </th>
              <th> Status </th>
            </tr>
          </thead>
          <tbody>
            {this.state.task.map((element) => (
              <tr>
                <td>{element.id}</td>
                <td>{element.task}</td>
                <td>{element.author}</td>
                <td>
                  {element.status === "Done" ? (
                    <span className="done"> Done </span>
                  ) : (
                    <span className="pending">Pending </span>
                  )}{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
 