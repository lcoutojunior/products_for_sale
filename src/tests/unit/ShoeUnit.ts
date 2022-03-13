import Shoe from "../../entities/ShoeEntity";

test("shoe", () => {
    let shoe = new Shoe(
        "0",
        "Nike Shox R4",
        "Nike",
        "R$",
        "749,99",
        "529,99",
        12,
        "44,17",
        4.5,
        540,
        "Masculino",
        100,
        "Cadarço",
        "Borracha",
        9
    );

    expect(shoe.internal_code).toStrictEqual("0"),
        expect(shoe.name).toStrictEqual("Nike Shox R4"),
        expect(shoe.brand).toStrictEqual("Nike"),
        expect(shoe.currency).toStrictEqual("R$"),
        expect(shoe.previous_price).toStrictEqual("749,99"),
        expect(shoe.current_price).toStrictEqual("529,99"),
        expect(shoe.installments).toStrictEqual(12),
        expect(shoe.installment_price).toStrictEqual("44,17"),
        expect(shoe.rating).toStrictEqual(4.5),
        expect(shoe.reviews).toStrictEqual(540),
        expect(shoe.gender).toStrictEqual("Masculino"),
        expect(shoe.available_qty).toStrictEqual(100),
        expect(shoe.locking_type).toStrictEqual("Cadarço"),
        expect(shoe.sole_type).toStrictEqual("Borracha"),
        expect(shoe.colors_qty).toStrictEqual(9)

});