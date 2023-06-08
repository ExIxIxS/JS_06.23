
import testSets from './testSets.js';
import { customFilter, bubbleSort, storageWrapper } from '../../src_js/homework_3.js'

describe(`homework_3 - customFilter`, () => {
  const methodName = 'customFilter';

  testSets[methodName].valid.forEach((testObj) => {
    const caseTitle = testObj.caseTitle;
    const testArr = testObj.arr;
    const args = testObj.args;
    const expectedResult = testObj.expectedResult;

    test(`${methodName}() - valid - ${caseTitle}`, () => {
    const filtered = testArr.customFilter(...args);
    expect(filtered).toEqual(expectedResult);
    expect(filtered).toEqual(testArr.filter(...args));
    });
  });

  testSets[methodName].invalid.forEach((testObj) => {
    const caseTitle = testObj.caseTitle;
    const testArr = testObj.arr;
    const args = testObj.args;
    const errorText = testObj.errorText;

    test(`${methodName}() - invalid - ${caseTitle}`, () => {
    expect(() => {
      testArr.customFilter(...args);
    }).toThrow(errorText);
    });
  });
});

describe(`homework_3 - bubbleSort`, () => {
  const methodName = 'bubbleSort';

  testSets[methodName].valid.forEach((testObj) => {
    const arr = testObj.arr;
    const initialArr = [...arr];
    const result = testObj.expectedResult;

    test(`${methodName}() for valid [${arr}]`, () => {
    expect(bubbleSort(arr)).toEqual(result);
    });

    test(`${methodName}() test nonmutation for valid [${arr}]`, () => {
      const sortedArr = bubbleSort(arr);
      sortedArr.push('new value')
      expect(arr).toEqual(initialArr);
      });
  });

  testSets[methodName].invalid.forEach((testObj) => {
    const arr = testObj.arr;
    const errorText = testObj.errorText;

    test(`${methodName}() for invalid [${arr}]`, () => {
    expect(() => {
      bubbleSort(arr);
    }).toThrow(errorText);
    });
  });
});

describe(`homework_3 - storageWrapper`, () => {
  const methodName = 'storageWrapper';

  testSets[methodName].valid.forEach((testObj) => {
    const args = testObj.args;
    const expectedResult = testObj.expectedResult;
    const testFunc = storageWrapper(...args);

    test(`${methodName}() for valid [${args}]`, () => {
    expect(testFunc()).toEqual(expectedResult());
    expect(testFunc()).toEqual(expectedResult());
    expect(testFunc()).toEqual(expectedResult());
    });
  });

  testSets[methodName].invalid.forEach((testObj) => {
    const args = testObj.args;
    const errorText = testObj.errorText;

    test(`${methodName}() for invalid [${args}]`, () => {
    expect(() => {
      storageWrapper(...args);
    }).toThrow(errorText);
    });
  });
});
