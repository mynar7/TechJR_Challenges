# Challenge #5 Change Calculator

## Problem

Imagine you're writing a program for self-checkout machines and you're at the portion where you need to handle accepting currency. The customer inserts his/her money, and you need to calculate the amount of paper bills and coins to return to the customer after the change is calculated.

Write a function `changeCalculator` that accepts an amount as a `float` with no more than two decimal places, and returns an object containing keys representing physical currency with values representing the integer count of how much of that currency to return. **Return the least amount of physical currency possible**. Assume your customer wants change back in the largest denominations to conserve pocket/wallet/purse space.

We'll use American currency for this problem, ignoring two dollar bills, half dollars, and gold/silver dollars due to rarity. Assume American currency has the following values:

```
{
  hundreds: 100,
  fifties: 50,
  twenties: 20,
  tens: 10,
  fives: 5,
  ones: 1,
  quarters: 0.25,
  dimes: 0.1,
  nickels: 0.05,
  pennies: 0.01,
}
```

Here is an example of the return object with an input of `100.25`:

```
{
  hundreds: 100,
  fifties: 0,
  twenties: 0,
  tens: 0,
  fives: 0,
  ones: 0,
  quarters: 1,
  dimes: 0,
  nickels: 0,
  pennies: 0,
}
```

## Difficulty ⭐⭐⭐⭐

### Bonus!

Enforce the following in your solution by returning false:

* non-number inputs
* number inputs with more than two decimal places
* negative numbers