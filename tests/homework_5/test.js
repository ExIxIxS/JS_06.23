
import testSets from './testSets.js';
import { Stack, LinkedList } from '../../src_js/homework_5.js'

describe(`homework_5 - Stack`, () => {
  const methodName = 'Stack';
  const TEST_LIMIT = 3;

  testSets[`${methodName}Data`].valid.forEach((testObj) => {
    const caseTitle = testObj.caseTitle;

    if (testObj?.methodName === 'constructor') {
      const limit = testObj.limit;
      const expectedLimit = testObj.expectedLimit;
      const myStack = (limit !== undefined) ? new Stack(limit) : new Stack();

      it(`constructor() - valid - ${caseTitle} with limit --> ${limit}`, () => {
        expect(myStack._limit).toEqual(expectedLimit);
        expect(myStack._length).toEqual(0);
        expect(myStack._stack).toEqual({});
      });
    }

    if (testObj?.methodName === 'fromIterable') {
      const iterable = testObj.iterable;
      const testStack = Stack.fromIterable(iterable);
      const stackResult = testObj.expectedStack;
      const expectedLimit = testObj.expectedLimit;
      const expectedLength = testObj.expectedLength;


      it(`static fromIterable() - valid - ${caseTitle}`, () => {
        expect(testStack._stack).toEqual(stackResult);
        expect(testStack._limit).toEqual(expectedLimit);
        expect(testStack._length).toEqual(expectedLength);
      });
    }

    if (testObj?.methodName === 'push') {
      const items = testObj.itemsArr;
      const testStack = new Stack();
      const stackResult = testObj.expectedStack;

      it(`push() - valid - ${caseTitle}`, () => {
        items.forEach((item) => testStack.push(item));
        expect(testStack._stack).toEqual(stackResult);
      });
    }


    if (testObj?.methodName === 'pop') {
      const iterable = testObj.initialStack;
      const testStack = Stack.fromIterable(iterable);
      const stackResult = testObj.expectedStack;
      const expectedLimit = testObj.expectedLimit;
      const expectedLength = testObj.expectedLength;
      const expectedPop = testObj.expectedPop;


      it(`pop() - valid - ${caseTitle}`, () => {
        const popedItem = testStack.pop();

        expect(popedItem).toEqual(expectedPop);
        expect(testStack._stack).toEqual(stackResult);
        expect(testStack._limit).toEqual(expectedLimit);
        expect(testStack._length).toEqual(expectedLength);
      });
    }

    if (testObj?.methodName === 'peek') {
      const iterable = testObj.initialStack;
      const testStack = Stack.fromIterable(iterable);
      const stackResult = testObj.expectedStack;
      const expectedLimit = testObj.expectedLimit;
      const expectedLength = testObj.expectedLength;
      const expectedPeek = testObj.expectedPeek;


      it(`peek() - valid - ${caseTitle}`, () => {
        const peekedItem = testStack.peek();

        expect(peekedItem).toEqual(expectedPeek);
        expect(testStack._stack).toEqual(stackResult);
        expect(testStack._limit).toEqual(expectedLimit);
        expect(testStack._length).toEqual(expectedLength);
      });
    }

    if (testObj?.methodName === 'toArray') {
      const iterable = testObj.initialStack;
      const testStack = Stack.fromIterable(iterable);
      const stackResult = testObj.expectedStack;
      const expectedResult = testObj.expectedResult;

      it(`toArray() - valid - ${caseTitle}`, () => {
        const arr = testStack.toArray();

        expect(arr).toEqual(expectedResult);
        expect(testStack._stack).toEqual(stackResult);
      });
    }
  });

  it(`peek() - valid - peek from an empty Stack`, () => {
    const testStack = new Stack();
    const peekedItem = testStack.peek();

    expect(peekedItem).toEqual(null);
    expect(testStack._stack).toEqual({});
    expect(testStack._limit).toEqual(10);
    expect(testStack._length).toEqual(0);
  });

  it(`toArray() - valid - toArray from an empty Stack`, () => {
    const testStack = new Stack();
    const arr = testStack.toArray();

    expect(arr).toEqual([]);
    expect(testStack._stack).toEqual({});
  });

  it(`getLastIndex() - valid - getLastIndex from an empty Stack`, () => {
    const testStack = new Stack();
    const index = testStack._lastIndex;

    expect(index).toEqual(null);
    expect(testStack._stack).toEqual({});
  });

  testSets[`${methodName}Data`].invalid.forEach((testObj) => {
    const caseTitle = testObj.caseTitle;
    const errorMessage = testObj.errorMessage;

    if ('limit' in testObj) {
      const limit = testObj.limit;

      it(`constructor() - invalid - ${caseTitle} with limit --> ${limit}`, () => {
        expect(() => {
          new Stack(limit);
        }).toThrow(errorMessage);
      });
    }

    if (testObj?.methodName === 'push') {
      const value = testObj.pushedValue;
      const testStack = new Stack(TEST_LIMIT);

      for (let i = 0; i < TEST_LIMIT; i++) {
        testStack.push(value);
      }

      it(`Push() - invalid - ${caseTitle}`, () => {
        expect(() => {
          testStack.push(value);
        }).toThrow(errorMessage);
      });
    }

    if (testObj?.methodName === 'pop') {
      const testStack = new Stack(TEST_LIMIT);

      it(`Pop() - invalid - ${caseTitle}`, () => {
        expect(() => {
          testStack.pop();
        }).toThrow(errorMessage);
      });
    }

    if ('iterable' in testObj) {
      const iterItem = testObj.iterable;

      it(`fromIterable() - invalid - ${caseTitle}`, () => {
        expect(() => {
          Stack.fromIterable(iterItem);
        }).toThrow(errorMessage);
      });
    }
  });
});

