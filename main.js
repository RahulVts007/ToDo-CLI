function setCount () {
    let count = 0;
    function set () {
        count++;
        console.log(count);
    }
    return set;
}

const score = setCount();
score.set();
