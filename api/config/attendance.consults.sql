-- get student lack
SELECT CONCAT_WS(' ',s.firstName , s.lastName) AS student , sb.name AS subject , a.attendance
FROM Students s JOIN Attendances a ON s.id = a.studentId
JOIN Subjects sb ON a.subjectId = sb.id
AND a.attendance = 'F';

--get all users admins
SELECT CONCAT_WS(' ',u.firstName , u.lastName) AS user, u.email , r.role
FROM Users u JOIN Roles r ON  u.roleId = r.id
WHERE r.id = 1;

--get all users teacher
SELECT CONCAT_WS(' ',u.firstName , u.lastName) AS user, u.email , r.role
FROM Users u JOIN Roles r ON  u.roleId = r.id
WHERE r.id = 2;

-- cuantos se faltaron en el mes

SELECT CONCAT_WS(' ',s.firstName , s.lastName) AS student , sb.name AS subject , a.attendance , a.createdAt
FROM Students s JOIN Attendances a ON s.id = a.studentId
JOIN Subjects sb ON a.subjectId = sb.id
WHERE a.attendance = 'F';

--cauantos estudiantes estuvieron presentes en el mes de octubre

SELECT COUNT(a.attendance) AS totalPresented
FROM Students s JOIN Attendances a ON s.id = a.studentId
JOIN Subjects sb ON a.subjectId = sb.id
WHERE a.attendance = 'P'
GROUP BY MONTH(a.createdAt);

------- for 'F'
SELECT COUNT(a.attendance) AS totalLack
FROM Students s JOIN Attendances a ON s.id = a.studentId
JOIN Subjects sb ON a.subjectId = sb.id
WHERE a.attendance = 'F'
GROUP BY MONTH(a.createdAt);

--- count all students
SELECT COUNT(s.id) AS student
FROM Students s;

-- count all teachers
SELECT COUNT(u.id) AS user
FROM Users u JOIN Roles r ON r.id = u.roleId
WHERE r.role = 'teacher';


--- count all subjects
SELECT COUNT(sb.id) AS subject
FROM Subjects sb;

