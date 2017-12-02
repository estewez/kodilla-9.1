function getTriangleArea(a, h) {
    if ((a < 0) || (h < 0)) {
        return 'Nieprawidłowe dane';
    } else {
        return a * h / 2;
    }
}
console.log(getTriangleArea(-1, 9));
var triangleArea1 = getTriangleArea(4, 6);
var triangleArea2 = getTriangleArea(0, 7);
var triangleArea3 = getTriangleArea(-3, -5);