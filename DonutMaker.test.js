import DonutMaker from "./DonutMaker";

describe("DonutMaker", () =>{

    test("should be able to add a donut and retrieve the total count", () =>{
        //Arrange
        const underTest = new DonutMaker(0);
        //Act
        underTest.addDonut();
        //Assert
        expect(underTest.numDonuts).toEqual(1);
    });

    test("should be able to add an autoclicker with 100 donuts", () =>{
        //Arrange
        const underTest = new DonutMaker(100, 0);
        //Act
        underTest.addAutoClicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClickers).toEqual(1);
    });

    test("should not be able to purchase an autoclicker with 99 donuts", () =>{
        //Arrange
        const underTest = new DonutMaker(99, 0);
        //Act
        underTest.addAutoClicker();
        //Assert
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoClickers).toEqual(0);
    });

    test("should be able to increase autoclicker count by 10% each time is purchased", () =>{
        const underTest = new DonutMaker(100, 0, 100);
        underTest.addAutoClicker();
        expect(underTest.autoClickerCost).toEqual(110);
    })

    test("should be able to increase second autoclicker by 10%", () =>{
        const underTest = new DonutMaker(100, 2, 110);
        underTest.addAutoClicker();
        expect(underTest.autoClickerCost).toEqual(121);
    })

    test("should be able to increase the number of donuts for each autoclicker", () =>{
        const underTest = new DonutMaker(100, 2, 110);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(102);
    })

    test("should be able to add a donut multiplier and retrieve the total count", () =>{
        const underTest = new DonutMaker(10, 0, 0, 0);
        underTest.addDonutMultiplier();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numDonutMultiplier).toEqual(1);
    })

    test("should be able to increase the cost of the donut multiplier by 10% each time is purchased", () =>{
        const underTest = new DonutMaker(11, 0, 0, 1);
        underTest.addDonutMultiplier();
        expect(underTest.donutMultiplierCost).toEqual(11);
    })



})