import { Car, LinkedList } from "../../src_js/homework_5";

const INVALID_LIMIT_VALUE_MESSAGE = 'Invalid limit value';
const LIMIT_EXCEEDED_MESSAGE = 'Limit exceeded';
const EMPTY_STACK_MESSAGE = 'Empty stack';
const NOT_ITERABLE_MESSAGE = 'Not iterable';

const StackData = {
  valid: [
    {
      caseTitle: 'pass positive float to the constructor',
      methodName: 'constructor',
      limit: 16.23,
      expectedLimit: 16,
    },
    {
      caseTitle: 'pass positive float to the constructor',
      methodName: 'constructor',
      limit: 16.89,
      expectedLimit: 17,
    },
    {
      caseTitle: 'pass positive integer to the constructor',
      methodName: 'constructor',
      limit: 12,
      expectedLimit: 12,
    },
    {
      caseTitle: 'doesn`t pass a limit',
      methodName: 'constructor',
      limit: undefined,
      expectedLimit: 10,
    },
    {
      caseTitle: 'push items',
      methodName: 'push',
      itemsArr: [1, 2, 3],
      expectedStack: {0: 1, 1: 2, 2: 3},
    },
    {
      caseTitle: 'push items',
      methodName: 'push',
      itemsArr: ['string', 2, NaN, {key: 'object'}],
      expectedStack: {0: 'string', 1: 2, 2: NaN, 3: {key: 'object'}},
    },
    {
      caseTitle: 'pop item',
      methodName: 'pop',
      initialStack: [1, 2, 3],
      expectedStack: {0: 1, 1: 2,},
      expectedPop: 3,
      expectedLimit: 3,
      expectedLength: 2,
    },
    {
      caseTitle: 'pop item',
      methodName: 'pop',
      initialStack: ['item'],
      expectedStack: {},
      expectedPop: 'item',
      expectedLimit: 1,
      expectedLength: 0,
    },
    {
      caseTitle: 'peek item',
      methodName: 'peek',
      initialStack: [1, 2, 'item'],
      expectedStack: {0: 1, 1: 2, 2: 'item'},
      expectedPeek: 'item',
      expectedLimit: 3,
      expectedLength: 3,
    },
    {
      caseTitle: 'from stack to Array',
      methodName: 'toArray',
      initialStack: [1, 2, 'item'],
      expectedStack: {0: 1, 1: 2, 2: 'item'},
      expectedResult: [1, 2, 'item'],
    },
    {
      caseTitle: 'create Stack from an Array',
      methodName: 'fromIterable',
      iterable: ['string', 2, NaN, {key: 'object'}],
      expectedStack: {0: 'string', 1: 2, 2: NaN, 3: {key: 'object'}},
      expectedLimit: 4,
      expectedLength: 4,
    },
    {
      caseTitle: 'create Stack from a string',
      methodName: 'fromIterable',
      iterable: 'xyz',
      expectedStack: {0: 'x', 1: 'y', 2: 'z'},
      expectedLimit: 3,
      expectedLength: 3,
    },
  ],
  invalid: [
    {
      caseTitle: 'Invalid limit value',
      limit: 0,
      errorMessage: INVALID_LIMIT_VALUE_MESSAGE,
    },
    {
      caseTitle: 'Invalid limit value',
      limit: -34,
      errorMessage: INVALID_LIMIT_VALUE_MESSAGE,
    },
    {
      caseTitle: 'Invalid limit value',
      limit: '34',
      errorMessage: INVALID_LIMIT_VALUE_MESSAGE,
    },
    {
      caseTitle: 'Invalid limit value',
      limit: Infinity,
      errorMessage: INVALID_LIMIT_VALUE_MESSAGE,
    },
    {
      caseTitle: 'Invalid limit value',
      limit: NaN,
      errorMessage: INVALID_LIMIT_VALUE_MESSAGE,
    },
    {
      caseTitle: 'push, but limit is exceeded',
      methodName: 'push',
      pushedValue: 'next',
      errorMessage: LIMIT_EXCEEDED_MESSAGE,
    },
    {
      caseTitle: 'pop, but stack is empty',
      methodName: 'pop',
      errorMessage: EMPTY_STACK_MESSAGE,
    },
    {
      caseTitle: 'static fromIterable(), pass not iterable object',
      iterable: {key: 'not iterable'},
      errorMessage: NOT_ITERABLE_MESSAGE,
    },
    {
      caseTitle: 'static fromIterable(), pass not iterable item',
      iterable: 123,
      errorMessage: NOT_ITERABLE_MESSAGE,
    },
    {
      caseTitle: 'static fromIterable(), pass not iterable item',
      iterable: null,
      errorMessage: NOT_ITERABLE_MESSAGE,
    },
    {
      caseTitle: 'static fromIterable(), pass not iterable item',
      iterable: undefined,
      errorMessage: NOT_ITERABLE_MESSAGE,
    },
  ]
}

