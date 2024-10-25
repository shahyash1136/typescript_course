/* 
==================================== Core Types =======================================

number Types = 1, 1.5, -10 - All numbers, no differentiation between integers or floats
string Types = 'Hi', "Hi", `Hi` - All text values
boolean Types = true, false - Just these two, no "truthy" or "falsy" values
object Types = {age:30} - Any javascript object, more specific types (type of object) are possible
array Types = [1,2,3] - Any javascript array, type can e flexible or strict (regarding the element types)
tuple types = [1,2] - Added by typescript: Fixed length array
enum types = enum {NEW,OLD} - Added by typescript: Automatically enumerated global constant identifiers
any types = * - Any kind of value, no specific type assignment

=======================================================================================
*/

function add(n1: number, n2: number, showResult: boolean, prase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(prase + result)
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPrase = 'Result is : '

add(number1, number2, printResult, resultPrase)




