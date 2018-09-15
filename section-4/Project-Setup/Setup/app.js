new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        
        giveUpGame: function () {
            this.gameRunning = false;
            alert("Gave up, huh !!!!");
        },

        attack: function () {
            var playerMaxDamage = 10;
            var playerMinDamage = 3;

            damage = doDamage(playerMaxDamage, playerMinDamage);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });

            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },

        specialAttack: function () {
            var playerMaxDamage = 15;
            var playerMinDamage = 8;

            damage = doDamage(playerMaxDamage, playerMinDamage);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },

        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
        },

        monsterAttacks: function() {
            this.playerHealth -= doDamage(12, 5);
            this.checkWin();
        },

        checkWin: function() {
            if(this.monsterHealth <= 0) {
                if(confirm("You won!  New game?")) {
                    this.startGame();
                } else {
                    this.gameRunning = false;
                }
            } else if(this.playerHealth <= 0) {
                if(confirm("You lost!  New game?")) {
                    this.startGame();
                } else {
                    this.gameRunning = false;
                }
            }
        }
    }
});

function doDamage(max, min) {
    return Math.max(Math.floor(Math.random() * max) + 1, min);
}