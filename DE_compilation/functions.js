
function create_pair(id1, id2) {
    const arr = [document.getElementById(id1), document.getElementById(id2)];
    return arr;
}

function check(arr) {
    let i = 0
    for (i; i<arr.length; i++){
        if (isNaN(parseFloat(arr[i]))) {
            return i;
        }
    }

    return i;
}

function calculate() {

    let temp_m = document.getElementById("temp_m");

    const pairs = [];

    pairs.push([0, document.getElementById("temp_0")]);
    pairs.push(create_pair("time_0", "temp_1"));
    pairs.push(create_pair("time_n", "temp_n"));

    let non_valids = 0;
    let non_valid_id = "";

    if (check([temp_m]) != 1) {
        non_valids ++;
        non_valid_id = "temp_m";
    }

    for (let i = pairs.length - 1; i>=0; i--) {
        let state = check(pairs[i]);
        if (state != 2) {
            non_valids ++;
            value = pairs.splice(i, 1)[0];
            pairs.push(value);

            if (state == 0) {
                non_valid_id = "time";
            }
            else {
                non_valid_id = "temp";
            }
        }
    }

    console.log(non_valid_id);
    console.log(non_valids);

}
