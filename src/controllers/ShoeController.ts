import Shoe from "@entities/ShoeEntity";
import ShoeService from "@services/ShoeService";
import { validate, ValidationError } from "class-validator";
import { checkIfValidUUID } from "@validators/uuid_validator";

export default class ShoeController {

    private static extractShoe(req: any): Shoe {
        let shoe = new Shoe(
            req.body.internal_code,
            req.body.name,
            req.body.brand,
            req.body.currency,
            req.body.previous_price,
            req.body.current_price,
            req.body.installments,
            req.body.installment_price,
            req.body.rating,
            req.body.reviews,
            req.body.gender,
            req.body.available_qty,
            req.body.locking_type,
            req.body.sole_type,
            req.body.colors_qty
        );

        return shoe;
    }

    public static async getShoes(req: any, res: any) {
        try {
            let shoeService = await ShoeService.getShoes();
            return res.status(200).json({ "shoes": shoeService });
        } catch (e: unknown) {
            if (e instanceof Error) {
                return res.status(400).json(e.message);
            } else {
                return res.status(500).send("internal error")
            }
        }
    }

    public static async getShoe(req: any, res: any) {
        try {

            let uuid = req.params.uuid
            if (!checkIfValidUUID(uuid)) {
                return res.status(400).json("invalid uuidv4");
            }


            let shoe = await ShoeService.getShoe(uuid);
            if (shoe) {

                return res.status(200).json({ "shoe": shoe });
            } else {

                return res.status(404).json({ "shoe": "not found" })
            }

        } catch (e: unknown) {
            if (e instanceof Error) {
                return res.status(400).json(e.message);
            } else {
                return res.status(500).send("internal error")
            }
        }

    }

    public static async createShoe(req: any, res: any) {
        try {

            let shoe = this.extractShoe(req);
            const errors: ValidationError[] = await validate(shoe);
            if (errors.length > 0) {
                res.status(403).json(errors);
            } else {
                return res.status(201).json(await ShoeService.createShoe(shoe));
            }

        } catch (e: unknown) {

            if (e instanceof Error) {
                return res.status(400).json(e.message);
            } else {
                return res.status(500).send("internal error")
            }
        }
    }

    public static async updateShoe(req: any, res: any) {
        try {

            let shoe = this.extractShoe(req);
            //Keeps the original uuid.
            shoe.uuid = req.body.uuid;

            const errors: ValidationError[] = await validate(shoe);
            if (errors.length > 0) {
                return res.status(403).json(errors);
            }

            let shoeUpdated = await ShoeService.updateShoe(shoe);
            if (shoeUpdated) {
                return res.status(200).json({ "updated": shoeUpdated });
            } else {
                return res.status(404).json({ "updated": "shoe not found" });
            }

        } catch (e: unknown) {

            if (e instanceof Error) {
                return res.status(400).json(e.message);
            } else {
                return res.status(500).send("internal error")
            }
        }
    }

    public static async deleteShoe(req: any, res: any) {
        try {
            if (!checkIfValidUUID(req.params.uuid)) {
                return res.status(400).json("invalid uuidv4")
            }

            let shoe = await ShoeService.deleteShoe(req.params.uuid);

            if (shoe) {
                return res.status(200).json({ "deleted": shoe });
            } else {
                return res.status(404).json({ "deleted": "shoe not found" });
            }


        } catch (e: unknown) {

            if (e instanceof Error) {
                return res.status(400).json(e.message);
            } else {
                return res.status(500).send("internal error")
            }
        }
    }
}