// MathMagic block

let mathNumbersArray = [];

$('#math-btn').click(function () {
	$(".inputMath").each(function () {
		mathNumbersArray.push(Number($(this).val()));
	});
	$('#math-res1').text('Max number is: ' + Math.max(...mathNumbersArray));
	$('#math-res2').text('Min number is: ' + Math.min(...mathNumbersArray));
	$("#math-res3").text('Sum of numbers is: ' + mathNumbersArray.reduce(getSum));
	$("#math-res4").text('Product of numbers is: ' + mathNumbersArray.reduce(getProduct));
	$('#math-res5').text('Mean of numbers is: ' + (mathNumbersArray.reduce(getSum) / mathNumbersArray.length));
	mathNumbersArray = [];
})

// MathMagic clear button function
$('#math-clr').click(function () {
	$(".inputMath").each(function () {
		$(this).val('');
	});
	$(".res-tag").each(function () {
		$(this).text('');
	});
});


//MathMagic helpers
function getSum(total, num) {
	return total + num;
}

function getProduct(total, num) {
	return total * num;
}


// Factorial block
$('#fac-btn').click(function () {
	let inNumber = $('#fac-input').val();
	let factorial = 1;
	if (inNumber > 0) {
		for (let i = 1; i <= inNumber; i++) {
			factorial = factorial * i;
		}
		$('#fac-span').text(factorial);
	} else if (inNumber == 0) {
		$('#fac-span').text(factorial);
	} else {
		$('#fac-span').text('Please enter positive number');
	}
})


//FizzBuzz block
$("#fiz-btn").click(function () {
	let fizz = $('#fiz-input1').val();
	let buzz = $('#fiz-input2').val();
	let htmlString = '';

	for (let i = 1; i <= 100; i++) {
		if (i % fizz == 0 && i % buzz == 0) {
			htmlString += "<span class='red' >FizzBuzz, </span>";
		} else if (i % fizz == 0) {
			htmlString += "<span class='green' >Fizz, </span>";
		} else if (i % buzz == 0) {
			htmlString += "<span class='yellow' >Buzz, </span>";
		} else {
			htmlString += "<span>" + i + ", </span>";
		}
	}

	$('#fizz-result').html(htmlString);

});


//Palindrome block
$('#pal-btn').click(function () {
	let word = $("#pal-input").val();
	let pal = '';
	for (let i = word.length - 1; i >= 0; i--) {
		pal += word[i];
	}
	// one line solution
	// pal = word.split("").reverse().join("");

	if (pal === word) {
		$('#pal-result').text(`WORD ${word.toUpperCase()} IS  A PALINDROME!`);
	} else {
		$('#pal-result').text(`WORD ${word.toUpperCase()} IS NOT A PALINDROME!`);
	}
});


// SyntaxHiglighter show/hide blocks for each tab
$('#math-show').click(function () {
	$('#math-content').toggle();
	$('#math-code').toggle();
	if ($('#math-show').text() == "SHOW CODE") {
		$('#math-show').text('HIDE CODE');
	} else {
		$('#math-show').text('SHOW CODE');
	}
})

$('#fac-show').click(function () {
	$('#fac-content').toggle();
	$('#fac-code').toggle();
	if ($('#fac-show').text() == "SHOW CODE") {
		$('#fac-show').text('HIDE CODE');
	} else {
		$('#fac-show').text('SHOW CODE');
	}
})


$('#fiz-show').click(function () {
	$('#fiz-content').toggle();
	$('#fiz-code').toggle();
	if ($('#fiz-show').text() == "SHOW CODE") {
		$('#fiz-show').text('HIDE CODE');
	} else {
		$('#fiz-show').text('SHOW CODE');
	}
})


$('#pal-show').click(function () {
	$('#pal-content').toggle();
	$('#pal-code').toggle();
	if ($('#pal-show').text() == "SHOW CODE") {
		$('#pal-show').text('HIDE CODE')
	} else {
		$('#pal-show').text('SHOW CODE')
	}
})

//SyntaxHighliter init
SyntaxHighlighter.all()