if( document.readyState !== 'loading' ) {
    main();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        main();
    });
}

function main() {	
	console.log("NOBS injected...");
	var bs = [
		[0, 30],
		[40, 70],
		[80, 600],
	]
	var player = document.getElementsByTagName('video')[0];
	setInterval(function(){
		player = document.getElementsByTagName('video')[0];
		if(player) {
			bs.forEach((range, key) => {
				if(range[0] < player.currentTime && range[1] > player.currentTime) {
					console.log("Skipping BS!");
					player.currentTime = range[1];
					bs.splice(key, 1);
				} else {				
					console.log("No BS detected!");
				}
			})
		}
	}, 1000);
}