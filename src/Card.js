export function Card(name, description) {

    let effects = [];
    
    this.getName = function() {
        return name;
    }

    this.getDescription = function() {
        return description;
    }
}