export default function updateStudentGradeByCity(studentList, city, newGrades) {

  const studentByCity = studentList.filter((student) => student.location === city);

  const updatedStudents = studentByCity.map((student) => {

    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    const updatedGrade = gradeObject ? gradeObject.grade : 'N/A';

    return {
      ...student,
      grade: updatedGrade,
    };
  });
  return updatedStudents;
}
