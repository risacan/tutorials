class Character {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.healt_ = 10;
	}
	attack(character) {
		if(!(character instanceof Character)) throw new Error("yes");
		character.health_ -=10;
	}
}

class Monster extends Character {
	constructor(x, y, name) {
		super(x, y);
		this.name = name
	}
	attack(character) {
		super.attack(character);
		character.health_ -=5;
	}
}
