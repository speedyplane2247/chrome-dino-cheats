/*
chrome-dino-cheats 
(c) speedyplane2247 2019
*/
var dinohack = new Object();
if (location.href.indexOf("https://chromedino.com") != 0) {
alert("This version of the game is not supported. It will continue to run, but compatibility isn't guarenteed.")
}
alert("ChromeDinoCheats for chromedino.com loaded! use dinohack.*() to load a hack!")
dinohack.auto = function() {
// reccomended profile
Runner.config.ACCERLATION = 291.21 // best optimized for literal code ripping, as chromedino.com did.
}
dinohack.debug = function() {
// disable collosions, not reccomended for high-score runs, as you can't re-enable them.
alert("You have entered debug mode! The application WILL run out of RAM soon, and the Runner will hang, as it doesn't know how to use -1!")
Runner.config.MAX_OBSTACLE_DUPLICATION = -1 
Runner.config.MAX_OBSTACLE_LENGTH = -1
}
dinohack.banned = function() {
alert("Did you get banned? If so, do not worry. This is not a client anti-cheat, so your runs won't be flagged unless they exceed 20,000. Upon that, you won't be able to access the site until around 15 minutes later. Note: Getting that high of a score in-game will not ban you, it is whenn you tell the server your score, it will validate it. If it is greater than 20,000, it knows you are cheating, and will ban you. There is not much you can really do.")
}
