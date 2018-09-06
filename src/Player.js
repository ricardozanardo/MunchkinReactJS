import { Card } from './Card';

export function Player(name, sex) {

    let level = 1;
    let strength = 1;
    let power = level + strength;
    let totalPower = power + itemPower;
    let itemPower = 0;
    let classes = [];
    let races = [];
    let cards = [];

    this.getName = function() {
        return name;
    }

    this.getSex = function() {
        return sex;
    }

    this.getLevel = function() {
        return level;
    }

    this.increaseLevel = function() {
        level++;
    }   

    this.decreaseLevel = function() {
        if (level > 1) {
            level--;
        }
    }

    this.equipItem = function(item) {
        itemPower += item.power
    }

    this.dequipItem = function(item) {
        itemPower -= item.power
    }

    this.addCard = function() {
        cards.push(new Card("Test", "Test card"));
    }

    this.showCards = function() {
        cards.forEach( (card) => {
            console.log("Name: " + card.getName() + " - Description: " + card.getDescription());
        })
    }
}