import Router from "express";
const router = Router();
import validateParams from "../middleware/validate.js";

import { create, getById, getUsers, updateOne, activateMany } from "../controllers/user.js";

router.post(
  "/",
  validateParams(
    [
      {
        param_key: "name",
        required: true,
        type: "object",
      },
      {
        param_key: "password",
        required: true,
        type: "string",
      },
    ],
    "body"
  ),
  create
);

router.get(
    "/allUsers/:body",
    validateParams(
      [
        {
          param_key: "body",
          required: true,
          type: "string",
        },
      ],
      "params"
    ),
    getUsers
  );

router.get(
"/:id",
validateParams(
    [
    {
        param_key: "id",
        required: true,
        type: "string",
    },
    ],
    "params"
),
getById
);

router.put(
    "/:id",
    validateParams(
      [
        {
          param_key: "id",
          required: true,
          type: "string",
        },
      ],
      "params"
    ),
    validateParams(
      [
        {
          param_key: "name",
          required: false,
          type: "object",
        },
      ],
      "body"
    ),
    updateOne
);

router.put(
    "/active/many",
    validateParams(
      [
        {
          param_key: "users",
          required: true,
          type: "array",
        },
      ],
      "body"
    ),
    activateMany
  );

export default router;
