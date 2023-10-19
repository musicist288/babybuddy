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
		
		let currentValue = new Date(datetimeInput.value);
		let timeStr = [
		    zeropad(date.getHours()),
		    zeropad(date.getMinutes()),
		    // For some reason setting seconds to some value
		    // other than what the current value is throwing
		    // an error in Brave. Not interested in debugging
		    // this further and seconds are unimportant.
		    zeropad(currentValue.getSeconds())
		].join(':');
		
		let dateTimeStr = dateStr + 'T' + timeStr;
		datetimeInput.value = dateTimeStr;
	    }
	});
    });
}());

