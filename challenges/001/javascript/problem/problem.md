# Challenge #1: Caesar's Cypher

## Problem

Implement a function `encodeCaesarCypher` that can take a plain text string and output a string encoded with Caesar's cypher. The function must take two parameters: the string and number of letter shifts. Then implement a function `decodeCaesarCypher` that can take a message encoded with Caesar's cypher and decode it into plain text. This function will also take two parameters: the encoded string and the number of shifts. For simplicity, assume that all encoding is composed of right shifts, and decoding is composed of left shifts.

Both functions should ignore spaces and special characters and preserve letter casing.

## Caesar's Cypher

From [Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher):

> In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence

So for example, encoding the letter 'A' with a right shift of 3, would produce 'D'. Decoding would move in the opposite direction (left shift), so if the encoded letter were 'E' with a shift of 3, it would decode to 'B'.
