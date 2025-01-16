// 자동으로 채울 데이터 정의
const dataToFill = {
    name: "testName",
    email: "helen@example.com",
    phone: "010-1234-5678"
};

// form의 id 값으로 필드에 값 입력
for (const [id, value] of Object.entries(dataToFill)) {
    const element = document.getElementById(id);
    if (element) {
        element.value = value; // 값 입력
        element.dispatchEvent(new Event("input")); // 이벤트 트리거
    }
}
