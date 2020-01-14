var { listData } = require('./sampledata.js');

var staticTotal = 0;

function flattenData(listData) {
  var result = [];
  for (let obj of listData) {
    if (obj.options === undefined) {
      staticTotal += Number(obj.price);
    } else {
      result.push(obj.options);
    }
  }
  return result;
}

var flattenedData = flattenData(listData);

function compileBudgets(flattenedData) {
  function allPossibleBudgets(arr) {
    if (arr.length === 0) {
      return [];
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      var result = [];
      var remainingBudgets = allPossibleBudgets(arr.slice(1));
      for (let budget in remainingBudgets) {
        for (let i = 0; i < arr[0].length; i++) {
          result.push({
            option: arr[0][i].option + '\n' + remainingBudgets[budget].option,
            price: Number(arr[0][i].price) + Number(remainingBudgets[budget].price) });
        }
      }
      for (let budget of result) {
        budget.price += staticTotal;
      }
      return result;
    }
  }
  return allPossibleBudgets(flattenedData);
}

var compiledBudgets = compileBudgets(flattenedData);


const sortBudgets = (budgetList) => {
  console.log(budgetList);
  var concat = function () {
    return [].concat.apply([], arguments);
  };
  var quicksort = function(array) {
    if (array.length <= 1) { return array; }
    var pivot = array[0];
    var left = array.slice(1).filter(function (x) {
      return x.price < pivot.price;
    });
    var right = array.slice(1).filter(function (x) {
      return x.price >= pivot.price;
    });
    return concat(quicksort(left), [pivot], quicksort(right));
  };
  return quicksort(budgetList);
}

var sortedBudgets = sortBudgets(compiledBudgets);

module.exports = { flattenData, compileBudgets, sortBudgets };