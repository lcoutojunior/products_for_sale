import Shoe from "@entities/ShoeEntity";
import ShoeService from "@services/ShoeService";
import { validate, ValidationError } from "class-validator";
import { checkIfValidUUID } from "@validators/uuid_validator";

export default class ShoeController {

    public static async getShoes(req: any, res: any) {
        try {
            return res.status(200).json("all shoes");
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
            if (checkIfValidUUID(uuid)) {
                return res.status(200).json("shoe: " + uuid);
            } else {
                return res.status(404).json("invalid uuidv4");
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

            let shoe = new Shoe(
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

            const errors: ValidationError[] = await validate(shoe);

            if (errors.length > 0) {
                res.status(403).json(errors);
            } else {
                return res.json(await ShoeService.createShoe(shoe));
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