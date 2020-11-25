var countQuest = -1;
var plus = 0;
var test_start = 0;
var questions = ["__ I clever?", "When __ they __?", "Tim __ not a student", "My friend __ __ TV.", "Are my parents kind?", "Where __ they live?", "Tom and his sisters __ beautiful eyes.", "__ Jane __ English?", "How __ you __?", "We __ __ a car, but we __ __ buy it.", "Отметьте не содержащее ошибок:", "Вставьте артикль, если нужно: _ writer", "Вставьте артикль, если нужно: _ beautiful snow", "Вставьте артикль, если нужно: _ coffee", "Вставьте артикль, если нужно: _ Earth", "Вставьте артикль, если нужно: _ teeth"];
var number1 = ["Is", "are, students", "does", "wants, watching", "Yes, they aren't", "does", "have", "Do, speaks", "do, does", "hasn't, are going", "I wash up in the evening.", "не нужно", "не нужно", "не нужно", "не нужно", "не нужно"];
var number2 = ["Am", "does, students", "are", "wants, to watch", "No, they isn't", "do", "has", "Does, speaks", "do, do", "aren't have, are going to", "Do he go to school?", "a", "a", "a", "a", "a"];
var number3 = ["Are", "are, student", "is", "want, to watch", "Yes, the are", "does, the", "are", "Does, speak", "does, do", "don't have, are going to", "They are going go for a walk.", "the", "the", "the", "the", "the"];
var answer = [1, 0, 2, 1, 2, 1, 0, 2, 1, 2, 0, 1, 0, 0, 2, 0];

$(document).ready(function () {
    $("#start").click(check);
});

function check(num) {
    $(".result").css("display", "none");
    $("#area").css("display", "block");
    $("#start").css("display", "none");
    $("#resultyes").css("display", "none");
    $("#resultno").css("display", "none");
    if (num == 4) {
        if (test_start == 0) {
            $("#question").html(questions[countQuest]);
            $("#option1").html(number1[countQuest]);
            $("#option2").html(number2[countQuest]);
            $("#option3").html(number3[countQuest]);
            test_start = 1;

        }
    }
    if (num !== 4) {
        if (num == answer[countQuest])
            plus++;
        if (questions.length - 1 > countQuest) {
            countQuest++;
            $("#question").html(questions[countQuest]);

            $("#option1").html(number1[countQuest]);
            $("#option2").html(number2[countQuest]);
            $("#option3").html(number3[countQuest]);
        } else {
            $("#area").css("display", "none");
            $(".result").css("display", "block");
            if (plus >= 9 * answer.length / 10) {
                $("#next").css("display", "block");
                $(".result #res").html(plus);
                $("#resultyes").css("display", "block");
                $("#resultno").css("display", "none");
            } else {
                $("#start").css("display", "block");
                $(".result #res").html(plus);
                $("#resultno").css("display", "block");
                $("#resultyes").css("display", "none");
            }
            countQuest = -1;
            plus = 0;
            test_start = 0;
        }
    }
}