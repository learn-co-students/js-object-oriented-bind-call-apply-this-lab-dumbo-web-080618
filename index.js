function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  if (arg.length > 0) {
    const condition = Array.prototype.slice.call(arg);
  return fn.call(thisValue, condition)
  } else {
  return fn.call(thisValue, arg)
  }
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}


function returnNewFunctionOf(functionToBeCopied, thisValue) {
  let newFun = functionToBeCopied.bind(thisValue);
  return newFun;
}
