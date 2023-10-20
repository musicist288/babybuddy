(function () {
    function zeropad(number) {
	let str = number.toString();
	if (str.length == 1) {
	    str = '0' + str;
	}
	return str;
    }
    
    document.addEventListener("DOMContentLoaded", function (evt) {
	document.addEventListener("click", function (evt) {
	    if (event.target.classList.contains('datetime-now')) {
		let datetimeInput =
		    evt.target.parentElement
                              .querySelector('input[type="datetime-local"]');

		let date = new Date();
		let dateStr = [
		    date.getFullYear().toString(),
		    zeropad(date.getMonth() + 1),
		    zeropad(date.getDate())
		].join('-');
		
		let timeStr = [
		    zeropad(date.getHours()),
		    zeropad(date.getMinutes()),
		    zeropad(date.getSeconds())
		].join(':');
		
		let dateTimeStr = dateStr + 'T' + timeStr;
		datetimeInput.value = dateTimeStr;
	    }
	});
    });
}());

