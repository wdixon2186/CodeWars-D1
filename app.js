// The first century spans from the year 1 up to and including
//  the year 100, The second - from the year 101 up to and including
//   the year 200, etc.


function century(year) {
    let a = year/100
    if (a < 1){
    return 1
    }
    else if(a % 1 !== 0){
    let answer = Math.ceil(a);
    return answer;
    }
    else{
    return a
    }
    }


Test.assertEquals(century(1705), 18, 'Testing for year 1705');
Test.assertEquals(century(1900), 19, 'Testing for year 1900');
Test.assertEquals(century(1601), 17, 'Testing for year 1601');
Test.assertEquals(century(2000), 20, 'Testing for year 2000');
Test.assertEquals(century(89), 1, 'Testing for year 89');


// *********************************************************************


// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.


function calculate(str) {

    return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
  }

  Test.describe("Let's go...", function() {
    Test.it("Basic tests", function() {
      Test.assertEquals(calculate("1plus2plus3plus4"), '10');
      Test.assertEquals(calculate('1minus2minus3minus4'), '-8');
        Test.assertEquals(calculate('1plus2plus3minus4'), '2');
    })
    });