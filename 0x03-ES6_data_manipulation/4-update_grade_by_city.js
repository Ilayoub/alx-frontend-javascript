export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Use filter to get students from specified city
  const studentByCity = studentList.filter((student) => student.location === city);

  // Use the map to make update for grades
  const updatedStudents = studentByCity.map((student) => {
    // Find the grade object for the student in new Grades array
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    // If the grade unfound, update else set N/A
    const updatedGrade = gradeObject ? gradeObject.grade : 'N/A';

    // Return a new object with updated grade
    return {
      ...student,
      grade: updatedGrade,
    };
  });
  return updatedStudents;
}