const LinkedListData = {
  valid: [
    {
      caseTitle: 'append items',
      methodName: 'append',
      itemsArr: [1],
      expectedList: {value: 1, next: null},
    },
    {
      caseTitle: 'append items',
      methodName: 'append',
      itemsArr: [1, 2, 3, 4],
      expectedList: {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}},
    },
    {
      caseTitle: 'prepend items',
      methodName: 'prepend',
      initialList: new LinkedList(),
      itemsArr: [1],
      expectedList: {value: 1, next: null},
    },
    {
      caseTitle: 'prepend items',
      methodName: 'prepend',
      initialList: new LinkedList()
        .append(1),
      itemsArr: [2],
      expectedList: {value: 2, next: {value: 1, next: null}},
    },
    {
      caseTitle: 'prepend items',
      methodName: 'prepend',
      initialList: new LinkedList()
        .append(1),
      itemsArr: [2, 3, 4],
      expectedList:{value: 4, next: {value: 3, next: {value: 2, next: {value: 1, next: null}}}},
    },
    {
      caseTitle: 'find item in the middle',
      methodName: 'find',
      initialList: new LinkedList()
        .append(1)
        .append(2)
        .append('item')
        .append(4),
      item: 'item',
      expectedResult: 'item',
    },
    {
      caseTitle: 'find first item',
      methodName: 'find',
      initialList: new LinkedList()
        .append('item')
        .append(2)
        .append(3),
      item: 'item',
      expectedResult: 'item',
    },
    {
      caseTitle: 'find last item',
      methodName: 'find',
      initialList: new LinkedList()
        .append(1)
        .append(2)
        .append('item'),
      item: 'item',
      expectedResult: 'item',
    },
    {
      caseTitle: 'not find item',
      methodName: 'find',
      initialList: (() => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        return list;
      })(),
      item: 'item',
      expectedResult: null,
    },
    {
      caseTitle: 'not find item',
      methodName: 'find',
      initialList: (() => {
        const list = new LinkedList();
        return list;
      })(),
      item: 'item',
      expectedResult: null,
    },
    {
      caseTitle: 'not find item',
      methodName: 'find',
      initialList: (() => {
        const list = new LinkedList();
        return list;
      })(),
      item: undefined,
      expectedResult: null,
    },
    {
      caseTitle: 'not find item',
      methodName: 'find',
      initialList: new LinkedList()
        .append(1),
      item: undefined,
      expectedResult: null,
    },
    {
      caseTitle: 'not find item',
      methodName: 'find',
      initialList: new LinkedList()
        .append(1)
        .append(2)
        .append(3),
      item: undefined,
      expectedResult: null,
    },
    {
      caseTitle: 'create arr from a list',
      methodName: 'toArray',
      initialList: new LinkedList()
        .append(1)
        .append(2)
        .append(3),
      expectedResult: [1, 2, 3],
    },
    {
      caseTitle: 'create arr from an empty list',
      methodName: 'toArray',
      initialList: new LinkedList(),
      expectedResult: [],
    },
    {
      caseTitle: 'create list from an array',
      methodName: 'fromIterable',
      iterable: [4, 3, 2, 1],
      expectedList: {value: 4, next: {value: 3, next: {value: 2, next: {value: 1, next: null}}}},
    },
    {
      caseTitle: 'create list from a string',
      methodName: 'fromIterable',
      iterable: 'xyz',
      expectedList: {value: 'x', next: {value: 'y', next: {value: 'z', next: null}}},
    },
  ],
  invalid: [
    {
      caseTitle: 'static fromIterable(), pass not iterable object',
      iterable: {key: 'not iterable'},
      errorMessage: NOT_ITERABLE_MESSAGE,
    },
    {
      caseTitle: 'static fromIterable(), pass not iterable item',
      iterable: 123,
      errorMessage: NOT_ITERABLE_MESSAGE,
    },
    {
      caseTitle: 'static fromIterable(), pass not iterable item',
      iterable: null,
      errorMessage: NOT_ITERABLE_MESSAGE,
    },
    {
      caseTitle: 'static fromIterable(), pass not iterable item',
      iterable: undefined,
      errorMessage: NOT_ITERABLE_MESSAGE,
    },
  ]

}

  const commonTestCar = new Car();

  const CarData = {
    valid: [
      {
        caseTitle: 'check initial empty name',
        testCase: () => {
          return commonTestCar.brand;
        },
        expectedResult: '',
      },
      {
        caseTitle: 'valid brand name',
        testCase: () => {
          commonTestCar.brand = 'Toyota';

          return commonTestCar.brand;
        },
        expectedResult: 'Toyota',
      },
      {
        caseTitle: 'check initial empty name',
        testCase: () => {
          return commonTestCar.model;
        },
        expectedResult: '',
      },
      {
        caseTitle: 'valid model name',
        testCase: () => {
          commonTestCar.model = 'RTX 60';

          return commonTestCar.model;
        },
        expectedResult: 'RTX 60',
      },
      {
        caseTitle: 'check initial year',
        testCase: () => {
          return commonTestCar.yearOfManufacturing;
        },
        expectedResult: 1950,
      },
      {
        caseTitle: 'set valid year',
        testCase: () => {
          commonTestCar.yearOfManufacturing = 2001;

          return commonTestCar.yearOfManufacturing;
        },
        expectedResult: 2001,
      },
      {
        caseTitle: 'set valid year',
        testCase: () => {
          commonTestCar.yearOfManufacturing = 1950;

          return commonTestCar.yearOfManufacturing;
        },
        expectedResult: 1950,
      },
      {
        caseTitle: 'set valid year',
        testCase: () => {
          commonTestCar.yearOfManufacturing = 2023;

          return commonTestCar.yearOfManufacturing;
        },
        expectedResult: 2023,
      },
      {
        caseTitle: 'check initial max speed',
        testCase: () => {
          return commonTestCar.maxSpeed;
        },
        expectedResult: 100,
      },
      {
        caseTitle: 'set valid max speed',
        testCase: () => {
          commonTestCar.maxSpeed = 330;

          return commonTestCar.maxSpeed;
        },
        expectedResult: 330,
      },
      {
        caseTitle: 'set valid max speed',
        testCase: () => {
          commonTestCar.maxSpeed = 150;

          return commonTestCar.maxSpeed;
        },
        expectedResult: 150,
      },
      {
        caseTitle: 'set valid max speed',
        testCase: () => {
          commonTestCar.maxSpeed = 100;

          return commonTestCar.maxSpeed;
        },
        expectedResult: 100,
      },
      {
        caseTitle: 'check initial maxFuelVolume',
        testCase: () => {
          return commonTestCar.maxFuelVolume;
        },
        expectedResult: 20,
      },
      {
        caseTitle: 'set valid maxFuelVolume',
        testCase: () => {
          commonTestCar.maxFuelVolume = 100;

          return commonTestCar.maxFuelVolume;
        },
        expectedResult: 100,
      },
      {
        caseTitle: 'set valid maxFuelVolume',
        testCase: () => {
          commonTestCar.maxFuelVolume = 20;

          return commonTestCar.maxFuelVolume;
        },
        expectedResult: 20,
      },
      {
        caseTitle: 'set valid maxFuelVolume',
        testCase: () => {
          commonTestCar.maxFuelVolume = 50;

          return commonTestCar.maxFuelVolume;
        },
        expectedResult: 50,
      },
      {
        caseTitle: 'check initial fuelConsumption',
        testCase: () => {
          return commonTestCar.fuelConsumption;
        },
        expectedResult: 1,
      },
      {
        caseTitle: 'set valid fuelConsumption',
        testCase: () => {
          commonTestCar.fuelConsumption = 20;

          return commonTestCar.fuelConsumption;
        },
        expectedResult: 20,
      },
      {
        caseTitle: 'set valid fuelConsumption',
        testCase: () => {
          commonTestCar.fuelConsumption = 1;

          return commonTestCar.fuelConsumption;
        },
        expectedResult: 1,
      },
      {
        caseTitle: 'check initial damage',
        testCase: () => {
          return commonTestCar.damage;
        },
        expectedResult: 1,
      },
      {
        caseTitle: 'set valid damage',
        testCase: () => {
          commonTestCar.damage = 5;

          return commonTestCar.damage;
        },
        expectedResult: 5,
      },
      {
        caseTitle: 'set valid damage',
        testCase: () => {
          commonTestCar.damage = 1;

          return commonTestCar.damage;
        },
        expectedResult: 1,
      },
      {
        caseTitle: 'check initial currentFuelVolume',
        testCase: () => {
          return commonTestCar.currentFuelVolume;
        },
        expectedResult: 0,
      },
      {
        caseTitle: 'check initial isStarted',
        testCase: () => {
          return commonTestCar.isStarted;
        },
        expectedResult: false,
      },
      {
        caseTitle: 'check initial mileage',
        testCase: () => {
          return commonTestCar.mileage;
        },
        expectedResult: 0,
      },
      {
        caseTitle: 'check initial health',
        testCase: () => {
          return commonTestCar.health;
        },
        expectedResult: 100,
      },
      {
        caseTitle: 'start() check starting',
        testCase: () => {
          commonTestCar.start()
          return commonTestCar.isStarted;
        },
        expectedResult: true,
      },
      {
        caseTitle: 'shutDownEngine() check shutdown',
        testCase: () => {
          commonTestCar.shutDownEngine()
          return commonTestCar.isStarted;
        },
        expectedResult: false,
      },
      {
        caseTitle: 'drive() and fillUpGasTank() check',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(newTestCar.getFullAmount());
          newTestCar.start();
          newTestCar.drive(100, 4)
          return [newTestCar.isStarted, newTestCar.currentFuelVolume, newTestCar.health, newTestCar.mileage];
        },
        expectedResult: [true, 16, 96, 400],
      },
      {
        caseTitle: 'drive() and fillUpGasTank() check',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.maxSpeed = 330;
          newTestCar.start();
          newTestCar.drive(200, 2)
          newTestCar.drive(300, 2)
          return [newTestCar.maxSpeed, newTestCar.isStarted, newTestCar.currentFuelVolume, newTestCar.health, newTestCar.mileage];
        },
        expectedResult: [330, true, 0, 90, 1000],
      },
      {
        caseTitle: 'getFullAmount() check',
        testCase: () => {
          const newTestCar = new Car();
          const initialValue = newTestCar.getFullAmount();
          newTestCar.fillUpGasTank(initialValue);
          return [initialValue, newTestCar.getFullAmount()];
        },
        expectedResult: [20, 0],
      },
      {
        caseTitle: 'repair() check',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.maxSpeed = 330;
          newTestCar.start();
          newTestCar.drive(200, 2)
          newTestCar.drive(300, 2)
          newTestCar.shutDownEngine();
          newTestCar.fillUpGasTank(newTestCar.getFullAmount());
          newTestCar.repair();

          return [newTestCar.isStarted, newTestCar.currentFuelVolume, newTestCar.health];
        },
        expectedResult: [false, 20, 100],
      },
    ],

    invalid: [
      {
        caseTitle: 'invalid brand name value',
        testCase: () => {
          commonTestCar.brand = '';
        },
        errorMessage: 'Invalid brand name',
      },
      {
        caseTitle: 'invalid brand type',
        testCase: () => {
          commonTestCar.brand = 343443;
        },
        errorMessage: 'Invalid brand name',
      },
      {
        caseTitle: 'invalid brand name length',
        testCase: () => {
          commonTestCar.brand = `test_test-test_test-test_test-test_test-test_test-test_test-
                                test_test-test_test-test_test-test_test-test_test-test_test-
                                test_test-test_test-test_test-test_test-test_test-test_test-
                                test_test-test_test-test_test-test_test-test_test-test_test-
                                test_test-test_test-test_test-test_test-test_test-test_test-`;
        },
        errorMessage: 'Invalid brand name',
      },
      {
        caseTitle: 'invalid model name value',
        testCase: () => {
          commonTestCar.model = '';
        },
        errorMessage: 'Invalid model name',
      },
      {
        caseTitle: 'invalid model type',
        testCase: () => {
          commonTestCar.model = 343443;
        },
        errorMessage: 'Invalid model name',
      },
      {
        caseTitle: 'invalid model name length',
        testCase: () => {
          commonTestCar.model = `test_test-test_test-test_test-test_test-test_test-test_test-
                                test_test-test_test-test_test-test_test-test_test-test_test-
                                test_test-test_test-test_test-test_test-test_test-test_test-
                                test_test-test_test-test_test-test_test-test_test-test_test-
                                test_test-test_test-test_test-test_test-test_test-test_test-`;
        },
        errorMessage: 'Invalid model name',
      },
      {
        caseTitle: 'invalid year type',
        testCase: () => {
          commonTestCar.yearOfManufacturing = '2001';
        },
        errorMessage: 'Invalid year of manufacturing',
      },
      {
        caseTitle: 'invalid year value',
        testCase: () => {
          commonTestCar.yearOfManufacturing = NaN;
        },
        errorMessage: 'Invalid year of manufacturing',
      },
      {
        caseTitle: 'invalid year value',
        testCase: () => {
          commonTestCar.yearOfManufacturing = Infinity;
        },
        errorMessage: 'Invalid year of manufacturing',
      },
      {
        caseTitle: 'invalid year value',
        testCase: () => {
          commonTestCar.yearOfManufacturing = 0;
        },
        errorMessage: 'Invalid year of manufacturing',
      },
      {
        caseTitle: 'invalid year value',
        testCase: () => {
          commonTestCar.yearOfManufacturing = 1949;
        },
        errorMessage: 'Invalid year of manufacturing',
      },
      {
        caseTitle: 'invalid year value',
        testCase: () => {
          commonTestCar.yearOfManufacturing = 2024;
        },
        errorMessage: 'Invalid year of manufacturing',
      },
      {
        caseTitle: 'invalid maxSpeed value',
        testCase: () => {
          commonTestCar.maxSpeed = NaN;
        },
        errorMessage: 'Invalid max speed',
      },
      {
        caseTitle: 'invalid maxSpeed value',
        testCase: () => {
          commonTestCar.maxSpeed = Infinity;
        },
        errorMessage: 'Invalid max speed',
      },
      {
        caseTitle: 'invalid maxSpeed value',
        testCase: () => {
          commonTestCar.maxSpeed = 0;
        },
        errorMessage: 'Invalid max speed',
      },
      {
        caseTitle: 'invalid maxSpeed value',
        testCase: () => {
          commonTestCar.maxSpeed = 12.34;
        },
        errorMessage: 'Invalid max speed',
      },
      {
        caseTitle: 'invalid maxSpeed value',
        testCase: () => {
          commonTestCar.maxSpeed = 99;
        },
        errorMessage: 'Invalid max speed',
      },
      {
        caseTitle: 'invalid maxSpeed value',
        testCase: () => {
          commonTestCar.maxSpeed = 331;
        },
        errorMessage: 'Invalid max speed',
      },
      {
        caseTitle: 'invalid maxSpeed value',
        testCase: () => {
          commonTestCar.maxSpeed = '150';
        },
        errorMessage: 'Invalid max speed',
      },
      {
        caseTitle: 'invalid maxFuelVolume value',
        testCase: () => {
          commonTestCar.maxFuelVolume = NaN;
        },
        errorMessage: 'Invalid max fuel volume',
      },
      {
        caseTitle: 'invalid maxFuelVolume value',
        testCase: () => {
          commonTestCar.maxFuelVolume = Infinity;
        },
        errorMessage: 'Invalid max fuel volume',
      },
      {
        caseTitle: 'invalid maxFuelVolume value',
        testCase: () => {
          commonTestCar.maxFuelVolume = 19;
        },
        errorMessage: 'Invalid max fuel volume',
      },
      {
        caseTitle: 'invalid maxFuelVolume value',
        testCase: () => {
          commonTestCar.maxFuelVolume = 101;
        },
        errorMessage: 'Invalid max fuel volume',
      },
      {
        caseTitle: 'invalid maxFuelVolume value',
        testCase: () => {
          commonTestCar.maxFuelVolume = '25';
        },
        errorMessage: 'Invalid max fuel volume',
      },
      {
        caseTitle: 'invalid fuelConsumption value',
        testCase: () => {
          commonTestCar.fuelConsumption = '25';
        },
        errorMessage: 'Invalid fuel consumption',
      },
      {
        caseTitle: 'invalid fuelConsumption value',
        testCase: () => {
          commonTestCar.fuelConsumption = NaN;
        },
        errorMessage: 'Invalid fuel consumption',
      },
      {
        caseTitle: 'invalid fuelConsumption value',
        testCase: () => {
          commonTestCar.fuelConsumption = Infinity;
        },
        errorMessage: 'Invalid fuel consumption',
      },
      {
        caseTitle: 'invalid fuelConsumption value',
        testCase: () => {
          commonTestCar.fuelConsumption = 0;
        },
        errorMessage: 'Invalid fuel consumption',
      },
      {
        caseTitle: 'invalid damage value',
        testCase: () => {
          commonTestCar.damage = 0;
        },
        errorMessage: 'Invalid damage',
      },
      {
        caseTitle: 'invalid damage value',
        testCase: () => {
          commonTestCar.damage = 6;
        },
        errorMessage: 'Invalid damage',
      },
      {
        caseTitle: 'invalid damage value',
        testCase: () => {
          commonTestCar.damage = 3.5;
        },
        errorMessage: 'Invalid damage',
      },
      {
        caseTitle: 'invalid damage value',
        testCase: () => {
          commonTestCar.damage = '3';
        },
        errorMessage: 'Invalid damage',
      },
      {
        caseTitle: 'invalid damage value',
        testCase: () => {
          commonTestCar.damage = NaN;
        },
        errorMessage: 'Invalid damage',
      },
      {
        caseTitle: 'invalid damage value',
        testCase: () => {
          commonTestCar.damage = Infinity;
        },
        errorMessage: 'Invalid damage',
      },
      {
        caseTitle: 'invalid start() call',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.start();
          newTestCar.start();
        },
        errorMessage: 'Car has already started',
      },
      {
        caseTitle: 'invalid shutDownEngine() call',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.shutDownEngine();
        },
        errorMessage: "Car hasn't started yet",
      },
      {
        caseTitle: 'invalid fillUpGasTank() call',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank('3');
        },
        errorMessage: "Invalid fuel amount",
      },
      {
        caseTitle: 'invalid fillUpGasTank() call',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(0);
        },
        errorMessage: "Invalid fuel amount",
      },
      {
        caseTitle: 'invalid fillUpGasTank() call',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(NaN);
        },
        errorMessage: "Invalid fuel amount",
      },
      {
        caseTitle: 'invalid fillUpGasTank() call',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(Infinity);
        },
        errorMessage: "Invalid fuel amount",
      },
      {
        caseTitle: 'invalid fillUpGasTank() call',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(20.001);
        },
        errorMessage: "Too much fuel",
      },
      {
        caseTitle: 'invalid fillUpGasTank() call',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.start();
          newTestCar.fillUpGasTank(5);
        },
        errorMessage: "You have to shut down your car first",
      },
      {
        caseTitle: 'drive() invalid speed',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.start();
          newTestCar.drive('70', 2)
        },
        errorMessage: "Invalid speed",
      },
      {
        caseTitle: 'drive() invalid speed',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.start();
          newTestCar.drive(70.2, 2)
        },
        errorMessage: "Invalid speed",
      },
      {
        caseTitle: 'drive() invalid speed',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.start();
          newTestCar.drive(NaN)
        },
        errorMessage: "Invalid speed",
      },
      {
        caseTitle: 'drive() invalid speed',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.start();
          newTestCar.drive(Infinity)
        },
        errorMessage: "Invalid speed",
      },
      {
        caseTitle: 'drive() invalid duration',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.start();
          newTestCar.drive(70, '2')
        },
        errorMessage: "Invalid duration",
      },
      {
        caseTitle: 'drive() invalid duration',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.start();
          newTestCar.drive(70, NaN)
        },
        errorMessage: "Invalid duration",
      },
      {
        caseTitle: 'drive() invalid duration',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.start();
          newTestCar.drive(70, Infinity)
        },
        errorMessage: "Invalid duration",
      },
      {
        caseTitle: 'drive() invalid duration',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.start();
          newTestCar.drive(70, -20)
        },
        errorMessage: "Invalid duration",
      },
      {
        caseTitle: 'drive() too fast',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.start();
          newTestCar.drive(101, 2)
        },
        errorMessage: "Car can't go this fast",
      },
      {
        caseTitle: 'drive() isn`t started',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(10);
          newTestCar.drive(70, 2)
        },
        errorMessage: "You have to start your car first",
      },
      {
        caseTitle: 'drive() not enought fuel',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(1);
          newTestCar.start();
          newTestCar.drive(100, 2)
        },
        errorMessage: "You don't have enough fuel",
      },
      {
        caseTitle: 'drive() not enought health',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.maxFuelVolume = 100;
          newTestCar.fillUpGasTank(100);
          newTestCar.start();
          newTestCar.drive(100, 100)
          newTestCar.shutDownEngine();
          newTestCar.fillUpGasTank(100);
          newTestCar.start();
          newTestCar.drive(100, 1)
        },
        errorMessage: "Your car won’t make it",
      },
      {
        caseTitle: 'repair() is started',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.fillUpGasTank(1);
          newTestCar.start();
          newTestCar.repair();
        },
        errorMessage: "You have to shut down your car first",
      },
      {
        caseTitle: 'repair() not enought fuel',
        testCase: () => {
          const newTestCar = new Car();
          newTestCar.maxFuelVolume = 100;
          newTestCar.fillUpGasTank(100);
          newTestCar.start();
          newTestCar.drive(100, 100)
          newTestCar.shutDownEngine();
          newTestCar.fillUpGasTank(99);
          newTestCar.repair();
        },
        errorMessage: "You have to fill up your gas tank first",
      },
    ]
}

export default {
  StackData,
  LinkedListData,
  CarData,
}
