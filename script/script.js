function multi() {
    "use strict";

    /* Input Validation Coding */
    document.getElementById("input-1").onkeypress = function(event) {
        if(event.keyCode >= 47 && event.keyCode <= 57) {
            return true;
        }

        else {
            return false;
        }
    }
    /* End Input Validation Coding */

    var table = document.getElementById("table");
    document.getElementById("btn").onclick = function() {
        if(document.getElementById("input-1").value != "" && document.getElementById("input-2").value != "") {
            get_result();
        }
    };

    function get_result() {
        var i,j,k,l,
        input_1 = Number(document.getElementById("input-1").value),
        input_2 = Number(document.getElementById("input-2").value);

        table.style.display = "table";
        table.innerHTML = "<tr class='all-tr'><td id='input-1-value'></td></tr><tr class='all-tr'><td id='input-2-value'></td></tr>";
        document.getElementById("input-1-value").innerHTML = input_1;
        document.getElementById("input-2-value").innerHTML = "x"+input_2;

        for(i = 0; i < Number(String(input_2).length); i++) {
            var tr = document.createElement("tr");
            tr.className = "all-tr";
            var td = document.createElement("td");
            td.style.color = "blue";
            td.className = "all-td";
        
            table.append(tr);
            tr.append(td);
        }

        var length = document.getElementsByClassName("all-td").length-1;
        var a = "";
        var span = document.createElement("span");

        for(j = length; j >= 0; j--) {
            document.getElementsByClassName("all-td")[Number(length)-j].innerHTML = input_1 * Number(String(input_2).charAt(j));

            if(document.getElementsByClassName("all-td")[Number(length)-j].innerHTML == 0 && String(document.getElementsByClassName("all-td")[Number(length)-j].innerHTML).length == 1) {
                print_zero(j);
            }
        }

        function print_zero(j) {
            for(l = 1; l < Number(String(input_1).length); l++) {
                document.getElementsByClassName("all-td")[Number(length)-j].innerHTML += "0";
            }
        }

        /* To Print X In Multiplication*/
        if(length >= 1) {
            for(j = 0; j < length; j++) {
                span.append(document.createTextNode("x"));
                span.style.display = "none";
                a += span.innerHTML+",";
            }

            var x_number = a.split(',');

            for(k = 0; k < String(x_number).length-1; k++) {

                if(document.getElementsByClassName("all-td")[k+1] != undefined) {
                    document.getElementsByClassName("all-td")[k+1].innerHTML += x_number[k];
                }
            }
        }
        /* End To Print X In Multiplication */

        document.getElementsByClassName("all-td")[length].style.borderBottom = "2px solid blue";

        if(String(input_2).length != 1) {
            var tr_ans = document.createElement("tr");
            var td_ans = document.createElement("td");
            table.append(tr_ans);
            tr_ans.append(td_ans);
            tr_ans.className = "all-tr";
            td_ans.innerHTML = Math.round(input_1*input_2);
            td_ans.style.borderBottom = "2px solid blue";
            td_ans.style.letterSpacing = "10px";
        }

    }
}

multi();