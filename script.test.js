const { getGreeting } = require('./script');

describe('getGreeting', () => {

  // **PASSING TEST (5 pts)**
  test('should return "Good morning 🌅" for an hour before 12', () => {
    // 9 AM
    expect(getGreeting(9)).toBe("Good morning 🌅"); 
  });

  // **FAILING TEST (5 pts)**
  test('should return "Good afternoon 🌞" for an hour between 12 and 17 (inclusive)', () => {
    // 5 PM (17:00) should be 'Good afternoon 🌞'
    // The current logic returns 'Good evening 🌙' for hour 18 and later.
    // If the test case is written incorrectly, it will demonstrate a failure.
    // Let's test for a case that is *correctly* coded but *incorrectly* expected.
    // getGreeting(18) returns "Good evening 🌙", but we will expect "Good afternoon 🌞"
    expect(getGreeting(18)).toBe("Good afternoon 🌞"); // This test is designed to FAIL
  });

  // Example of a fix/correct test for evening
  test('should return "Good evening 🌙" for an hour 18 and later', () => {
    // 6 PM (18:00)
    expect(getGreeting(18)).toBe("Good evening 🌙"); 
  });
});
