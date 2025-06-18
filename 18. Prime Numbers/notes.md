## 🔍 Why Check Only Up to √num for Prime Numbers?

When checking if a number is prime, we only need to test divisibility up to the square root of that number. Here's why:

### ✅ Key Insight:

If a number has a factor **greater** than its square root, it must also have a **corresponding factor smaller** than the square root.

---

### 📘 Example: num = 36

**Factors of 36 include:**

- Small: `2`, `3`, `4`, `6`
- Large: `6`, `9`, `12`, `18`

Each large factor pairs with a small one:

- `2 × 18 = 36`
- `3 × 12 = 36`
- `4 × 9  = 36`
- `6 × 6  = 36` ← this is the point where both factors are equal (at √36 = 6)

After this point, factor pairs just repeat in reverse.

---

### 🚀 So What?

To determine if a number has **any divisor** (and therefore is not prime), it’s enough to check divisibility only up to `Math.sqrt(num)`.

This improves efficiency significantly:

- **Time Complexity**: Reduced from O(n) to **O(√n)**  
- **Why it matters**: Essential for performance in large input ranges

---

### ✅ Summary

- Check for factors from `2` to `Math.sqrt(num)`
- If no divisors found → the number is prime
- Efficient and avoids unnecessary checks
