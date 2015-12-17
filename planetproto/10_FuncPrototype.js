function Robot(){
	this.parts = [];
	// this.capabilities = [];
}

Robot.prototype.capabilities = [];

var robby = new Robot('Robby');
var cranky = new Robot('Cranky');

// -> Claim the result of robby.parts
claim(robby.parts, []);
// -> Claim the result of cranky.parts
claim(cranky.parts,[]);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, []);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, []);

robby.parts.push('core');
robby.capabilities.push('fly');

// -> Claim the result of robby.parts
claim(robby.parts,['core']);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, ['fly']);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, ['fly']);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
}