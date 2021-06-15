function userAction(actionType) {
  var userValue = document.getElementById("textboxValue").value;

  const assignValue = {
    defaultValue: userValue,
    actionFromUser: actionType,
  };

  // getter property
  Object.defineProperty(assignValue, "getValue", {
    get: function () {
      return this.defaultValue;
    },
  });

  // setter property
  Object.defineProperty(assignValue, "updateValue", {
    set: function (value) {
      this.defaultValue = value;
    },
  });

  // changing the value as per user action
  if (assignValue.actionFromUser == "Increment") {
    assignValue.updateValue = parseInt(assignValue.defaultValue) + 1;
  } else if (assignValue.actionFromUser == "Decrement") {
    assignValue.updateValue = parseInt(assignValue.defaultValue) - 1;
  } else if (assignValue.actionFromUser == "Multiply") {
    assignValue.updateValue = parseInt(assignValue.defaultValue) * parseInt(assignValue.defaultValue);
  } else if (assignValue.actionFromUser == "Addition") {
    assignValue.updateValue = parseInt(assignValue.defaultValue) + parseInt(assignValue.defaultValue);
  }
  document.getElementById("textboxValue").value = assignValue.getValue;
}
