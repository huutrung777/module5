let studentList = [
    {
        id: 1,
        name: "Trung"
    },
    {
        id: 2,
        name: "Nhất"
    },
    {
        id: 3,
        name: "Hiếu"
    }
]

export function getAll() {
    return [...studentList]
}

export function deleteById(id) {
    studentList = studentList.filter(
        student => student.id !== id
    )
}