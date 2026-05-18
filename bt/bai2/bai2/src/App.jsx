import React from 'react'
import './App.css'

function App() {

  const h1 = React.createElement(
      'h1',
      { style: { color: "aqua" } },
      "Danh sách thành phố trực thuộc trung ương của Việt Nam"
  );

  const li1 = React.createElement(
      'li',
      { className: "list-group-item" },
      "Hà Nội"
  );

  const li2 = React.createElement(
      'li',
      { className: "list-group-item" },
      "Đà Nẵng"
  );

  const li3 = React.createElement(
      'li',
      { className: "list-group-item" },
      "Hải Phòng"
  );

  const li4 = React.createElement(
      'li',
      { className: "list-group-item" },
      "TP Hồ Chí Minh"
  );

  const li5 = React.createElement(
      'li',
      { className: "list-group-item" },
      "Cần Thơ"
  );

  const ul = React.createElement(
      'ul',
      { className: "list-group" },
      [li1, li2, li3, li4, li5]
  );

  const container = React.createElement(
      'div',
      null,
      [h1, ul]
  );

  return container;
}

export default App;