import './App.css'

function App() {

  const students = [
    {
      id: 1,
      name: "Nguyễn Hữu Trung",
      age: 30,
      address: "Đà Nẵng"
    },
    {
      id: 2,
      name: "Trần Nhất",
      age: 21,
      address: "Hà Nội"
    },
    {
      id: 3,
      name: "Lê Văn Hếu",
      age: 19,
      address: "TP Hồ Chí Minh"
    }
  ]

  return (
      <>
        <h1>Danh sách sinh viên</h1>

        <table border="1" cellPadding="10">
          <thead>
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Địa chỉ</th>
          </tr>
          </thead>

          <tbody>
          {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </>
  )
}

export default App