describe(`homework_5 - LinkedList`, () => {
  const methodName = 'LinkedList';

  testSets[`${methodName}Data`].valid.forEach((testObj) => {
    const caseTitle = testObj.caseTitle;

    if (testObj?.methodName === 'constructor') {
      const limit = testObj.limit;
      const expectedLimit = testObj.expectedLimit;
      const testStack = (limit !== undefined) ? new Stack(limit) : new Stack();

      it(`constructor() - valid - ${caseTitle} with limit --> ${limit}`, () => {
        expect(testStack._limit).toEqual(expectedLimit);
        expect(testStack._length).toEqual(0);
        expect(testStack._stack).toEqual({});
      });
    }

    if (testObj?.methodName === 'append') {
      const items = testObj.itemsArr;
      const testList = new LinkedList();
      const expectedList = testObj.expectedList;

      it(`append() - valid - ${caseTitle} with an items --> ${items}`, () => {
        items.forEach((item) => testList.append(item));
        expect(testList._list).toEqual(expectedList);
      });
    }

    if (testObj?.methodName === 'prepend') {
      const items = testObj.itemsArr;
      const testList = testObj.initialList;
      const expectedList = testObj.expectedList;

      it(`prepend() - valid - ${caseTitle} with an items --> ${items}`, () => {
        items.forEach((item) => testList.prepend(item));
        expect(testList._list).toEqual(expectedList);
      });
    }

    if (testObj?.methodName === 'find') {
      const item = testObj.item;
      const testList = testObj.initialList;
      const expectedResult = testObj.expectedResult;

      it(`find() - valid - ${caseTitle} with an item --> ${item}`, () => {
        expect(testList.find(item)).toEqual(expectedResult);
      });
    }

    if (testObj?.methodName === 'toArray') {
      const testList = testObj.initialList;
      const expectedResult = testObj.expectedResult;

      it(`toArray() - valid - ${caseTitle}`, () => {
        expect(testList.toArray()).toEqual(expectedResult);
      });
    }

    if (testObj?.methodName === 'fromIterable') {
      const iterable = testObj.iterable;
      const expectedList = testObj.expectedList;

      it(`static fromIterable() - valid - ${caseTitle}`, () => {
        expect(LinkedList.fromIterable(iterable)._list).toEqual(expectedList);
      });
    }
  });

  testSets[`${methodName}Data`].invalid.forEach((testObj) => {
    const caseTitle = testObj.caseTitle;
    const errorMessage = testObj.errorMessage;

    if ('iterable' in testObj) {
      const iterItem = testObj.iterable;

      it(`fromIterable() - invalid - ${caseTitle}`, () => {
        expect(() => {
          LinkedList.fromIterable(iterItem);
        }).toThrow(errorMessage);
      });
    }
  });
});

describe(`homework_5 - Car`, () => {
  const methodName = 'Car';

  testSets[`${methodName}Data`].valid.forEach((testObj) => {
    const caseTitle = testObj.caseTitle;
    const testCase = testObj.testCase;
    const expectedResult = testObj.expectedResult;

    it(`Car - valid - ${caseTitle}`, () => {
      expect(testCase()).toEqual(expectedResult);
    });
  });

  testSets[`${methodName}Data`].invalid.forEach((testObj) => {
    const caseTitle = testObj.caseTitle;
    const testCase = testObj.testCase;
    const errorMessage = testObj.errorMessage;

    it(`Car - invalid - ${caseTitle}`, () => {
      expect(() => {
        testCase();
      }).toThrow(errorMessage);
    });
  });
});
