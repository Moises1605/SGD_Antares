import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
//import '@fullcalendar/interaction/main.css';
import "@fullcalendar/timegrid/main.css";
import "@material-ui/core/";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
