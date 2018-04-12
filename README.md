# Secret Data Challenge 1

This collection of processors will focus on confirming digital identities.

## Types of Analysis/Sanners

- Identifier (single data point [IP address])
- Trait (multiple data points [age, ethnicity, height])
- Direct (IP Address)
- Indirect (UUIDv2 infers origin)

## Types of Identifiers

- Omnidirectional
- Unidirectional

## Danger Levels

- By ID
  - Info:
  - Warning:
  - Error:
- By Fingerprint Accuracy
  - Info:
  - Warning:
  - Error:

## Architecture

- Asynchronous (allows network calls and various flows)
  - Promise
  - Stream
- Synchronous (simplicity)
  - Functions
