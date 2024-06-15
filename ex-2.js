//Exercise #2: At Least Five Function
// คะแนนของนักเรียนในแต่ละห้อง
const studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 78, 75, 80];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// ฟังก์ชันตรวจสอบเกณฑ์
function checkScores(scores, roomNumber, callback) {
    const count = scores.filter(score => score > 70).length;
    if (count >= 5) {
        callback(roomNumber, true);
    } else {
        callback(roomNumber, false);
    }
}

// ฟังก์ชันแสดงผลลัพธ์
function displayResult(roomNumber, isPassed) {
    if (isPassed) {
        console.log(`นักเรียนห้องที่ ${roomNumber} ผ่านเกณฑ์ ✅`);
    } else {
        console.log(`นักเรียนห้องที่ ${roomNumber} ไม่ผ่านเกณฑ์ ❌`);
}
}

// ตรวจสอบคะแนนของนักเรียนในแต่ละห้อง
checkScores(studentScoresRoom1, 1, displayResult);
checkScores(studentScoresRoom2, 2, displayResult);
checkScores(studentScoresRoom3, 3, displayResult);
