
function create_pair(id1, id2) {
    const arr = [document.getElementById(id1).value, document.getElementById(id2).value];
    return arr;
}

function clear_component(id) {
    document.getElementById(id).style.borderColor = "inherit";
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

function growth_and_decay_calculation() {
    clear_component("population_0");
    clear_component("t_1");
    clear_component("population_1");
    clear_component("t_2");
    clear_component("population_2");

    const pairs = [];

    pairs.push([0, document.getElementById("population_0").value]);
    pairs.push(create_pair("t_1", "population_1"));
    pairs.push(create_pair("t_2", "population_2"));

    let non_valids = 0;
    let non_valid_id = "";


    for (let i = pairs.length - 1; i>=0; i--) {
        let state = check(pairs[i]);
        if (state != 2) {
            non_valids ++;
            value = pairs.splice(i, 1)[0];
            pairs.push(value);

            if (state == 0) {
                non_valid_id = "t_" + String(i);
            }
            else {
                non_valid_id = "population_" + String(i);
            }
        }
    }


    if (non_valids == 1) {

        let c = pairs[0][1]
        let k = Math.log(Math.abs(pairs[1][1] / c)) / pairs[1][0];
        let value = 0;

        const data = non_valid_id.split("_");

        if (data[0] == "population") {

            value = c * Math.exp(k * pairs[2][0]);

        }
        else if (non_valid_id.split("_")[0] == "t") {
            value = Math.log(Math.abs(pairs[2][1] / pairs[0][1])) / k

        }

        document.getElementById(non_valid_id).value = value.toFixed(2);
        document.getElementById(non_valid_id).style.borderColor = "#a0c980";

    }
    else {
        document.getElementById(non_valid_id).placeholder = "too many unknowns";
        document.getElementById(non_valid_id).style.borderColor = "#ec7279";

    }

}
function cooling_heating_calculation() {

    let temp_m = document.getElementById("temp_m").value;
    clear_component("temp_m");
    clear_component("temp_0");
    clear_component("time_1");
    clear_component("temp_1");
    clear_component("time_2");
    clear_component("temp_2");

    const pairs = [];

    pairs.push([0, document.getElementById("temp_0").value]);
    pairs.push(create_pair("time_1", "temp_1"));
    pairs.push(create_pair("time_2", "temp_2"));

    let non_valids = 0;
    let non_valid_id = "";


    for (let i = pairs.length - 1; i>=0; i--) {
        let state = check(pairs[i]);
        if (state != 2) {
            non_valids ++;
            value = pairs.splice(i, 1)[0];
            pairs.push(value);

            if (state == 0) {
                non_valid_id = "time_" + String(i);
            }
            else {
                non_valid_id = "temp_" + String(i);
            }
        }
    }

    if (check([temp_m]) != 1) {
        non_valids ++;
        non_valid_id = "temp_m";
    }


    if (non_valids == 1) {

        let c = (pairs[0][1] - temp_m);
        let k = Math.log((pairs[1][1] - temp_m) / c) / pairs[1][0];
        let value = 0;


        if (non_valid_id.split("_")[0] == "temp") {

            value = Number(temp_m) + c * Math.pow(Math.exp(1), pairs[2][0] * k);

        }
        else if (non_valid_id.split("_")[0] == "time") {
            value = Math.log(Math.abs((pairs[2][1] - Number(temp_m))/c)) / k;


        }

        document.getElementById(non_valid_id).value = value.toFixed(2);
        document.getElementById(non_valid_id).style.borderColor = "#a0c980";

        if (non_valid_id == "temp_m") {

            document.getElementById(non_valid_id).value = "";
            document.getElementById(non_valid_id).placeholder = "enter a valid value";
            document.getElementById(non_valid_id).style.borderColor = "#ec7279";
        }

    }
    else {
        document.getElementById(non_valid_id).placeholder = "too many unknowns";
        document.getElementById(non_valid_id).style.color = "#ec7279";

    }

    document.getElementById("result").innerHTML = String(non_valid_id) + ", " + String(non_valids);



}
