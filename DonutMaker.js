class DonutMaker{


    constructor(numDonuts, numAutoClickers,autoClickerCost, numDonutMultiplier, donutMultiplierCost){
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickerCost = autoClickerCost;
        this.numDonutMultiplier = this.numDonutMultiplier;
        this.donutMultiplierCost = donutMultiplierCost;
    }

    addDonut(){
        this.numDonuts += 1;
        if(this.numAutoClickers >=1){
            this.numDonuts++;
        }
    }

    addAutoClicker(){
        if(this.numDonuts >=100){
        this.numDonuts -= 100;
        this.numAutoClickers += 1;
        }

        if(this.numAutoClickers >= 1){
            this.autoClickerCost += this.autoClickerCost * 0.1;
        }
    }

    addDonutMultiplier(){
        if(this.numDonuts >= 10){
            this.numDonuts -= 10;
            this.numDonutMultiplier += 1;
        }

        if(this.numDonutMultiplier >= 1){
            this.donutMultiplierCost += this.donutMultiplierCost * 0.1;
        }
        
    }
}

export default DonutMaker;