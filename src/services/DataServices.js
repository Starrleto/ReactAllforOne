const addNums = async(num1, num2) => {
    const promise = await fetch(`https://numquestionssum.azurewebsites.net/sum/getsum/${num1}/${num2}`);
    const data = await promise.text();
    return data;
}

const greaterLess = async(num1, num2) => {
    const promise = await fetch(`https://numquestionssum.azurewebsites.net/numresult/numresults/${num1}/${num2}`);
    const data = await promise.json();
    return data;
}

const sayHello = async(pname) => {
    const promise = await fetch("https://numquestionssum.azurewebsites.net/sayhello/sayhello/"+pname);
    const data = await promise.text();
    console.log(data);
    return data;
}

const madlibs = async(wordOne, wordTwo, wordThree, wordFour, wordFive, wordSix, wordSeven, wordEight, wordNine, wordTen) => {
    const promise = await fetch(`https://numquestionssum.azurewebsites.net/Madlib/play/${wordOne}/${wordTwo}/${wordThree}/${wordFour}/${wordFive}/${wordSix}/${wordSeven}/${wordEight}/${wordNine}/${wordTen}`);
    const data = await promise.json();
    console.log(data.length);
    return data;
}

const magicEight = async(ques) => {
    const promise = await fetch("https://numquestionssum.azurewebsites.net/magic/getanswer/"+ques);
    const data = await promise.text();
    console.log(data);
    return data;
}

const questions = async(name, num) => {
    const promise = await fetch(`https://numquestionssum.azurewebsites.net/questions/questions/${name}/${num}`);
    const data = await promise.text();
    return data;
}

const restaraunt = async(word) => {
    const promise = await fetch("https://numquestionssum.azurewebsites.net/Restauraunt/FindRestauraunt/"+word);
    const data = await promise.text();
    console.log(data);
    return data;
}

const reverseNum = async(number) => {
    const promise = await fetch("https://numquestionssum.azurewebsites.net/ReverseNum/reverse/"+number);
    const data = await promise.text();
    console.log(data);
    return data;
}

const reverseWord = async(word) => {
    const promise = await fetch("https://numquestionssum.azurewebsites.net/Reversestring/reverse/"+word);
    const data = await promise.text();
    console.log(data);
    return data;
}

const oddEven = async(pname) => {
    const promise = await fetch("https://numquestionssum.azurewebsites.net/oddeven/getresult/"+pname);
    const data = await promise.text();
    console.log(data);
    return data;
}

export {addNums}
export {sayHello}
export {greaterLess}
export {madlibs}
export {magicEight}
export {questions}
export {restaraunt}
export {reverseNum}
export {reverseWord}
export {oddEven}