class Elevator {
    constructor(maxFloor, minFloor) {
        this.currentFloor = 0
        this.maxFloor = maxFloor
        this.minFloor = minFloor
    }
 
    goUp() {
        if (this.currentFloor < this.maxFloor) {
            this.currentFloor++
        }
    }
 
    goDown() {
        if (this.currentFloor > this.minFloor) {
            this.currentFloor--
        }
    }
 
    goToFloor(floor) {
        if (this.currentFloor >= this.minFloor && this.currentFloor <= this.maxFloor) {
            this.currentFloor = floor
        }
    }
 
    displayFloor() {
        console.log(this.currentFloor)
    }
}
 
const max = new Elevator(12, 0)
max.goUp()
max.goUp()
max.goUp()
max.displayFloor()
 
max.goDown()
max.displayFloor()
 
max.goToFloor(10)
max.displayFloor()