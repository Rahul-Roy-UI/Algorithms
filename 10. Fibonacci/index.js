// https://www.udemy.com/course/learning-algorithms-in-javascript-from-scratch/learn/lecture/7707548#overview
function fibonacci(position) {
    if (position < 3) return 1;
    else return fibonacci(position - 1) + fibonacci(position - 2);
}

fibonacci(6);