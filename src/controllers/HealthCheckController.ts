export default class HealthCheckController {

    public static async healthCheck(req: any, res: any) {

        try {
            return res.status(200).json("pong");
        } catch (e: unknown) {
            if (e instanceof Error) {
                return res.status(400).json(e.message);
            } else {
                return res.status(500).send("internal error")
            }
        }

    }
}