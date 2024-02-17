let year =prompt("Enter the year to check: ");

if ((year % 4 == 0 && year % 100 == 0) || year % 400 == 0) {
  console.log(`${year} is not a leap year.`);
} else {
  console.log(`meh kia na gorieee`);
}
